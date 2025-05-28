# Memoria del Proyecto: Campaña de Marketing Digital con MJML para Feria Valencia — Caso 2: Cevisama

## Índice

1. [Introducción y Contexto del Reto](#introducción-y-contexto-del-reto)
2. [Caso Práctico 2: Cevisama - Comunicación a Expositores](#caso-práctico-2-cevisama---comunicación-a-expositores)
3. [Análisis y Planificación](#análisis-y-planificación)
   - [Público Objetivo](#público-objetivo)
   - [DAFO y Competencia](#dafo-y-competencia)
   - [Objetivos de la Campaña](#objetivos-de-la-campaña)
4. [Diseño](#diseño)
   - [Creatividad e Innovación](#creatividad-e-innovación)
   - [Mockup](#mockup)
   - [Responsive Avanzado (MJML + Media Queries)](#responsive-avanzado-mjml--media-queries)
5. [Test con Usuarios](#test-con-usuarios)
6. [Desarrollo y Envío de Correos](#desarrollo-y-envío-de-correos)
7. [Integración con Redes Sociales](#integración-con-redes-sociales)
8. [Control de Versiones con GitHub](#control-de-versiones-con-github)
9. [Datos y Base de Datos](#datos-y-base-de-datos)
10. [Personalización del Correo MJML](#personalización-del-correo-mjml)
11. [Verificación de Compatibilidad](#verificación-de-compatibilidad)
12. [Documentación Final](#documentación-final)
13. [Entrega y Defensa del Proyecto](#entrega-y-defensa-del-proyecto)

## Introducción y Contexto del Reto

Este proyecto surge dentro del marco del reto lanzado por Feria Valencia al IES La Sénia, con el objetivo de aplicar MJML en casos reales de comunicación profesional.

## Caso Práctico 2: Cevisama - Comunicación a Expositores

La campaña de email se dirige a empresas expositoras en la feria internacional Cevisama, destacando las nuevas inversiones en internacionalización y atracción de visitantes profesionales.

---

## Análisis y Planificación

### Público Objetivo

- Expositores nacionales e internacionales
- Marcas de cerámica, baño y piedra natural
- Directores comerciales y marketing B2B

### DAFO y Competencia

**Fortalezas**
- Alta especialización sectorial
- Contenido profesional y visual atractivo
- Inclusión de ventajas competitivas para el expositor

**Debilidades**
- Limitación de elementos interactivos en email
- Diferencia de idiomas y contexto internacional

**Oportunidades**
- Tendencia creciente de ferias B2B con enfoque digital
- Posibilidad de fidelización de expositores año tras año

**Amenazas**
- Alta competencia con otras ferias europeas del sector
- Desinterés si no se comunica valor claramente

### Objetivos de la Campaña

- Comunicar mejoras en la estrategia de internacionalización
- Incentivar la renovación y participación en Cevisama
- Fortalecer la relación institucional con los expositores

---

## Diseño

### Estilo Visual

- **Fondo principal:** #1A1A1A (Gris Casi Negro)
- **Secciones intermedias:** #1F1F1F (Gris Profundo)
- **Bloques destacados / CTA:** #0F0F0F (Negro Profundo)
- **Textos principales:** #ffffff (Blanco Puro)
- **Textos secundarios:** #bbbbbb (Gris Claro)
- **Textos más tenues:** #cccccc (Gris Suave)
- **Botón principal:** #0072CE (Azul Corporativo)
- **Gradiente CTA:** #DA0081 (Magenta Corporativo)

### Creatividad e Innovación

Diseño profesional, sobrio y elegante:
- Tipografía corporativa y minimalista
- Colores neutros con detalles azules (corporativos)
- Imágenes de ferias anteriores y gráficos de inversión

### Mockup

Basado en plantillas MJML personalizadas con estructura modular.

### Responsive Avanzado (MJML + Media Queries)

- Desktop: bloques lado a lado con estadísticas
- Tablet: reorganización en columnas verticales
- Móvil: enfoque claro en los beneficios

---

## Test con Usuarios

Feedback de profesionales y docentes con experiencia empresarial, con ajustes para claridad en CTA y traducciones.

---

## Desarrollo y Envío de Correos

Automatización mediante Node.js, integración con base de datos MySQL para personalizar campos como nombre y empresa.

---

## Integración con Redes Sociales

Publicaciones en LinkedIn y Twitter orientadas al sector empresarial.

---

## Control de Versiones con GitHub

Repositorio actualizado con ramas por supuesto y estructura modular:

```plaintext
📁 practicas-feria-valencia/
├── 📁 caso-practico-2/
│   ├── Newsletter_Cevisama.mjml
│   └── info.md
```

---

## Datos y Base de Datos

Tablas orientadas a expositores: idioma, empresa, tipo de producto, historial de participación.

---

## Personalización del Correo MJML

Variables destacadas:
- `{{empresa}}`
- `{{sector}}`
- `{{nombre_contacto}}`

---

## Verificación de Compatibilidad

Probado con éxito en Outlook, Gmail y Apple Mail.

---

## Documentación Final

Guía técnica, pasos para ejecutar la plantilla MJML, y scripts de envío documentados.

---

## Entrega y Defensa del Proyecto

Presentación prevista para el 9 de junio, con demostración real del correo personalizado enviado a un expositor simulado.