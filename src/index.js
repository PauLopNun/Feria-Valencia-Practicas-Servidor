require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mjml = require('mjml');
const { Pool } = require('pg');
const express = require('express');
const { enviarNewsletters } = require('./mailer');

const baseDir = path.join(__dirname, 'templates');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function init() {
  try {
    const client = await pool.connect();
    console.log('✅ Conectado a PostgreSQL');

    await client.query(`
      CREATE TABLE IF NOT EXISTS templates (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255) UNIQUE,
        contenido TEXT
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS suscriptores (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100),
        email VARCHAR(255),
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

        const outputDir = path.join(__dirname, 'output', caso.name);
        fs.mkdirSync(outputDir, { recursive: true });

        const outputPath = path.join(outputDir, file.replace('.mjml', '.html'));
        fs.writeFileSync(outputPath, result.html);
        console.log(`✅ HTML generado: ${outputPath}`);

        const nombreTemplate = `${caso.name}/${file.replace('.mjml', '.html')}`;
        await client.query(`
          INSERT INTO templates (nombre, contenido)
          VALUES ($1, $2)
          ON CONFLICT (nombre) DO UPDATE SET contenido = EXCLUDED.contenido
        `, [nombreTemplate, result.html]);

        console.log(`✅ HTML de ${file} guardado en PostgreSQL`);
      }
    }

    client.release();
  } catch (err) {
    console.error('❌ Error en inicialización:', err);
  }
}

async function insertarSuscriptores() {
  try {
    const client = await pool.connect();
    await client.query(`
      INSERT INTO suscriptores (nombre, email, empresa, idioma, tiempo_respuesta) VALUES
        ('Pau', 'paulopeznunez@gmail.com', 'Valencia Comics', 'es', '2025-11-15'),
        ('Elena', 'elenalablan@gmail.com', 'Feria Joven', 'es', '2025-11-15'),
        ('Roberto', 'robertomoramoreno3@gmail.com', 'UK Events', 'en', '2025-11-15'),
        ('Moha', 'mohamed.shahin1703@gmail.com', 'Feria Joven', 'es', '2025-11-15'),
        ('Ruben', 'rubenramirezcatalu@gmail.com', 'Feria Dos Ruedas', 'es', '2025-11-15')
      ON CONFLICT DO NOTHING;
    `);
    client.release();
    console.log("✅ Suscriptores insertados correctamente");
  } catch (err) {
    console.error("❌ Error insertando suscriptores:", err);
  }
}

init().then(() => insertarSuscriptores());

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'output')));

app.get('/', (req, res) => {
  const outputBase = path.join(__dirname, 'output');
  if (!fs.existsSync(outputBase)) {
    return res.send('<h1>No hay newsletters generadas todavía.</h1>');
  }

  const casos = fs.readdirSync(outputBase, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let html = '<h1>📬 Newsletters generadas</h1><ul>';
  for (const caso of casos) {
    const archivos = fs.readdirSync(path.join(outputBase, caso)).filter(f => f.endsWith('.html'));
    for (const archivo of archivos) {
      html += `<li><a href="/${caso}/${archivo}">${caso}/${archivo}</a></li>`;
    }
  }
  html += '</ul>';
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`🌐 Servidor escuchando en http://localhost:${PORT}`);
});

async function enviarTodo() {
  try {
    const result = await pool.query('SELECT nombre, email, empresa, idioma, tiempo_respuesta FROM suscriptores');
    const suscriptores = result.rows;

    suscriptores.forEach(s => {
      if (s.tiempo_respuesta) {
        const fecha = new Date(s.tiempo_respuesta);
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        s.tiempo_respuesta = fecha.toLocaleDateString('es-ES', opciones);
      }
    });

    await enviarNewsletters(suscriptores);
  } catch (err) {
    console.error('❌ Error al enviar newsletters:', err);
  }
}

setTimeout(enviarTodo, 5000);
