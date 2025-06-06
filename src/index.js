require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mjml = require('mjml');
const { Pool } = require('pg');
const express = require('express');
const { enviarNewsletters } = require('./mailer');

const app = express();
const PORT = process.env.PORT || 3000;

const baseDir = path.join(__dirname, 'templates');
const outputDir = path.join(__dirname, 'output');

// 🛡️ PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// 🧱 Inicializar DB y generar HTMLs
async function init() {
  try {
    const client = await pool.connect();
    console.log('✅ Conectado a PostgreSQL');

    await client.query(`DROP TABLE IF EXISTS suscriptores;`);

    await client.query(`
      CREATE TABLE IF NOT EXISTS templates (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255) UNIQUE,
        contenido TEXT
      );
    `);

    await client.query(`
      CREATE TABLE suscriptores (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100),
        email VARCHAR(255) UNIQUE,
        empresa VARCHAR(255),
        idioma VARCHAR(10),
        tiempo_respuesta DATE DEFAULT NULL
      );
    `);

    const entries = fs.readdirSync(baseDir, { withFileTypes: true });
    const casos = entries.filter(e => e.isDirectory() && e.name.startsWith('Caso-'));

    for (const caso of casos) {
      const casoPath = path.join(baseDir, caso.name);
      const files = fs.readdirSync(casoPath).filter(f => f.endsWith('.mjml'));

      for (const file of files) {
        const inputPath = path.join(casoPath, file);
        const mjmlContent = fs.readFileSync(inputPath, 'utf8');
        const result = mjml(mjmlContent);

        if (result.errors.length) {
          console.warn(`⚠️ Errores en MJML de ${file}:`, result.errors);
        }

        const casoOutputDir = path.join(outputDir, caso.name);
        fs.mkdirSync(casoOutputDir, { recursive: true });

        const outputPath = path.join(casoOutputDir, file.replace('.mjml', '.html'));
        fs.writeFileSync(outputPath, result.html);
        console.log(`✅ HTML generado: ${outputPath}`);

        const nombreTemplate = `${caso.name}/${file.replace('.mjml', '.html')}`;
        await client.query(`
          INSERT INTO templates (nombre, contenido)
          VALUES ($1, $2)
          ON CONFLICT (nombre) DO UPDATE SET contenido = EXCLUDED.contenido
        `, [nombreTemplate, result.html]);

        console.log(`✅ Guardado en DB: ${nombreTemplate}`);
      }
    }

    await client.query(`
      INSERT INTO suscriptores (nombre, email, empresa, idioma, tiempo_respuesta) VALUES
        ('Pau', 'paulopeznunez@gmail.com', 'Valencia Comics', 'es', '2025-11-15'),
        ('Elena', 'elenalablan@gmail.com', 'Feria Joven', 'es', '2025-11-15'),
        ('Roberto', 'robertomoramoreno3@gmail.com', 'UK Events', 'en', '2025-11-15'),
        ('Moha', 'mohamed.shahin1703@gmail.com', 'Feria Joven', 'es', '2025-11-15'),
        ('Ruben', 'rubenramirezcatalu@gmail.com', 'Feria Dos Ruedas', 'es', '2025-11-15')
      ON CONFLICT (email) DO NOTHING;
    `);

    console.log("✅ Suscriptores insertados");
    client.release();
  } catch (err) {
    console.error('❌ Error al iniciar:', err);
  }
}

init();

// 🔥 Servir HTMLs generados desde /output
app.use('/', express.static(outputDir));

// ✅ Servir imágenes desde public/images
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// 🌐 Página principal
app.get('/', (req, res) => {
  if (!fs.existsSync(outputDir)) {
    return res.send('<h1>No hay newsletters generadas todavía.</h1>');
  }

  const casos = fs.readdirSync(outputDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let html = '<h1>📬 Newsletters generadas</h1><ul>';
  for (const caso of casos) {
    const archivos = fs.readdirSync(path.join(outputDir, caso)).filter(f => f.endsWith('.html'));
    for (const archivo of archivos) {
      html += `<li><a href="${caso}/${archivo}" target="_blank">${caso}/${archivo}</a></li>`;
    }
  }
  html += '</ul>';

  // Galería de imágenes
  const imagesDir = path.join(__dirname, 'public', 'images');
  if (fs.existsSync(imagesDir)) {
    const imagenes = fs.readdirSync(imagesDir).filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
    html += '<h2>🖼️ Imágenes disponibles</h2><ul style="display:flex; flex-wrap: wrap; gap: 10px;">';
    for (const img of imagenes) {
      html += `<li><img src="/images/${img}" alt="${img}" width="200" style="border-radius:8px;"></li>`;
    }
    html += '</ul>';
  }

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`🌐 Servidor en http://localhost:${PORT} o Render`);
});

// 📤 Envío automático
let envioRealizado = false;

async function enviarTodo() {
  if (envioRealizado) return;

  try {
    const result = await pool.query('SELECT * FROM suscriptores');
    const suscriptores = result.rows;

    suscriptores.forEach(s => {
      if (s.tiempo_respuesta) {
        const fecha = new Date(s.tiempo_respuesta);
        s.tiempo_respuesta = fecha.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
      }
    });

    await enviarNewsletters(suscriptores);
    envioRealizado = true;
  } catch (err) {
    console.error('❌ Error enviando newsletters:', err);
  }
}

setTimeout(enviarTodo, 5000);
