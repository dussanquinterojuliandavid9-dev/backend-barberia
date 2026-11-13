# 💈 BARBERÍA JESÚS QUINTERO - Sistema de Gestión y Reservas

## 📖 Descripción del Proyecto

**Barbería Jesús Quintero** es una plataforma web y móvil integral diseñada para modernizar, optimizar y digitalizar las operaciones diarias de la barbería. 
El sistema conecta de manera fluida a los clientes con el equipo de trabajo mediante un entorno intuitivo y eficiente.
Para los clientes: Permite consultar el catálogo de servicios, verificar la disponibilidad en tiempo real y agendar citas en línea de forma rápida y sencilla desde cualquier dispositivo.
Para administradores y barberos: Brinda control total sobre la gestión de horarios, administración de servicios, disponibilidad de agenda, control de clientes e historial detallado de atención.

 🎯 Propósito y Problema que Resuelve
El proyecto nace con el objetivo de erradicar la gestión manual de turnos llevada a cabo mediante agendas físicas, llamadas o mensajes dispersos en redes sociales.
Con esta solución digital se evitan los cruces de horarios, los tiempos muertos y la pérdida de información, elevando la calidad de experiencia del cliente y agilizando la administración interna del negocio.

 🛠️ Tecnologías Utilizadas
Entorno de ejecución:** Node.js
Framework Backend:** Express
Motor de Base de Datos:** PostgreSQL
Gestión de variables de entorno:** Dotenv

 📋 Requisitos Previos

Antes de clonar y ejecutar este proyecto en tu entorno local, asegúrate de tener instalados los siguientes programas:

[Node.js](https://nodejs.org) (versión v18 o superior recomendada)
PostgreSQL](https://postgresql.org) (servidor activo y gestor como pgAdmin)
[Git](https://git-scm.com) (para clonar el repositorio)


🚀 Instalación y Ejecución Local

Sigue estos pasos en orden para instalar y poner en marcha el servidor en tu computadora:

 1. Clonar el repositorio
Abre tu terminal y descarga el código fuente del proyecto:
```bash
git clone [URL_DE_TU_REPOSITORIO_EN_GITHUB]
cd [NOMBRE_DE_LA_CARPETA]
```

 2. Instalar dependencias
Ejecuta el siguiente comando para descargar todas las librerías necesarias del proyecto (Express, conectores de PostgreSQL, etc.):
```bash
npm install
```

 3. Configurar las variables de entorno (`.env`)
Crea un archivo llamado `.env` en la carpeta raíz del proyecto y define las siguientes variables con tus credenciales locales de PostgreSQL:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_contraseña_postgres
DB_NAME=barberia_jesus_quintero
```

 4. Preparar la base de datos
Abre pgAdmin** (o tu consola de PostgreSQL) y crea una base de datos vacía llamada `barberia_jesus_quintero` antes de iniciar el servidor.

 5. Ejecutar el proyecto
Enciende el servidor local ejecutando alguno de los siguientes comandos:
```bash
# Modo producción / estándar
npm start

# Modo desarrollo (con reinicio automático si usas nodemon)
npm run dev
```

Una vez iniciado correctamente, el servidor estará escuchando en:
`http://localhost:3000`

---

 📁 Estructura de Carpetas

El código fuente del proyecto está organizado de manera modular para facilitar su mantenimiento y escalabilidad:

```text
├── src/ (o carpeta raíz)
│   ├── config/         # Configuración de conexión a PostgreSQL y variables globales del sistema
│   ├── controllers/    # Lógica de negocio y procesamiento de peticiones (citas, usuarios, servicios)
│   ├── models/         # Definición de tablas, esquemas y consultas hacia la base de datos PostgreSQL
│   ├── routes/         # Definición de las rutas y endpoints de la API REST
├── .env                # Variables de entorno locales (ignorado en Git por seguridad)
├── .gitignore          # Archivos y carpetas excluidos del repositorio (node_modules, .env)
├── package.json        # Metadatos del proyecto, scripts y lista de dependencias
└── README.md           # Documentación principal del proyecto
```

---

 👥 Integrantes del Equipo

Julian David Dussan Quintero
Lady Milena Ortiz Vargas
