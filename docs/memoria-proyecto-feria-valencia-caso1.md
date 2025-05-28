# Memoria del Proyecto: Campaña de Marketing Digital con MJML para Feria Valencia – Caso 1: Salón del Cómic de València

## Índice

1. [Introducción y Contexto del Reto](#introducción-y-contexto-del-reto)
2. [Caso Práctico 1: Salón del Cómic de València](#caso-práctico-1-salón-del-cómic-de-valència)
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

Este proyecto se desarrolla dentro del reto lanzado por Feria Valencia, centrado en crear una campaña de marketing digital usando MJML. Este primer caso aborda el Salón del Cómic de València, un evento que atrae tanto a público joven como a familias, con un gran interés por la cultura pop, cómic, videojuegos y cosplay.

## Caso Práctico 1: Salón del Cómic de València

El objetivo era diseñar un boletín informativo atractivo que resaltara las promociones, actividades especiales y preventa de entradas. La comunicación debía ser llamativa y con estilo visual acorde al mundo del cómic.

## Análisis y Planificación

### Público Objetivo

- Adolescentes, jóvenes adultos y familias con hijos
- Fans de cómics, manga, series y videojuegos
- Influencers del ámbito geek y cosplayers

### DAFO y Competencia

**Fortalezas**
- Evento con alto valor emocional y nostálgico
- Comunidad activa que comparte contenido
- Gran abanico de actividades visuales

**Debilidades**
- Saturación visual puede dificultar mensajes clave
- Limitaciones técnicas de algunos correos para diseño gráfico

**Oportunidades**
- Viralización de contenido mediante redes sociales
- Gamificación y retos visuales en el email

**Amenazas**
- Eventos paralelos (otros salones, videojuegos)
- Baja entrega si el diseño es muy pesado

### Objetivos de la Campaña

- Captar la atención con estética tipo cómic
- Aumentar las visitas a la web y compras anticipadas
- Activar el boca a boca digital mediante contenido compartible

## Diseño

### Estilo Visual

- **Fondo principal:** #4F6A44 (Verde Olivo Oscuro)
- **Textos claros:** #F1E3C8 (Crema Suave)
- **Títulos y CTA:** #D79C56 (Naranja Tostado)
- **Detalles y divisores:** #6D7D8B (Gris Azulado) y #8B453A (Marrón Cálido)
- **Fondo secciones oscuras:** #141414 (Negro Profundo)
- **Texto auxiliar:** #bbbbbb (Gris Claro)

### Creatividad e Innovación

El diseño emplea:
- Tipografías tipo cómic y colores vivos (amarillo, rojo, negro)
- Ilustraciones y viñetas con enlaces
- Estilo "cartel de evento" adaptado a formato email

### Mockup

- Adaptación de plantillas MJML con estilo cómic
- Inspiración de newsletters de Marvel, ECC y eventos frikis

### Responsive Avanzado (MJML + Media Queries)

1. **Desktop (>1200px)**: diseño en dos columnas con imágenes amplias
2. **Tablet (768–1200px)**: reorganización a columna única con botones visibles
3. **Móvil (<768px)**: lectura en scroll vertical, botones grandes y navegación sencilla

## Test con Usuarios

Enviado a un grupo objetivo (jóvenes y aficionados):
- Mejora del contraste tras feedback
- Ajuste de CTA para destacar la venta anticipada
- Añadido gif animado (compatible con clientes modernos)

## Desarrollo y Envío de Correos

- Uso de Postmark con variables para personalizar asunto
- Seguimiento con links UTM hacia web oficial del evento

## Integración con Redes Sociales

- Reel con animación del email
- Hashtag #ComicValencia en campañas cruzadas
- Historias en Instagram con swipe-up al boletín

## Control de Versiones con GitHub

Repositorio: https://github.com/PauLopNun/Feria-Valencia-Practicas

```plaintext
📁 practicas-feria-valencia/
├── 📁 assets/
├── 📁 main/
│   ├── 📁 caso-practico-1/
│   │   ├── Newsletter_Salon_Comic_Valencia.mjml
│   │   ├── info.md
│   │   
│   └── ...
└── README.md
```

## Datos y Base de Datos

Esquema centrado en segmentación por fandom/intereses. Segmentación por edad y tipo de entrada comprada.

## Personalización del Correo MJML

Uso de variables:
- `{{nombre}}`
- `{{interes}}` → “cómic”, “videojuego”, “cosplay”

## Verificación de Compatibilidad

Pruebas en:
- Gmail, Outlook, Apple Mail
- Móviles iOS y Android
- Yahoo y ProtonMail

## Documentación Final

Instrucciones paso a paso para modificar el boletín, compilarlo, enviarlo y recoger datos.

## Entrega y Defensa del Proyecto

- Presentación en 5 minutos
- Envío a público real
- Resultados y métricas (tasa de apertura, CTR, feedback visual)