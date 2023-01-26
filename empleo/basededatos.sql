DROP DATABASE IF EXISTS EMPLEO;
CREATE DATABASE EMPLEO;
USE EMPLEO;
CREATE TABLE EMPLEO(
	nombre varchar(50),
	telefono integer,
	correo varchar(50),
	mensaje varchar(300),
	constraint pk_primary primary key (nombre, telefono)
);