# Proyecto Integrado - Destiny 2 Web App

## 1. Database Setup

Create the MySQL database and table:

```sql
CREATE DATABASE IF NOT EXISTS pi;
USE pi;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL UNIQUE,
    contraseña CHAR(60) NOT NULL,
    foto_perfil LONGBLOB,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN
);
```

The app connects to MySQL on `localhost:3310` with user `root` and password `1234` (configured in `src/conexion.js`).

## 2. Clone the repository

```bash
git clone https://github.com/javierlenderman/Proyecto_Integrado.git
```

## 3. Install dependencies

```bash
npm install
```

## 4. Run the project

```bash
node --watch ./src/server.js
```

The app will be available at http://localhost:3001
