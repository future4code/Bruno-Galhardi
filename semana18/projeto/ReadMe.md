# LabenuSystem

## :memo: Funcionalidades
* Criar Usuário
* Criar Receita
* Pegar seu proprio perfil
* Pegar um perfil de um usúario
* Pegar receita
* Fazer Login


## ✨ Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

* Node
* Express
* Typescript
* Cors
* Knex
* MySQL
* Dotenv
* bCript
* Hash

## 🚀 Como executar
* Clone o repositório:

https://github.com/future4code/Bruno-Galhardi

* Instale as dependências com
```
npm install
 ```
* Crie um arquivo .env
```
touch .env
 ```
* Preencha o arquivo .env
```
DB_HOST = Coloque aqui seu endereço do banco de dados
DB_USER = Coloque aqui seu usuário
DB_PASSWORD = Coloque aqui sua senha
DB_NAME = Coloque aqui o nome do banco de dados
JWT_KEY = ABC123XYZ
BCRYPT_COST = 12
 ```
* Crie as tabelas com
 ```
CREATE TABLE User_Cookenu (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
 ```
 ```
 CREATE TABLE Recipe_Cookenu (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User_Cookenu(id)
);
 ````
* Inicie o servidor com
 ```
npm run dev
 ```
 
 ## Desenvolvido por:
 - Bruno Vallim
