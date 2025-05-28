# 📬 Proyecto Newsletter - Feria Valencia (versión Render)

Este proyecto permite gestionar el envío de newsletters automáticas usando **Node.js**, **MJML**, **PostgreSQL** y **Docker**, todo listo para desplegar en [Render](https://render.com).

---

## 🚀 ¿Cómo desplegar en Render?

### 1. 📌 Haz Fork del repositorio

1. Ve a: [https://github.com/PauLopNun/Feria-Valencia-Practicas](https://github.com/PauLopNun/Feria-Valencia-Practicas)
2. Haz clic en **Fork** para tener tu propia copia del repositorio.

---

### 2. 🗄️ Crea una base de datos PostgreSQL

1. En tu dashboard de Render, haz clic en **New → PostgreSQL**.
2. Elige un nombre (ej: `newsletter-db`) y crea la base de datos.
3. Copia la **Database URL** en formato:  
   ```
   postgres://usuario:contraseña@host:puerto/nombre_basedatos
   ```

---

### 3. 🌐 Crea el servicio web con Docker

1. En Render, haz clic en **New → Web Service**.
2. Selecciona **Deploy from a Git repository** y elige tu fork.
3. Render detectará automáticamente el `Dockerfile` y configurará todo.

---

### 4. 🔐 Añade las variables de entorno

En la sección **Environment → Environment Variables**, añade las siguientes:

```env
# URL completa de PostgreSQL proporcionada por Render
DATABASE_URL=postgres://usuario:contraseña@host:puerto/nombre_basedatos

# Correo del remitente (usa contraseña de aplicación de Gmail)
GMAIL_USER=tuemail@gmail.com
GMAIL_PASS=tu_contraseña_de_aplicacion
```

> ✅ Usa una [contraseña de aplicación de Google](https://support.google.com/accounts/answer/185833?hl=es), no tu clave habitual.

---

### 5. ✅ ¡Listo!

Una vez Render termine el despliegue:

- Tu web estará disponible en una URL como:  
  [https://feria-valencia-practicas.onrender.com](https://feria-valencia-practicas.onrender.com)

- El sistema:
  - Leerá plantillas MJML.
  - Convertirá a HTML.
  - Guardará en PostgreSQL.
  - Enviará correos automáticamente.
  - Mostrará los boletines generados.

---

## 🛠️ Consejos

- Asegúrate de que las variables están bien escritas (sin espacios ni comillas).
- Si no se envían emails, revisa `GMAIL_PASS` (debe ser una contraseña de aplicación).
- Si Render lanza errores, revisa los logs o reinicia el servicio.

---

## 🧪 Proyecto en acción

👉 Puedes ver un ejemplo funcionando aquí:  
[https://feria-valencia-practicas.onrender.com](https://feria-valencia-practicas.onrender.com)

---

¡Gracias por usar este proyecto! Si lo mejoras, haz un pull request 🙌