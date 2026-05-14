# Proyecto Integrado - Destiny 2 Web App

## 1. Database Setup

Create the MySQL database and table:

```sql
CREATE DATABASE IF NOT EXISTS pi;
USE pi;

CREATE TABLE users (
    name VARCHAR(30),
    user_password VARCHAR(60),
    class ENUM('Titan','Hunter','Warlock'),
    profile_picture LONGBLOB,
    id INT AUTO_INCREMENT PRIMARY KEY
);
```

For the full database schema (weapons, armor, perks), see `Script-3.sql`.

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
