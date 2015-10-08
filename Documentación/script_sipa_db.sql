DROP TABLE docentes_practicas;
DROP TABLE admin_general;
DROP TABLE estudiante;
DROP TABLE asesor_empresarial;
DROP TABLE docente;
DROP TABLE practica;
DROP TABLE dependencia;
DROP TABLE convenio;
DROP TABLE usuario;
DROP TABLE empresa;


CREATE TABLE empresa (
	nit varchar NOT NULL,
	nombre varchar,
	localidad varchar,
	PRIMARY KEY(nit)
);



CREATE TABLE dependencia (
	id_dependencia int4 NOT NULL,
	nombre varchar,
	descripcion varchar,
	fk_dependencia_pertenece int4,
	PRIMARY KEY(id_dependencia),
	CONSTRAINT ref_dependencia_to_dependencia FOREIGN KEY (fk_dependencia_pertenece)
		REFERENCES dependencia(id_dependencia)
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);



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



CREATE TABLE convenio (
	id_convenio SERIAL NOT NULL,
	nombre varchar,
	empresa_nit varchar NOT NULL,
	fecha_inicial date,
	fecha_final date,
	prorroga date,
	PRIMARY KEY(id_convenio),
	CONSTRAINT ref_convenio_to_empresa FOREIGN KEY (empresa_nit)
		REFERENCES empresa(nit)
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);




CREATE TABLE practica (
	id_practica int4 NOT NULL,
	fecha_inicio date,
	fecha_fin date,
	salario int4,
	fk_convenio int4 NOT NULL,
	PRIMARY KEY(id_practica),
	CONSTRAINT ref_practica_to_convenio FOREIGN KEY (fk_convenio)
		REFERENCES convenio(id_convenio)
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);



CREATE TABLE admin_general (
	cod_admingeneral varchar NOT NULL,
	usuario_id varchar NOT NULL,
	PRIMARY KEY(cod_admingeneral),
	CONSTRAINT ref_admin_general_to_usuario FOREIGN KEY (usuario_id)
		REFERENCES usuario(id)
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);



CREATE TABLE estudiante (
	cod_estudiante varchar NOT NULL,
	usuario_id varchar NOT NULL,
	fk_practica int4 NOT NULL,
	PRIMARY KEY(cod_estudiante),
	CONSTRAINT ref_estudiante_to_usuario FOREIGN KEY (usuario_id)
		REFERENCES usuario(id)
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT ref_estudiante_to_practica FOREIGN KEY (fk_practica)
		REFERENCES practica(id_practica)
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
	);


CREATE TABLE asesor_empresarial (
	cod_asesoremp varchar NOT NULL,
	usuario_id varchar NOT NULL,
	empresa_nit varchar NOT NULL,
	PRIMARY KEY(cod_asesoremp),
	CONSTRAINT ref_pers_empresarial_to_usuario FOREIGN KEY (usuario_id)
		REFERENCES usuario(id)
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT ref_pers_empresarial_to_empresa FOREIGN KEY (empresa_nit)
		REFERENCES empresa(nit)
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);


CREATE TABLE docente (
	cod_docente varchar NOT NULL,
	fk_usuario_id varchar NOT NULL,
	fk_dependecia int4,
	PRIMARY KEY(cod_docente),
	CONSTRAINT unique_id UNIQUE(fk_usuario_id),
	CONSTRAINT ref_docente_to_usuario FOREIGN KEY (fk_usuario_id)
		REFERENCES usuario(id)
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT ref_docente_to_dependencia FOREIGN KEY (fk_dependecia)
		REFERENCES dependencia(id_dependencia)
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);


CREATE TABLE docentes_practicas (
	id_practicas_docente SERIAL NOT NULL,
	fk_docente varchar,
	fk_practica int4,
	PRIMARY KEY(id_practicas_docente),
	CONSTRAINT docente_practica_unique UNIQUE(fk_docente,fk_practica),
	CONSTRAINT ref_docentes_practicas_to_docente FOREIGN KEY (fk_docente)
		REFERENCES docente(cod_docente)
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE,
	CONSTRAINT ref_docentes_practicas_to_practica FOREIGN KEY (fk_practica)
		REFERENCES practica(id_practica)
	MATCH SIMPLE
	ON DELETE CASCADE
	ON UPDATE NO ACTION
	NOT DEFERRABLE
);

insert into usuario values('1','admin','admin','admin','admin','admin','admin');

insert into dependencia values (1,'Artes y Humanidades','Creatividad y conocimiento');
insert into dependencia values (2,'Ciencias Agropecuarias','Creatividad y conocimiento');
insert into dependencia values (3,'Ciencias Exactas y Naturales','Creatividad y conocimiento');
insert into dependencia values (4,'Ciencias Juridicas','Creatividad y conocimiento');
insert into dependencia values (5,'Ciencias para la salud','Creatividad y conocimiento');
insert into dependencia values (6,'Ingeniería','Creatividad y conocimiento');

insert into dependencia values (7,'Departamento Música','Creatividad y conocimiento',1);
insert into dependencia values (8,'Departamento Diseño Visual','Creatividad y conocimiento',1);
insert into dependencia values (9,'Departamento Producción Agropecuarias','Creatividad y conocimiento',2);
insert into dependencia values (10,'Departamento Salud Animal','Creatividad y conocimiento',2);
insert into dependencia values (11,'Departamento Matemáticas','Creatividad y conocimiento',3);
insert into dependencia values (12,'Departamento Química','Creatividad y conocimiento',3);
insert into dependencia values (13,'Departamento Desarrollo Humano','Creatividad y conocimiento',4);
insert into dependencia values (14,'Departamento Jurídico','Creatividad y conocimiento',4);
insert into dependencia values (15,'Departamento Salud Publica','Creatividad y conocimiento',5);
insert into dependencia values (16,'Departamento Clinica','Creatividad y conocimiento',5);
insert into dependencia values (17,'Departamento Sistemas','Creatividad y conocimiento',6);
insert into dependencia values (18,'Departamento Ingeniería','Creatividad y conocimiento',6);




insert into practica values (1,'20/02/2014','20/07/2014',800000,1);
insert into practica values (2,'20/02/2014','20/07/2014',500000,2);
insert into practica values (3,'20/02/2014','20/07/2014',600000,3);
insert into practica values (4,'20/02/2014','20/07/2014',700000,4);
insert into practica values (5,'20/02/2014','20/07/2014',900000,5);
insert into practica values (6,'20/02/2014','20/07/2014',800000,6);




insert into convenio (nombre,empresa_nit,fecha_inicial,fecha_final,prorroga) values ('Teatro Manizales','123','20/02/2014','20/07/2014','25/07/2014');
insert into convenio (nombre,empresa_nit,fecha_inicial,fecha_final,prorroga) values ('Mabe','456','20/02/2014','20/07/2014','25/07/2014');
insert into convenio (nombre,empresa_nit,fecha_inicial,fecha_final,prorroga) values ('Hospital de Caldas','465','20/02/2014','20/07/2014','25/07/2014');
insert into convenio (nombre,empresa_nit,fecha_inicial,fecha_final,prorroga) values ('Bios','552','20/02/2014','20/07/2014','25/07/2014');
insert into convenio (nombre,empresa_nit,fecha_inicial,fecha_final,prorroga) values ('Ecopetrol','789','20/02/2014','20/07/2014','25/07/2014');
insert into convenio (nombre,empresa_nit,fecha_inicial,fecha_final,prorroga) values ('Rancho Alegre','898','20/02/2014','20/07/2014','25/07/2014');
