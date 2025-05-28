# Memoria del Proyecto: Campaña de Marketing Digital con MJML para Feria Valencia — Caso 3: Comunicación de Servicios para Expositores (Expojove)

## Índice

1. [Introducción y Contexto del Reto](#introducción-y-contexto-del-reto)
2. [Caso Práctico 3: Comunicación para Expositores de Expojove](#caso-práctico-3-comunicación-para-expositores-de-expojove)
3. [Análisis y Planificación](#análisis-y-planificación)
   - [Público Objetivo](#público-objetivo)
   - [DAFO y Competencia](#dafo-y-competencia)
   - [Objetivos de la Campaña](#objetivos-de-la-campaña)
4. [Diseño](#diseño)
   - [Enfoque Visual y Funcional](#enfoque-visual-y-funcional)
   - [Mockup](#mockup)
   - [Responsive Avanzado (MJML + Media Queries)](#responsive-avanzado-mjml--media-queries)
5. [Test con Usuarios](#test-con-usuarios)
6. [Desarrollo y Envío de Correos](#desarrollo-y-envío-de-correos)
7. [Integración con Plataformas de Gestión](#integración-con-plataformas-de-gestión)
8. [Control de Versiones con GitHub](#control-de-versiones-con-github)
9. [Datos y Base de Datos](#datos-y-base-de-datos)
10. [Personalización del Correo MJML](#personalización-del-correo-mjml)
11. [Verificación de Compatibilidad](#verificación-de-compatibilidad)
12. [Documentación Final](#documentación-final)
13. [Entrega y Defensa del Proyecto](#entrega-y-defensa-del-proyecto)

## Introducción y Contexto del Reto

En este caso práctico, el reto consiste en diseñar una comunicación informativa para los expositores de **Expojove**, la feria infantil y juvenil de Feria Valencia. El objetivo es presentar de forma clara, accesible y atractiva los **servicios disponibles para expositores**, cómo acceder a ellos y los canales de solicitud.

## Caso Práctico 3: Comunicación para Expositores de Expojove

La campaña busca asegurar que todos los expositores conozcan y utilicen los servicios que la feria pone a su disposición: logística, montaje, promoción, necesidades técnicas, etc. Se diseña un email funcional y visualmente ordenado que actúe como guía práctica y útil para los participantes.

## Análisis y Planificación

### Público Objetivo

- Expositores confirmados de Expojove
- Responsables de logística y producción de los stands
- Empresas colaboradoras

### DAFO y Competencia

**Fortalezas**
- Comunicación oficial desde la organización de la feria
- Contenido de alto valor práctico y directo
- Canal digital con seguimiento trazable

**Debilidades**
- Público empresarial con poco tiempo
- Posible saturación de correos antes del evento

**Oportunidades**
- Fidelizar expositores con una experiencia organizada y clara
- Reducir errores o incidencias mediante información anticipada

**Amenazas**
- Desactualización de datos de contacto
- Baja tasa de apertura si el asunto no refleja urgencia

### Objetivos de la Campaña

- Informar de forma clara y rápida sobre los servicios disponibles
- Facilitar enlaces y formularios para solicitudes
- Mejorar la experiencia de montaje y gestión previa al evento

## Diseño

### Estilo Visual

- **Fondo principal:** #ffffff (Blanco)
- **Encabezado y CTA:** #00adef (Azul Celeste)
- **Subtítulos suaves:** #dff6fd (Azul Muy Claro)
- **Bloque de bienvenida:** #fdd900 (Amarillo Vibrante)
- **Texto general:** #333333 (Gris Oscuro)
- **Botón CTA:** #ec008c (Magenta Intenso)

### Enfoque Visual y Funcional

El diseño apuesta por:
- Bloques temáticos por tipo de servicio (logística, montaje, apoyo técnico, promoción)
- Iconografía clara y moderna
- Tipografía sans-serif legible en todos los dispositivos

### Mockup

Diseño con estructura tipo guía rápida:
- Introducción breve
- Servicios destacados con enlaces y fechas límite
- Datos de contacto y soporte

### Responsive Avanzado (MJML + Media Queries)

- **Desktop:** presentación en dos columnas con íconos
- **Tablet:** formato en columna única con encabezados llamativos
- **Móvil:** scroll con accesos rápidos y botones de llamada a la acción

## Test con Usuarios

- Test con expositores de años anteriores
- Revisión de términos técnicos y claridad en CTA
- Mejora en la visibilidad de fechas y enlaces

## Desarrollo y Envío de Correos

- Codificado en MJML
- Test con Email on Acid
- Envío programado a través de Mailgun

## Integración con Plataformas de Gestión

- Enlaces a formularios de solicitud en línea
- Integración con base de datos interna de expositores

## Control de Versiones con GitHub

Repositorio específico:

```plaintext
📁 practicas-feria-valencia/
├── 📁 caso-practico-3/
│   ├── Newsletter_Expositores_Expojove.mjml
│   └── info.md
```

## Datos y Base de Datos

Uso de CRM de la feria para segmentación y validación de datos. Filtrado por tipo de expositor.

## Personalización del Correo MJML

**Variables utilizadas:**

- `{{empresa}}`
- `{{nombre_contacto}}`
- `{{plazo_respuesta}}`

## Verificación de Compatibilidad

Probado en clientes de correo corporativos como:

- Outlook
- Gmail
- Thunderbird

Se han optimizado imágenes y añadido textos alternativos accesibles para garantizar la compatibilidad.

## Documentación Final

Incluye:

- Manual para personalización de futuras ediciones
- Listado de servicios y enlaces a recursos oficiales
- Validación del flujo de comunicación y checklist de control

## Entrega y Defensa del Proyecto

El diseño fue presentado junto a una simulación de envío en entorno de pruebas.  
Se valoró especialmente:

- Claridad informativa
- Funcionalidad de enlaces y llamadas a la acción
- Escalabilidad y reutilización del diseño en próximas ediciones
