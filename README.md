# SenacProject
Softwares necessários
Docker Desktop
Java 17
PostgreSQL

Integrantes do grupo
Bryan Mendes Deodato
Diogo do Nascimento Gomes
Elaine Patricia dos Santos
Gustavo Pereira Campos


Para criar o banco de dados local é necessário rodar o script abaixo

 
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
 
Para inserir as informações no banco é necessário rodar o seguinte script json, via insomnia ou postman


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

Para subir o banco de dados é necessário
1-	o abrir o arquivo Docker-compose.yaml, localizado na pasta SenacProject\backend 
2-	executar o serviço db
[executanod serviço db](https://github.com/gupcampos/ADO-SO/blob/main/rodar%2520o%2520banco%2520via%2520docker_converted.gif?raw=true)



Para subir o Backend do Projeto é necessário 
1-	abrir o arquivo DemoApplication.java localizado em SenacProject\backend\src\main\java\com\senacproject\demo\DemoApplication.java
2-	executar a main
[executando a main](https://github.com/gupcampos/ADO-SO/blob/main/SenacProject%2520%25E2%2580%2593%2520DemoApplication.java%2520%255Bdemo%255D%25202023-11-17%252013-24-40_converted.gif?raw=true)


