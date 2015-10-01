-- DROP DATABASE sipa
--DROP DATABASE "sipa";

-- CREATE DATABASE sipa
--CREATE DATABASE "sipa";



-- DROP TABLE localidad
DROP TABLE IF EXISTS "localidad" CASCADE;

-- CREATE TABLE localidad
CREATE TABLE "localidad" (
	"id_localidad" int8 NOT NULL,
	PRIMARY KEY("id_localidad")
);

-- DROP TABLE usuario
DROP TABLE IF EXISTS "usuario" CASCADE;

-- CREATE TABLE usuario
CREATE TABLE "usuario" (
	"id" varchar NOT NULL,
	"nombre" varchar,
	"apellido" varchar,
	"telefono" varchar,
	"cuenta" varchar,
	"contrasena" varchar,
	"rol" varchar,
	PRIMARY KEY("id")
);

-- DROP TABLE empresa
DROP TABLE IF EXISTS "empresa" CASCADE;

-- CREATE TABLE empresa
CREATE TABLE "empresa" (
	"nit" varchar NOT NULL,
	"nombre" varchar,
	"localidad_id_localidad" int8 NOT NULL,
	PRIMARY KEY("nit"),
	CONSTRAINT "Ref_empresa_to_localidad" FOREIGN KEY ("localidad_id_localidad")
		REFERENCES "localidad"("id_localidad")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE admin_practicayconv
DROP TABLE IF EXISTS "admin_practicayconv" CASCADE;

-- CREATE TABLE admin_practicayconv
CREATE TABLE "admin_practicayconv" (
	"cod_adminycon" varchar NOT NULL,
	"usuario_id" varchar NOT NULL,
	PRIMARY KEY("cod_adminycon"),
	CONSTRAINT "Ref_admin_practica_to_usuario" FOREIGN KEY ("usuario_id")
		REFERENCES "usuario"("id")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE pers_empresarial
DROP TABLE IF EXISTS "pers_empresarial" CASCADE;

-- CREATE TABLE pers_empresarial
CREATE TABLE "pers_empresarial" (
	"cod_persemp" varchar NOT NULL,
	"usuario_id" varchar NOT NULL,
	"empresa_nit" varchar NOT NULL,
	PRIMARY KEY("cod_persemp"),
	CONSTRAINT "Ref_pers_empresarial_to_usuario" FOREIGN KEY ("usuario_id")
		REFERENCES "usuario"("id")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_pers_empresarial_to_empresa" FOREIGN KEY ("empresa_nit")
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
	"id_convenio" SERIAL NOT NULL,
	"nombre" varchar,
	"empresa_nit" varchar NOT NULL,
	"fecha_inicial" date,
	"fecha_final" date,
	"caducidad" date,
	"prorroga" date,
	PRIMARY KEY("id_convenio"),
	CONSTRAINT "Ref_convenio_to_empresa" FOREIGN KEY ("empresa_nit")
		REFERENCES "empresa"("nit")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE practica
DROP TABLE IF EXISTS "practica" CASCADE;

-- CREATE TABLE practica
CREATE TABLE "practica" (
	"id_practica" int4 NOT NULL,
	"fecha_inicio" date,
	"fecha_fin" date,
	"lugar" varchar,
	"salario" int4,
	"estudiante_cod_estudiante" varchar NOT NULL,
	"admin_practicayconv_cod_adminycon" varchar NOT NULL,
	"convenio_id_convenio" int4 NOT NULL,
	PRIMARY KEY("id_practica"),
	CONSTRAINT "Ref_practica_to_admin_practicayconv" FOREIGN KEY ("admin_practicayconv_cod_adminycon")
		REFERENCES "admin_practicayconv"("cod_adminycon")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_practica_to_convenio" FOREIGN KEY ("convenio_id_convenio")
		REFERENCES "convenio"("id_convenio")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE estudiante
DROP TABLE IF EXISTS "estudiante" CASCADE;

-- CREATE TABLE estudiante
CREATE TABLE "estudiante" (
	"cod_estudiante" varchar NOT NULL,
	"usuario_id" varchar NOT NULL,
	"localidad_id_localidad" int8 NOT NULL,
	"practica_id_practica" int4 NOT NULL,
	PRIMARY KEY("cod_estudiante"),
	CONSTRAINT "Ref_Estudiante_to_usuario" FOREIGN KEY ("usuario_id")
		REFERENCES "usuario"("id")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_estudiante_to_localidad" FOREIGN KEY ("localidad_id_localidad")
		REFERENCES "localidad"("id_localidad")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_estudiante_to_practica" FOREIGN KEY ("practica_id_practica")
		REFERENCES "practica"("id_practica")
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
	"usuario_id" varchar NOT NULL,
	"practica_id_practica" int4 NOT NULL,
	PRIMARY KEY("cod_docente"),
	CONSTRAINT "unique_id" UNIQUE("usuario_id"),
	CONSTRAINT "Ref_docente_to_usuario" FOREIGN KEY ("usuario_id")
		REFERENCES "usuario"("id")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_docente_to_practica" FOREIGN KEY ("practica_id_practica")
		REFERENCES "practica"("id_practica")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE dependencia
DROP TABLE IF EXISTS "dependencia" CASCADE;

-- CREATE TABLE dependencia
CREATE TABLE "dependencia" (
	"id_dependencia" int4 NOT NULL,
	"descripcion" varchar,
	"dependencia_id_dependencia" int4 NOT NULL,
	"docente_cod_docente" varchar NOT NULL,
	PRIMARY KEY("id_dependencia"),
	CONSTRAINT "Ref_dependencia_to_dependencia" FOREIGN KEY ("dependencia_id_dependencia")
		REFERENCES "dependencia"("id_dependencia")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT "Ref_dependencia_to_docente" FOREIGN KEY ("docente_cod_docente")
		REFERENCES "docente"("cod_docente")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE tipo_dependencia
DROP TABLE IF EXISTS "tipo_dependencia" CASCADE;

-- CREATE TABLE tipo_dependencia
CREATE TABLE "tipo_dependencia" (
	"nombre" varchar NOT NULL,
	"descripcion" varchar,
	"dependencia_id_dependencia" int4 NOT NULL,
	PRIMARY KEY("nombre"),
	CONSTRAINT "Ref_tipo_dependencia_to_dependencia" FOREIGN KEY ("dependencia_id_dependencia")
		REFERENCES "dependencia"("id_dependencia")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);
