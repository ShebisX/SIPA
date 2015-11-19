insert into usuario values('1','admin','admin','admin','admin','admin','admin@sipa','admin');

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

insert into empresa values('123','Teatro Manizales','','');
insert into empresa values('456','Mabe','','');
insert into empresa values('465','Hospital de Caldas','','');
insert into empresa values('552','Bios','','');
insert into empresa values('789','Ecopetrol','','');
insert into empresa values('898','Rancho Alegre','','');

insert into convenio (id_convenio,razon,nit_empresa,fecha_inicio,fecha_fin) values ('1','Teatro Manizales','123','20/02/2014','20/07/2014');
insert into convenio (id_convenio,razon,nit_empresa,fecha_inicio,fecha_fin) values ('2','Mabe','456','20/02/2014','20/07/2014');
insert into convenio (id_convenio,razon,nit_empresa,fecha_inicio,fecha_fin) values ('3','Hospital de Caldas','465','20/02/2014','20/07/2014');
insert into convenio (id_convenio,razon,nit_empresa,fecha_inicio,fecha_fin) values ('4','Bios','552','20/02/2014','20/07/2014');
insert into convenio (id_convenio,razon,nit_empresa,fecha_inicio,fecha_fin) values ('5','Ecopetrol','789','20/02/2014','20/07/2014');
insert into convenio (id_convenio,razon,nit_empresa,fecha_inicio,fecha_fin) values ('6','Rancho Alegre','898','20/02/2014','20/07/2014');
