/*-- DROP DATABASE Database_1
DROP DATABASE "Database_1";

-- CREATE DATABASE Database_1
CREATE DATABASE "Database_1";*/


-- DROP TABLE dependencias
DROP TABLE IF EXISTS "dependencias" CASCADE;

-- CREATE TABLE dependencias
CREATE TABLE "dependencias" (
	"id_dependencias" varchar NOT NULL,
	"descripcion" varchar,
	"nombre" varchar,
	"pertenece_depencia" varchar,
	PRIMARY KEY("id_dependencias"),
	CONSTRAINT "Ref_dependencias_to_dependencias" FOREIGN KEY ("pertenece_depencia")
		REFERENCES "dependencias"("id_dependencias")
	MATCH SIMPLE
	ON DELETE NO ACTION
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
	"nombre" varchar,
	"apellido" varchar,
	"cedula" varchar NOT NULL,
	"telefono" varchar,
	"contrasena" varchar,
	"rol" varchar,
	"correo" varchar,
	"direccion" varchar,
	"primer" bool,
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
	ON DELETE NO ACTION
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
	ON DELETE NO ACTION
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
	ON DELETE NO ACTION
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
	ON DELETE NO ACTION
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
	ON DELETE NO ACTION
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
	ON DELETE NO ACTION
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
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_representante_empresarial_to_empresa" FOREIGN KEY ("empresa")
		REFERENCES "empresa"("nit")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE convenio
DROP TABLE IF EXISTS "convenio" CASCADE;

-- CREATE TABLE convenio
CREATE TABLE "convenio" (
	"id_convenio" varchar NOT NULL,
	"nombre" varchar,
	"fecha_inicio" date,
	"fecha_fin" date,
	"nit_empresa" varchar,
	"razon" varchar,
	"prorroga_id_prorroga" varchar NOT NULL,
	PRIMARY KEY("id_convenio"),
	CONSTRAINT "U_em_con" UNIQUE("nit_empresa"),
	CONSTRAINT "Ref_convenio_to_empresa" FOREIGN KEY ("nit_empresa")
		REFERENCES "empresa"("nit")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_convenio_to_prorroga" FOREIGN KEY ("prorroga_id_prorroga")
		REFERENCES "prorroga"("id_prorroga")
	MATCH SIMPLE
	ON DELETE NO ACTION
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
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_docente_to_dependencias" FOREIGN KEY ("dependencia")
		REFERENCES "dependencias"("id_dependencias")
	MATCH SIMPLE
	ON DELETE NO ACTION
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
	"doncente" varchar,
	"responsable" varchar,
	"prorroga_id_prorroga" varchar NOT NULL,
	PRIMARY KEY("codigo"),
	CONSTRAINT "Ref_practica_to_estudiante" FOREIGN KEY ("estudiante")
		REFERENCES "estudiante"("codigo")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_practica_to_responsable_practica" FOREIGN KEY ("responsable")
		REFERENCES "responsable_practica"("cod_responsable")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_practica_to_docente" FOREIGN KEY ("doncente")
		REFERENCES "docente"("cod_docente")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_practica_to_prorroga" FOREIGN KEY ("prorroga_id_prorroga")
		REFERENCES "prorroga"("id_prorroga")
	MATCH SIMPLE
	ON DELETE NO ACTION
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
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_practica_externa_to_sucursal" FOREIGN KEY ("sucursal_id_sucursal")
		REFERENCES "sucursal"("id_sucursal")
	MATCH SIMPLE
	ON DELETE NO ACTION
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
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_practica_interna_to_dependencias" FOREIGN KEY ("id_dependencia")
		REFERENCES "dependencias"("id_dependencias")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);
