﻿/*-- DROP DATABASE Database_1
DROP DATABASE "Database_1";

-- CREATE DATABASE Database_1
CREATE DATABASE "Database_1";*/



-- DROP TABLE dependencia
DROP TABLE IF EXISTS "dependencia" CASCADE;

-- CREATE TABLE dependencia
CREATE TABLE "dependencia" (
	"id_dependencia" varchar NOT NULL,
	"descripcion" varchar,
	"nombre" varchar,
	"pertenece_dependencia" varchar,
	PRIMARY KEY("id_dependencia"),
	CONSTRAINT "Ref_dependencias_to_dependencias" FOREIGN KEY ("pertenece_depencia")
		REFERENCES "dependencia"("id_dependencia")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE empresa
DROP TABLE IF EXISTS "empresa" CASCADE;

-- CREATE TABLE empresa
CREATE TABLE "empresa" (
	"nit" varchar NOT NULL,
	"nombre" varchar,
	"tipo" varchar,
	"razon_social" varchar,
	PRIMARY KEY("nit")
);

-- DROP TABLE usuario
DROP TABLE IF EXISTS "usuario" CASCADE;

-- CREATE TABLE usuario
CREATE TABLE "usuario" (
	"cedula" varchar NOT NULL,
	"nombre" varchar,
	"apellido" varchar,
	"telefono" varchar,
	"contrasena" varchar,
	"rol" varchar,
	"correo" varchar UNIQUE,
	"direccion" varchar,
	"primer" bool DEFAULT True,
	PRIMARY KEY("cedula")
);

-- DROP TABLE prorroga
DROP TABLE IF EXISTS "prorroga" CASCADE;

-- CREATE TABLE prorroga
CREATE TABLE "prorroga" (
	"id_prorroga" varchar NOT NULL,
	"id_convenio" varchar,
	"fecha_inicio" date,
	"fecha_fin" date,
	PRIMARY KEY("id_prorroga")
);

-- DROP TABLE responsable_practica
DROP TABLE IF EXISTS "responsable_practica" CASCADE;

-- CREATE TABLE responsable_practica
CREATE TABLE "responsable_practica" (
	"cod_responsable" varchar NOT NULL,
	"cargo" varchar,
	"cedula" varchar,
	PRIMARY KEY("cod_responsable"),
	CONSTRAINT "Ref_responsable_practica_to_usuario" FOREIGN KEY ("cedula")
		REFERENCES "usuario"("cedula")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE sucursal
DROP TABLE IF EXISTS "sucursal" CASCADE;

-- CREATE TABLE sucursal
CREATE TABLE "sucursal" (
	"id_sucursal" varchar NOT NULL,
	"nombre" varchar,
	"direccion" varchar,
	"telefono" varchar,
	"nit_empresa" varchar,
	PRIMARY KEY("id_sucursal"),
	CONSTRAINT "Ref_sucursal_to_empresa" FOREIGN KEY ("nit_empresa")
		REFERENCES "empresa"("nit")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE localidad
DROP TABLE IF EXISTS "localidad" CASCADE;

-- CREATE TABLE localidad
CREATE TABLE "localidad" (
	"cod" varchar NOT NULL,
	"nombre" varchar,
	"id_sucursal" varchar,
	PRIMARY KEY("cod"),
	CONSTRAINT "Ref_localidad_to_sucursal" FOREIGN KEY ("id_sucursal")
		REFERENCES "sucursal"("id_sucursal")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE estudiante
DROP TABLE IF EXISTS "estudiante" CASCADE;

-- CREATE TABLE estudiante
CREATE TABLE "estudiante" (
	"codigo" varchar NOT NULL,
	"programa" varchar,
	"cedula" varchar,
	PRIMARY KEY("codigo"),
	CONSTRAINT "Ref_estudiante_to_usuario" FOREIGN KEY ("cedula")
		REFERENCES "usuario"("cedula")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE director_programa
DROP TABLE IF EXISTS "director_programa" CASCADE;

-- CREATE TABLE director_programa
CREATE TABLE "director_programa" (
	"cod_director" varchar NOT NULL,
	"programa" varchar,
	"cedula" varchar,
	PRIMARY KEY("cod_director"),
	CONSTRAINT "Ref_director_programa_to_usuario" FOREIGN KEY ("cedula")
		REFERENCES "usuario"("cedula")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE administrador
DROP TABLE IF EXISTS "administrador" CASCADE;

-- CREATE TABLE administrador
CREATE TABLE "administrador" (
	"cod_administrador" varchar NOT NULL,
	"cedula" varchar,
	PRIMARY KEY("cod_administrador"),
	CONSTRAINT "Ref_administrador_to_usuario" FOREIGN KEY ("cedula")
		REFERENCES "usuario"("cedula")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE representante_empresarial
DROP TABLE IF EXISTS "representante_empresarial" CASCADE;

-- CREATE TABLE representante_empresarial
CREATE TABLE "representante_empresarial" (
	"cod_representante" varchar NOT NULL,
	"cargo" varchar,
	"cedula" varchar,
	"empresa" varchar,
	PRIMARY KEY("cod_representante"),
	CONSTRAINT "Ref_representante_empresarial_to_usuario" FOREIGN KEY ("cedula")
		REFERENCES "usuario"("cedula")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_representante_empresarial_to_empresa" FOREIGN KEY ("empresa")
		REFERENCES "empresa"("nit")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE docente
DROP TABLE IF EXISTS "docente" CASCADE;

-- CREATE TABLE docente
CREATE TABLE "docente" (
	"cod_docente" varchar NOT NULL,
	"dependencia" varchar NOT NULL,
	"cedula" varchar,
	PRIMARY KEY("cod_docente"),
	CONSTRAINT "Ref_docente_to_usuario" FOREIGN KEY ("cedula")
		REFERENCES "usuario"("cedula")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_docente_to_dependencias" FOREIGN KEY ("dependencia")
		REFERENCES "dependencia"("id_dependencia")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE convenio
DROP TABLE IF EXISTS "convenio" CASCADE;

-- CREATE TABLE convenio
CREATE TABLE "convenio" (
	"id_convenio" varchar NOT NULL,
	"fecha_inicio" date,
	"fecha_fin" date,
	"nit_empresa" varchar,
	"razon" varchar,
	"prorroga_id_prorroga" varchar,
	PRIMARY KEY("id_convenio"),
	CONSTRAINT "U_em_con" UNIQUE("nit_empresa"),
	CONSTRAINT "Ref_convenio_to_empresa" FOREIGN KEY ("nit_empresa")
		REFERENCES "empresa"("nit")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_convenio_to_prorroga" FOREIGN KEY ("prorroga_id_prorroga")
		REFERENCES "prorroga"("id_prorroga")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE practica
DROP TABLE IF EXISTS "practica" CASCADE;

-- CREATE TABLE practica
CREATE TABLE "practica" (
	"codigo" varchar NOT NULL,
	"fecha_inicio" date,
	"fecha_fin" date,
	"salario" numeric,
	"tipo" varchar,
	"estudiante" varchar,
	"docente" varchar,
	"responsable" varchar,
	"prorroga_id_prorroga" varchar,
	PRIMARY KEY("codigo"),
	CONSTRAINT "Ref_practica_to_estudiante" FOREIGN KEY ("estudiante")
		REFERENCES "estudiante"("codigo")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_practica_to_responsable_practica" FOREIGN KEY ("responsable")
		REFERENCES "responsable_practica"("cod_responsable")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_practica_to_docente" FOREIGN KEY ("docente")
		REFERENCES "docente"("cod_docente")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_practica_to_prorroga" FOREIGN KEY ("prorroga_id_prorroga")
		REFERENCES "prorroga"("id_prorroga")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE practica_externa
DROP TABLE IF EXISTS "practica_externa" CASCADE;

-- CREATE TABLE practica_externa
CREATE TABLE "practica_externa" (
	"id_practica" varchar,
	"sucursal_id_sucursal" varchar NOT NULL,
	CONSTRAINT "Ref_practica_externa_to_practica" FOREIGN KEY ("id_practica")
		REFERENCES "practica"("codigo")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_practica_externa_to_sucursal" FOREIGN KEY ("sucursal_id_sucursal")
		REFERENCES "sucursal"("id_sucursal")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE practica_interna
DROP TABLE IF EXISTS "practica_interna" CASCADE;

-- CREATE TABLE practica_interna
CREATE TABLE "practica_interna" (
	"id_practica" varchar,
	"id_dependencia" varchar,
	CONSTRAINT "Ref_practica_interna_to_practica" FOREIGN KEY ("id_practica")
		REFERENCES "practica"("codigo")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_practica_interna_to_dependencias" FOREIGN KEY ("id_dependencia")
		REFERENCES "dependencia"("id_dependencia")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE comentarios
DROP TABLE IF EXISTS "comentarios" CASCADE;

-- CREATE TABLE comentarios
CREATE TABLE "comentarios" (
	"cod" int4 NOT NULL,
	"practica_fk" varchar,
	"comentario" varchar,
	"usuario_fk" varchar,
	PRIMARY KEY("cod"),
	CONSTRAINT "Ref_comentarios_to_practica" FOREIGN KEY ("practica_fk")
		REFERENCES "practica"("codigo")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_comentarios_to_usuario" FOREIGN KEY ("usuario_fk")
		REFERENCES "usuario"("cedula")
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

INSERT INTO usuario(cedula, nombre, apellido, telefono, rol, contrasena, correo, direccion) values('1','admin','admin','8885545','admin','admin','admin@sipa','calle 20a');
INSERT INTO usuario(cedula, nombre, apellido, telefono, rol, contrasena, correo, direccion) values('2','Daniela','Cruz','8885545','estudiante','1234','daniela@sipa','calle 20a');
INSERT INTO usuario(cedula, nombre, apellido, telefono, rol, contrasena, correo, direccion) values('3','Sebastian','Agudelo','8885545','estudiante','1234','sebastian@sipa','calle 20a');
INSERT INTO usuario(cedula, nombre, apellido, telefono, rol, contrasena, correo, direccion) values('4','Gean','Palacios','8885545','responsable_practica','1234','gean@sipa','calle 20a');
INSERT INTO usuario(cedula, nombre, apellido, telefono, rol, contrasena, correo, direccion) values('5','Yuliana','Velasquez','8885545','representante_empresa','1234','yuliana@sipa','calle 20a');
INSERT INTO usuario(cedula, nombre, apellido, telefono, rol, contrasena, correo, direccion) values('6','Carlos','Cuesta','8885545','docente','1234','carlos@sipa','calle 20a');
INSERT INTO usuario(cedula, nombre, apellido, telefono, rol, contrasena, correo, direccion) values('7','Camilo','Perez','8885545','director_programa','1234','camilo@sipa','calle 20a');

INSERT INTO estudiante(codigo, programa, cedula) values('1','Ing sistemas','2');
INSERT INTO estudiante(codigo, programa, cedula) values('2','Ing sistemas','3');

INSERT INTO dependencia(id_dependencia, descripcion, nombre, pertenece_dependencia) values('1','Aprendizaje de diferentes idiomas','Departamento Lenguas Modernas','1');
INSERT INTO dependencia(id_dependencia, descripcion, nombre, pertenece_dependencia) values('2','Estudio de ...','Departamento computacion','2');

INSERT INTO docente(cod_docente, dependencia, cedula) values('1','2','6');

INSERT INTO responsable_practica(cod_responsable, cargo, cedula) values('1','Docente','4');

INSERT INTO empresa(nit, nombre, tipo, razon_social) values('1','EmpoCaldas','Publica','Atencion a las obras en Caldas excepto Manizales');

INSERT INTO representante_empresarial(cod_representante, cargo, cedula, empresa) values('1','Abogado','6','1');

INSERT INTO director_programa(cod_director, programa, cedula) values('1','Ingenieria Sistemas','7');

INSERT INTO prorroga(id_prorroga, nombre_convenio, fecha_inicio, fecha_fin) values('1', 'UniversidadCaldas-EmpoCaldas', '2011-10-10', '2016-10-10');

INSERT INTO convenio(id_convenio, fecha_inicio, fecha_fin, nit_empresa, razon, prorroga_id_prorroga) values('1','2011-10-10','2016-10-10','1','Oportunidad de practica','1');

INSERT INTO sucursal(id_sucursal, nombre, direccion, telefono, nit_empresa) values('1','EmpoCaldas Aranzazu','Aranzazu, Caldas','7785486','1');

INSERT INTO localidad(cod, nombre, id_sucursal) values('1', 'Sector bomberos', '1');

INSERT INTO practica(codigo, fecha_inicio, fecha_fin, salario, tipo, estudiante, docente, responsable, prorroga_id_prorroga) values('1','2015-07-15','2015-12-15',500000,'externa','2','1','1','1');
INSERT INTO practica(codigo, fecha_inicio, fecha_fin, salario, tipo, estudiante, docente, responsable, prorroga_id_prorroga) values('2','2015-07-15','2015-12-15',500000,'interna','1','1','1','1');