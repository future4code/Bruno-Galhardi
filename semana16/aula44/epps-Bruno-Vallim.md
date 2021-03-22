CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);

###Exercicio 1
a)Primeira é o create table que é para criar uma tabela, nesse exemplo com o nome 'Actor', e passando a chave primaria por 'id', varchar para limitar em 255 caracteres.
name usamos o varchar novamente, só adicionamos um comando para não retornar valor vazio.
birth_date usamos o date para passar o valor em data, ano, mes e dia.

b)o show databases mostra as bases de dados criados na sua conta, já a show tables, retorna as tabelas salvas em sua conta
c)ele retorna as informações que consta na table que vc passou pro nome.

###Exercício 2
a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b)Error Code: 1062. Duplicate entry '002' for key 'PRIMARY', ocorreu esse erro pois o id 002 já está sendo usado.
c)Error Code: 1136. Column count doesn't match value count at row 1, aqui ocorreu pois faltou o nascimento e sexo e nao pode ser valor vazio.
d)Error Code: 1364. Field 'name' doesn't have a default value, aqui faltou o nome, não pode ser vazio
e)Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1, erro foi por não ter o "", no valor da data
f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

###Exercício 3
a)SELECT name from Actor WHERE gender = "female"
b)SELECT salary from Actor WHERE name = "Tony Ramos"
c)SELECT gender Actor WHERE gender = "invalid"= Error Code: 1054. Unknown column 'gender' in 'field list'
d)SELECT id, name, salary from Actor WHERE salary < 500000;
e) o erro que dá é o : Error Code: 1054. Unknown column 'nome' in 'field list', para arrumar basta arrumar de Nome para NAME.ai retorna a Gloria Pires.

###Exercício 4
a)Na query acima, quer que retorne atores e atrizes que recebam mais de 30000 e começem com a ou j
b)SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
c)SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
d)SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

###Exercício 5
a)
CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
b)
INSERT INTO Movie (id, nome, sinopse, lancamento, avaliacao)
VALUES(
	"001",
	"Se eu fosse você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2001-01-06",
	"7"
);
c)
INSERT INTO Movie (id, nome, sinopse, lancamento, avaliacao)
VALUES(
	"002",
	"Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
	"2012-12-27",
	"7"
);
d)INSERT INTO Movie (id, nome, sinopse, lancamento, avaliacao)
VALUES(
	"003",
	"Dona Flor e Seus Dois Maridos",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
	"2012-11-02",
	"8"
);

e)INSERT INTO Movie (id, nome, sinopse, lancamento, avaliacao)
VALUES(
	"004",
	"Coração de Cavaleiro",
	"Nascido camponês, William Thatcher começa uma busca para mudar sua estrela, conquistar o coração de uma donzela extremamente justa e balançar o seu mundo medieval.",
	"2001-09-21",
	"10"
);

###Exercício 6
a)SELECT id, nome, avaliacao FROM Movie WHERE id = "004";
b)SELECT * FROM Movie WHERE nome = "Coração de Cavaleiro";
c)SELECT id, nome, sinopse FROM Movie WHERE avaliacao > 7;

###Exercício 7
a)SELECT * FROM Movie WHERE nome LIKE "%vida%";
b)SELECT * FROM Movie
WHERE nome LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%";
c)SELECT * FROM Movie WHERE lancamento < "2020-05-04";
d)SELECT * FROM Movie WHERE lancamento < "2020-05-04" AND 
      (nome LIKE "%TERMO DE BUSCA%" OR
      sinopse LIKE "%TERMO DE BUSCA%") AND avaliacao > 7;










