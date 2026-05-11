1º En primer lugar necesitamos la base de datos
#############################################################
-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS red_social;

-- Usar la base de datos
USE red_social;

DROP TABLE IF EXISTS usuarios;

-- Creación de la tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL UNIQUE,
    contraseña CHAR(60) NOT NULL,
    foto_perfil LONGBLOB,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN
);
2º Clonar el repositorio Ejemplo3 en local 
##################################################################
git clone https://github.com/ProfeMiguelTernero/Ejemplo3

3º Abrir con visual estudio code y descargar los modulos.
###############################################################
npm install

4º ejecutar el proyecto
################################################################
node --watch ./src/server.js
