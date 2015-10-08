-- DROP DATABASE Database_1
DROP DATABASE Database_1;

-- CREATE DATABASE Database_1
CREATE DATABASE Database_1;



-- DROP TABLE empresa
DROP TABLE IF EXISTS empresa CASCADE;

-- CREATE TABLE empresa
CREATE TABLE empresa (
	nit varchar NOT NULL,
	nombre varchar,
	localidad int4,
	PRIMARY KEY(nit)
);

-- DROP TABLE dependencia
DROP TABLE IF EXISTS dependencia CASCADE;

-- CREATE TABLE dependencia
--DROP TABLE IF EXISTS dependencia CASCADE;

CREATE TABLE dependencia (
	id_dependencia int4 NOT NULL,
	nombre varchar,
	descripcion varchar,
	fk_dependencia_pertenece int4,
	PRIMARY KEY(id_dependencia),
	CONSTRAINT ref_dependencia_to_dependencia FOREIGN KEY (fk_dependencia_pertenece)
		REFERENCES dependencia(id_dependencia)
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE usuario
DROP TABLE IF EXISTS usuario CASCADE;

-- CREATE TABLE usuario
CREATE TABLE usuario (
	id varchar NOT NULL,
	nombre varchar,
	apellido varchar,
	telefono varchar,
	cuenta varchar,
	contrasena varchar,
	rol varchar,
	PRIMARY KEY(id)
);

-- DROP TABLE convenio
DROP TABLE IF EXISTS convenio CASCADE;

-- CREATE TABLE convenio
CREATE TABLE convenio (
	id_convenio SERIAL NOT NULL,
	nombre varchar,
	empresa_nit varchar NOT NULL,
	fecha_inicial date,
	fecha_final date,
	caducidad date,
	prorroga date,
	PRIMARY KEY(id_convenio),
	CONSTRAINT ref_convenio_to_empresa FOREIGN KEY (empresa_nit)
		REFERENCES empresa(nit)
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE tipo_dependencia
DROP TABLE IF EXISTS tipo_dependencia CASCADE;

-- CREATE TABLE tipo_dependencia
CREATE TABLE tipo_dependencia (
	nombre varchar NOT NULL,
	descripcion varchar,
	dependencia_id_dependencia int4 NOT NULL,
	PRIMARY KEY(nombre),
	CONSTRAINT ref_tipo_dependencia_to_dependencia FOREIGN KEY (dependencia_id_dependencia)
		REFERENCES dependencia(id_dependencia)
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE practica
DROP TABLE IF EXISTS practica CASCADE;

-- CREATE TABLE practica
CREATE TABLE practica (
	id_practica int4 NOT NULL,
	fecha_inicio date,
	fecha_fin date,
	lugar varchar,
	salario int4,
	fk_convenio int4 NOT NULL,
	PRIMARY KEY(id_practica),
	CONSTRAINT ref_practica_to_convenio FOREIGN KEY (fk_convenio)
		REFERENCES convenio(id_convenio)
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE admin_general
DROP TABLE IF EXISTS admin_general CASCADE;

-- CREATE TABLE admin_general
CREATE TABLE admin_general (
	cod_adminycon varchar NOT NULL,
	usuario_id varchar NOT NULL,
	PRIMARY KEY(cod_adminycon),
	CONSTRAINT ref_admin_general_to_usuario FOREIGN KEY (usuario_id)
		REFERENCES usuario(id)
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE estudiante
DROP TABLE IF EXISTS estudiante CASCADE;

-- CREATE TABLE estudiante
CREATE TABLE estudiante (
	cod_estudiante varchar NOT NULL,
	usuario_id varchar NOT NULL,
	localidad_id_localidad int8 NOT NULL,
	practica_id_practica int4 NOT NULL,
	PRIMARY KEY(cod_estudiante),
	CONSTRAINT ref_estudiante_to_usuario FOREIGN KEY (usuario_id)
		REFERENCES usuario(id)
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE pers_empresarial
DROP TABLE IF EXISTS pers_empresarial CASCADE;

-- CREATE TABLE pers_empresarial
CREATE TABLE pers_empresarial (
	cod_persemp varchar NOT NULL,
	usuario_id varchar NOT NULL,
	empresa_nit varchar NOT NULL,
	PRIMARY KEY(cod_persemp),
	CONSTRAINT ref_pers_empresarial_to_usuario FOREIGN KEY (usuario_id)
		REFERENCES usuario(id)
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT ref_pers_empresarial_to_empresa FOREIGN KEY (empresa_nit)
		REFERENCES empresa(nit)
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE docente
DROP TABLE IF EXISTS docente CASCADE;

-- CREATE TABLE docente
--DROP TABLE IF EXISTS docente CASCADE;

CREATE TABLE docente (
	cod_docente varchar NOT NULL,
	fk_usuario_id varchar NOT NULL,
	fk_dependecia int4,
	PRIMARY KEY(cod_docente),
	CONSTRAINT unique_id UNIQUE(fk_usuario_id),
	CONSTRAINT ref_docente_to_usuario FOREIGN KEY (fk_usuario_id)
		REFERENCES usuario(id)
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT ref_docente_to_dependencia FOREIGN KEY (fk_dependecia)
		REFERENCES dependencia(id_dependencia)
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

-- DROP TABLE docentes_practicas
DROP TABLE IF EXISTS docentes_practicas CASCADE;

-- CREATE TABLE docentes_practicas
CREATE TABLE docentes_practicas (
	id_practicas_docente SERIAL NOT NULL,
	fk_docente varchar,
	fk_practica int4,
	PRIMARY KEY(id_practicas_docente),
	CONSTRAINT docente_practica_unique UNIQUE(fk_docente,fk_practica),
	CONSTRAINT ref_docentes_practicas_to_docente FOREIGN KEY (fk_docente)
		REFERENCES docente(cod_docente)
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT ref_docentes_practicas_to_practica FOREIGN KEY (fk_practica)
		REFERENCES practica(id_practica)
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

