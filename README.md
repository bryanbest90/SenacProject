# SenacProject

Softwares necessários

Docker Desktop

Java 17

PostgreSQL

# Integrantes do grupo

Bryan Mendes Deodato

Diogo do Nascimento Gomes

Elaine Patricia dos Santos

Gustavo Pereira Campos


# Script SQL

 
CREATE DATABASE senac-projeto;

CREATE TABLE ITENS (
	id bigserial not null primary key,
	title varchar(100) not null,
	image varchar(200) not null,
 	description varchar(8000) not null,
	price numeric(10, 2)
);

CREATE TABLE USERS (
	id bigserial not null primary key,
	username varchar(100) not null,
	email varchar(100) not null
);
 
# Script Json para alimentar o banco

pode ser executado via postaman ou insomnia


{
	"info": {
		"_postman_id": "f3acec4a-b372-4aff-880c-12564ca68c6d",
		"name": "SenacProject",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "14822579"
	},
	"item": [
		{
			"name": "Post",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "\n{\n\t\"price\": 2599.90,\n\t\"title\": \"Bicicleta Ergométrica Spinning Pro E17 Acte Sports \",\n\t\"image\": \"https://m.media-amazon.com/images/I/51q+p-Af9VL._AC_SX522_.jpg\"\n}\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:8080/itens",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8080",
					"path": [
						"itens"
					]
				}
			},
			"response": []
		},
		{
			"name": "New Request",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		}
	]
}

# Subindo o Banco de Dados

1-	o abrir o arquivo Docker-compose.yaml, localizado na pasta SenacProject\backend 

2-	executar o serviço db

![rodar20o20banco20via20docker_converted](https://github.com/gupcampos/SenacProject/assets/92448981/de04538e-0c80-4eda-a8e1-f4377aa587c7)


# Subindo Backend

1-	abrir o arquivo DemoApplication.java localizado em SenacProject\backend\src\main\java\com\senacproject\demo\DemoApplication.java

2-	executar a main

![rodando20o20backend20da20aplicaC3A7C3A3o_converted (1)](https://github.com/gupcampos/SenacProject/assets/92448981/51c89828-35b4-4aba-83e8-fa52b1bd8778)

