# BusRat 🚌

Una aplicación móvil moderna para la compra de pasajes de buses en Bolivia de forma rápida y sencilla.

## 📋 Descripción

BusRat nace con la idea de facilitar la compra de pasajes de buses desde el celular. Permite a cualquier persona buscar viajes, elegir asientos y confirmar reservas en pocos pasos, todo desde una interfaz móvil intuitiva.

## 🛠️ Tecnologías

- **Frontend**: React Native con Expo
- **Backend**: Node.js con Express
- **Base de datos**: PostgreSQL con Prisma ORM

## ✨ Características

- 🔍 Búsqueda de viajes por origen y destino
- 🪑 Selección de asientos interactiva
- 📱 Interfaz móvil optimizada
- 🔐 Sistema de autenticación seguro
- 💳 Confirmación de reservas
- 📊 Gestión de usuarios y viajes

## 🚀 Instalación

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn
- PostgreSQL
- Expo CLI
- Expo Go app (para testing en dispositivo físico)

### Configuración del Backend

```bash
# Clonar el repositorio
git clone git@github.com:link200309/Project-Boletos-Bus.git
cd Project-Boletos-Bus

# Instalar dependencias del backend
cd Server
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de base de datos

# Configurar Prisma
npx prisma generate
npx prisma db push

# Iniciar servidor de desarrollo
npm run dev
```

### Configuración del Frontend (Expo)

```bash
# Instalar dependencias del frontend
cd ../Client
npm install

# Instalar Expo CLI globalmente (si no lo tienes)
npm install -g @expo/cli

# Iniciar el servidor de desarrollo
expo start

# Opciones para ejecutar:
# - Presiona 'a' para abrir en Android
# - Presiona 'i' para abrir en iOS Simulator
# - Escanea el código QR con Expo Go app
```

## 📁 Estructura del Proyecto

```
Project-Boletos-Bus/
├── Server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── generated/
│   ├── prisma/
│   ├── config.js
│   ├── index.js
│   ├── package.json
│   └── .env
├── Client/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── navigation/
│   │   ├── screens/
│   │   └── utils/
│   ├── App.js
│   ├── app.json
│   ├── expo.json
│   ├── metro.config.js
│   ├── package.json
│   └── package-lock.json
└── README.md
```

## 🔧 Configuración

### Base de Datos

1. Crear una base de datos PostgreSQL
2. Configurar las variables de entorno en `.env`:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/busrat_db"
PORT=4000
```

3. Configurar Prisma:

```bash
# Generar el cliente de Prisma
npx prisma generate

# Sincronizar el esquema con la base de datos
npx prisma db push

# (Opcional) Visualizar la base de datos
npx prisma studio
```

## 📱 Uso

1. **Registro/Login**: Los usuarios pueden registrarse o iniciar sesión
2. **Búsqueda**: Buscar viajes por origen, destino y fecha
3. **Selección**: Elegir el viaje y seleccionar asiento
4. **Reserva**: Confirmar y procesar la reserva
5. **Gestión**: Ver historial de reservas

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Scripts Disponibles

### Backend (Server)
- `npm run dev` - Inicia el servidor en modo desarrollo
- `npm run start` - Inicia el servidor en producción
- `npx prisma generate` - Genera el cliente de Prisma
- `npx prisma db push` - Sincroniza el esquema con la base de datos
- `npx prisma studio` - Abre la interfaz visual de la base de datos
- `npm run test` - Ejecuta las pruebas

### Frontend (Client)
- `expo start` - Inicia el servidor de desarrollo de Expo
- `expo start --android` - Inicia directamente en Android
- `expo start --ios` - Inicia directamente en iOS Simulator
- `expo start --web` - Inicia en navegador web
- `expo build` - Construye la app para producción
- `npm run test` - Ejecuta las pruebas
- `setx /M REACT_NATIVE_PACKAGER_HOSTNAME TU-DIRECCION-IP-EN-TU-RED-WIFI` - Cambia la dirección IP donde se ejecuta Expo, en caso se requiera

## 🔒 Seguridad

- Autenticación JWT
- Validación de datos de entrada
- Sanitización de consultas SQL
- Cifrado de contraseñas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

- [John Henry](https://github.com/link200309)
- [Sidney Angelly](https://github.com/SiAn20)
- [Jaime Cristhian](https://github.com/jamesdotpy)
- [Rodrigo Ricaldez](https://github.com/R0DRIG0VR)

## 📞 Contacto

Para preguntas o sugerencias, puedes contactarnos a través de:
- GitHub Issues: [Reportar un problema](https://github.com/link200309/Project-Boletos-Bus/issues)
- Email: [jonhh.0023@gmail.com]

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella en GitHub!
