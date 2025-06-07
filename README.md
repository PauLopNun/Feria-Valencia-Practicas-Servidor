# Prácticas de MJML – Feria Valencia (Render Deployment)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![MJML](https://img.shields.io/badge/MJML-FD652F?style=flat&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
![Responsive Design](https://img.shields.io/badge/Responsive--Design-0088CC?style=flat&logo=google-chrome&logoColor=white)

---

¡Hola! Soy **Pau**, y este es el repositorio donde he documentado mi trabajo con **MJML**, un framework potente para crear emails responsive.  
A lo largo de estas prácticas, he diseñado campañas de email marketing orientadas a eventos reales de **Feria Valencia**, combinando técnica, diseño y despliegue profesional en la nube.

---

## 📌 Índice

- [🎯 Objetivo del Proyecto](#objetivo-del-proyecto)
- [📬 Casos Prácticos](#casos-prácticos-desarrollados)
- [🎨 Estética y Paleta](#estética-y-paleta-de-colores)
- [🗂️ Estructura del Repositorio](#estructura-del-repositorio)
- [🛠️ Tecnologías y Herramientas](#tecnologías-y-herramientas)
- [🚀 Cómo Ver el Proyecto en Producción](#cómo-ver-el-proyecto-en-producción)
- [🙏 Agradecimientos](#agradecimientos)
- [📫 Contacto](#contacto)

---

## 🎯 Objetivo del Proyecto

Diseñar boletines informativos realistas para eventos de **Feria Valencia**, automatizando el flujo de generación y envío con **MJML**, **Node.js**, y **PostgreSQL**, todo desplegado en **Render.com** con acceso público.

---

## 📬 Casos Prácticos Desarrollados

### 🔹 Salón del Cómic de València
> Estética visual tipo cómic, gifs, botones llamativos y mensajes para un público joven y geek.

### 🔹 Feria Dos Ruedas
> Promoción de entradas al GP de Cheste con diseño dinámico, temporizador animado y CTA directo.

### 🔹 Expojove – Servicios para Expositores
> Correo informativo con estructura clara sobre logística, servicios técnicos y enlaces a formularios.

### 🔹 Cevisama – Comunicación a Expositores
> Email B2B con enfoque sobrio y profesional para fidelización e internacionalización de marcas.

---

## 🎨 Estética y Paleta de Colores

Colores base para todas las campañas, adaptados a cada evento:

| Color               | Uso                              |
|--------------------|-----------------------------------|
| `#4F6A44`           | Verde olivo – Fondos intensos     |
| `#F1E3C8`           | Crema suave – Legibilidad         |
| `#D79C56`           | Naranja tostado – Botones / CTA   |
| `#3C312E`           | Marrón oscuro – Texto principal   |
| `#8B453A` / `#6D7D8B` | Elementos secundarios y divisores |

---

## 🗂️ Estructura del Repositorio

```plaintext
FERIA-VALENCIA-MJML/
├── assets/
├── data/
├── database/
│   └── init.sql
├── docs/
├── src/
│   ├── index.js
│   ├── mailer.js
│   └── templates/
├── public/
│   └── images/  <- Aloja las imágenes accesibles vía URL
├── .env.example
├── Dockerfile
├── package.json
└── README.md
```

---

## 🛠️ Tecnologías y Herramientas

- **MJML** → Emails responsive  
- **Node.js + Express** → Servidor y lógica  
- **PostgreSQL (Render DB)** → Gestión de suscriptores  
- **Nodemailer** → Envío automático de correos  
- **Render.com** → Despliegue en la nube  
- **GitHub** → Control de versiones

---

## 🚀 Cómo Ver el Proyecto en Producción

Este proyecto está desplegado en Render y puede visualizarse online:

- 🔗 Sitio Web: [feria-valencia-practicas-servidor.onrender.com](https://feria-valencia-practicas-servidor.onrender.com/)
- 🖼️ Imágenes: `https://feria-valencia-practicas-servidor.onrender.com/images/`
- 📧 Endpoints de prueba: `https://feria-valencia-practicas-servidor.onrender.com/send`

---

## 🙏 Agradecimientos

Gracias a **Feria Valencia** y al profesorado del **IES La Sénia** por ofrecer un contexto educativo desafiante y profesional.

---

## 📫 Contacto

**Pau López Núñez**  
[📧 paulopnun@gmail.com](mailto:paulopnun@gmail.com)  
[🔗 GitHub](https://github.com/paulopnun) • [🔗 LinkedIn](https://www.linkedin.com/in/paulopnun)

---

**¡Gracias por visitar este repositorio desplegado en Render!**
