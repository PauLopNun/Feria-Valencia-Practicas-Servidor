# Memoria del Proyecto: Campaña de Marketing Digital con MJML para Feria Valencia – Caso 4: Feria Dos Ruedas

## Índice

1. [Introducción y Contexto del Reto](#introducción-y-contexto-del-reto)
2. [Caso Práctico 4: Feria Dos Ruedas](#caso-práctico-4-feria-dos-ruedas)
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

Este caso pertenece a la campaña digital para la promoción de la Feria Dos Ruedas organizada por Feria Valencia. Se propone la creación de un boletín MJML centrado en dinamizar la inscripción al sorteo de dos entradas para el Gran Premio de Motociclismo de Cheste. La acción promocional se limita a quienes cumplimenten el formulario de entradas antes del 1 de septiembre.

## Caso Práctico 4: Feria Dos Ruedas

El objetivo principal fue motivar a los aficionados a las motos a visitar la feria e inscribirse al sorteo exclusivo, con una campaña que transmita adrenalina y pasión por el motociclismo.

## Análisis y Planificación

### Público Objetivo

- Motociclistas y aficionados al motociclismo
- Público masculino de 18 a 50 años
- Grupos de amigos y clubes moteros
- Visitantes habituales de circuitos y ferias del motor

### DAFO y Competencia

**Fortalezas**
- Evento de referencia en el mundo de las dos ruedas
- Sorteo de entradas para el GP de Cheste, altamente atractivo
- Asociación con marcas líderes del sector

**Debilidades**
- Limitación temporal del sorteo (hasta 1 de septiembre)
- Público potencialmente saturado de emails promocionales

**Oportunidades**
- Generar comunidad y fidelización a través del sorteo
- Impulsar preventa y tráfico web
- Ampliación de base de datos cualificada

**Amenazas**
- Competencia con eventos automovilísticos y ferias similares
- Posible desinterés si el correo no impacta visualmente

### Objetivos de la Campaña

- Incentivar la participación en el sorteo mediante un CTA directo
- Transmitir emoción y exclusividad
- Redirigir tráfico a la web de entradas
- Aumentar el número de formularios cumplimentados antes del 1 de septiembre

## Diseño

### Estilo Visual

- **Fondo principal:** #1e1e1e (Negro Puro)
- **Secciones principales:** #111111 (Gris Muy Oscuro)
- **Títulos y CTA:** #e50914 (Rojo Intenso)
- **Textos y enlaces:** #bbbbbb (Gris Claro)
- **Divisores:** #1c1c1c y #000000 (Negros Profundos)

### Creatividad e Innovación

El diseño del boletín incluye:
- Estética de competición (colores rojo, negro y gris metalizado)
- Imágenes de alta velocidad (GP, motos, pilotos)
- Tipografía robusta y agresiva
- Cuenta regresiva animada hasta la fecha límite del sorteo

### Mockup

- Plantilla MJML inspirada en campañas de MotoGP y Ducati
- Elementos gráficos dinámicos como rayas de velocidad y efectos visuales

### Responsive Avanzado (MJML + Media Queries)

1. **Desktop (>1200px)**: dos columnas con imagen del GP y CTA destacado
2. **Tablet (768–1200px)**: reorganización centrada con secciones dinámicas
3. **Móvil (<768px)**: botones de inscripción grandes, scroll fluido y enfoque en el sorteo

## Test con Usuarios

Pruebas con público motero:
- Se valoró positivamente la cuenta atrás animada
- Se mejoró el mensaje del CTA para mayor urgencia
- Ajuste en contraste de texto con fondo para mejor legibilidad

## Desarrollo y Envío de Correos

- Uso de Mailgun con seguimiento de métricas (aperturas y clics)
- Parámetros UTM con redirección al formulario oficial de entradas

## Integración con Redes Sociales

- Historias con cuenta atrás en Instagram y Facebook
- Reel mostrando cómo rellenar el formulario
- Sorteo compartido con hashtag #ChesteConDosRuedas

## Control de Versiones con GitHub

Repositorio: https://github.com/PauLopNun/Feria-Valencia-Practicas

```plaintext
📁 practicas-feria-valencia/
├── 📁 assets/
├── 📁 main/
│   ├── 📁 caso-practico-4/
│   │   ├── index.mjml
│   │   ├── style.css
│   │   └── sorteo-gp.jpg
│   └── ...
└── README.md
```

## Datos y Base de Datos

Segmentación basada en tipo de afición: moto GP, enduro, scooter. Integración con CRM para campañas futuras.

## Personalización del Correo MJML

Variables utilizadas:
- `{{nombre}}`
- `{{tipo_moto}}` → “deportiva”, “custom”, “scooter”

## Verificación de Compatibilidad

Test en:
- Outlook, Gmail, Yahoo
- Android e iOS
- Clientes de escritorio y web

## Documentación Final

Pasos para:
- Modificar el contenido del boletín
- Insertar la cuenta atrás animada
- Enviar el boletín y medir resultados

## Entrega y Defensa del Proyecto

- Presentación en 5 minutos
- Envío real a usuarios interesados
- Métricas: % de participación, CTR, tiempo medio en la página