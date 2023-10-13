CREATE DATABASE senac-projeto;

CREATE TABLE ITENS (
	id bigserial not null primary key,
	title varchar(100) not null,
	image varchar(200) not null,
	price numeric(10, 2)
);

CREATE TABLE USERS (
	id bigserial not null primary key,
	username varchar(100) not null,
	email varchar(100) not null
);