CREATE DATABASE senac-projeto;

CREATE TABLE ITENS (
	id bigserial not null,
	title varchar(100) not null,
	image varchar(100) not null,
	price integer not null
);