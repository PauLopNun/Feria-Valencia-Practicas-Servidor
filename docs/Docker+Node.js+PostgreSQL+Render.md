# Contenedor Docker y Funcionalidades Implementadas en Feria Valencia

## 1. Contenedor Docker para la Aplicación Node.js

### 🎯 Objetivo
Ejecutar la aplicación Node.js en un entorno aislado, replicable y desplegable automáticamente en la nube mediante Docker.

### 🐳 Dockerfile
Se define el entorno Node.js y se empaqueta el proyecto:

```Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
```

📦 La estructura está organizada con el backend en `src/backend/`, y el punto de entrada es `index.js` en esa ruta.

## 2. package.json
Contiene el script de inicio y todas las dependencias necesarias para funcionamiento y despliegue:

```json
{
  "name": "feria-valencia-practicas",
  "version": "1.0.0",
  "main": "src/backend/index.js",
  "scripts": {
    "start": "node src/backend/index.js"
  },
  "dependencies": {
    "csv-parser": "^3.0.0",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mjml": "^4.15.3",
    "nodemailer": "^6.9.8",
    "pg": "^8.11.2"
  }
}
```

## 3. Despliegue en Render: Docker + Docker Compose

⚙️ ¿Se usa Docker Compose?  
Sí. Aunque no se ejecute manualmente con `docker-compose up`, Render utiliza internamente Docker para construir y lanzar el contenedor a partir del Dockerfile.

Render se encarga de:

- Clonar el repositorio.
- Ejecutar `docker build`.
- Lanzar el contenedor con `npm start` automáticamente.

✅ Es un entorno Docker real, automatizado por Render.

## 4. Lógica de la Aplicación

Funcionalidades clave (`src/backend/index.js`):

- 🔗 Conexión a PostgreSQL usando variables de entorno.
- 🧠 Conversión de plantillas MJML a HTML.
- 💾 Almacenamiento de newsletters en la base de datos.
- 🌐 Servidor web con Express que muestra los boletines HTML.
- 📤 Envío de newsletters por correo electrónico usando Nodemailer.
- 🧹 Ya no se usa CSV para los suscriptores; todo se gestiona desde PostgreSQL.

## 5. Visualización del Proyecto Online

🌍 URL pública de la aplicación:  
[https://feria-valencia-practicas.onrender.com](https://feria-valencia-practicas.onrender.com)

**Endpoints disponibles:**

- `GET /newsletters`: muestra todos los boletines generados.
- `GET /newsletters/:id`: muestra un boletín concreto.
- `POST /send`: (si está habilitado) envía los newsletters a los suscriptores.

## 6. Próximos pasos

- 🔐 Añadir autenticación para un panel de administración.
- 📁 Permitir subida de plantillas MJML desde el navegador.
- 📬 Crear una página pública de suscripción conectada a PostgreSQL.
- 🧪 Implementar pruebas automáticas para garantizar estabilidad.

### Limite diario de envió de correos vía google con nodemailer a tener en cuenta!

- version 1.0