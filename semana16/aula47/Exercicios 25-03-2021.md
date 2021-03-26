### Exercício 1
a)
Chave estrangeira (foreign key) é o campo que estabelece o relacionamento entre duas tabelas. Assim, uma coluna corresponde à mesma coluna que é a chave primária de outra tabela. Dessa forma, deve-se especificar na tabela que contém a chave estrangeira quais são essas colunas e à qual tabela está relacionada. O banco de dados irá verificar se todos os campos que fazem referências  à tabela estão especificados.

b)
~~~
INSERT INTO Avaliacao (comment, rate, movie_id) 
VALUES (
    "Muito bom esse filme, pena que o ator faleceu",
   10,
	1
);
~~~
INSERT INTO Avaliacao (comment, rate, movie_id) 
VALUES (
    "Bem ruim esse filme, pra que gravar?",
    7,
	1
);
~~~
INSERT INTO Avaliacao (comment, rate, movie_id) 
VALUES (
    "Filme normal!",
    7,
	1
);
~~~
c)
~~~
INSERT INTO Avaliacao (comment, rate, movie_id) 
VALUES (
    "Bem ruim esse filme, pra que gravar?",
    7,
	2
);
~~~
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-bruno-vallim`.`Avaliacao`, CONSTRAINT `Avaliacao_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
esse erro ocorre pois na lista de movies, o id 2 não existe.
d)
~~~
ALTER TABLE Movie DROP COLUMN avaliacao;
~~~~
e)
DELETE FROM Movie WHERE avaliacao=3;
Error Code: 1054. Unknown column 'avaliacao' in 'where clause'
erro ao apagar, nao tem a condição
### Exercício 2
a)Essa tabela, cria uma nova relação, criando o elenco do filme
b)
~~~
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"1",
    "1"
)
~~~
c)
~~~
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"4",
    "10"
);
~~~
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-bruno-vallim`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
erro pois nao existe o ator com id 10
d)
~~~
DELETE FROM MovieCast WHERE actor_id = 1;
~~~
apagou o ator do filme que estava

### Exercício 3
a) ele retorna os valores que tem em mais de uma tabela
b)
~~~
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Avaliacao r ON m.id = r.movie_id;
~~~

### Exercício 4
a)
~~~~
SELECT m.id as movie_id, m.nome, r.rate as avaliacao, r.comment as rating_comment
FROM Movie m
LEFT JOIN Avaliacao r ON m.id = r.movie_id;
~~~
b)
~~~
SELECT m.id as movie_id, m.nome, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
~~~
c)
~~~
SELECT AVG(r.rate), m.id, m.nome FROM Movie m
LEFT JOIN Avaliacao r ON m.id = r.movie_id
GROUP BY (m.id);
~~~