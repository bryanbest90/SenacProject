CREATE DATABASE senac-projeto;

CREATE TABLE ITENS (
	id bigserial not null primary key,
	title varchar(100) not null,
	image varchar(200) not null,
	price numeric not null
);

CREATE TABLE USERS (
	id bigserial not null primary key,
	username varchar(100) not null,
	password varchar(100) not null
);