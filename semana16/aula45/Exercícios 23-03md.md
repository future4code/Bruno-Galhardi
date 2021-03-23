###Exercício 1
a)Você iria deletar a coluna salary da tabela que vc escolheu, nesse caso a 'Actor'.
b)Iria alterar todas as linhas da tabela, para isso não acontecer, usar um where impediria isso.
c)iria alterar a o gender da tabela para aceitar ate no maximo 255 caracteres no seu field
d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100); esse comando, alterou o gender da tabela para aceitar até 100 caracteres, antes só poderia aceitar 6

###Exercício 2
a)
UPDATE Actor
SET name = "Laura Cardoso",
	birth_date = "1870-05-28"
WHERE id ="003";
alterei a fernanda montenegro de id 003, para Laura Cardoso e a data de nascimento.

b)
UPDATE Actor
SET name = "Glória Xícara"
WHERE name = "Glória Pires";
aqui fiz a alteração de "Gloria Pires" para "Glória Xícara", logo em seguida usei:
UPDATE Actor
SET name = "Glória Pires"
WHERE name = "Glória Xícara";
para retornar o nome antes de alterar.

c)
UPDATE Actor
SET 
	name = "Tony Ramos",
	birth_date = "2021-03-23",
    salary = 640000,
    gender = "male"
WHERE id = "001"
alterei seu salário e o nascimento para a data de hoje

d)
UPDATE Actor
SET 
	color_favorite = "Blue"
WHERE id = "001"

Error Code: 1054. Unknown column 'color_favorite' in 'field list'
deu erro pois não existe a coluna de cor favorita no tabela, para que isso fosse alterado eu teria que criar uma nova coluna, ai passar esses novos valores.

###Exercício 3
a)
DELETE FROM Actor
WHERE name = "Antônio Fagundes";

b)
DELETE FROM Actor
WHERE gender = "male" AND
	  salary  > 1000000;
###Exercício 4
a)
SELECT MAX(Salary)  FROM Actor
nesse caso retorna um valor de R$1.200.000.

b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";
retorna um valor de 300.000, menor salário entre as duas mulheres da tabela.

c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";
retorna com dois, Glória pires e Laura Cardoso.

d)
SELECT SUM(salary) FROM Actor;
retorna um valor de R$2.140.000

###Exercício 5
a)Ele retorna a soma de atores que contem na tabela, só que faz a separação por genero, no caso são 3 atores, 2 mulheres e 1 homem

b)
SELECT id, name FROM Actor
ORDER BY name DESC;
a ordem ficará Tony, Laura, Gloria

c)
SELECT * FROM Actor
ORDER BY salary ASC;

d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 2;
retorna apenas 2, pois a table só tem 3 atores

e)
SELECT AVG (salary) FROM Actor;
Retorna um valor de 713.333,333

###Exercício 6
a)
ALTER TABLE Movie CHANGE avaliacao avaliacao FLOAT;

b)
ALTER TABLE Movie CHANGE avaliacao avaliacao FLOAT;

c)
UPDATE Movie
SET 
	playing_limit_date = "2021-12-31"
WHERE id = "001";
~~~
UPDATE Movie
SET 
	playing_limit_date = "2002-12-31"
	
d)
DELETE FROM Movie WHERE id = "002"

###Exercício 7
a)
SELECT COUNT(*) FROM Movie WHERE avaliacao > 7.5;
b)
SELECT AVG (avaliacao) FROM Movie;
c)
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
d)
SELECT COUNT(*) FROM Movie WHERE lancamento > CURDATE();
nesse caso retorna nenhum filme pois os lancamentos são todos antes da curdate
e)
SELECT MAX(avaliacao)  FROM Movie;
f)
SELECT MIN(avaliacao) FROM Movie ;

###Exercício 8
a)
SELECT * FROM Movie
ORDER BY nome ASC;
b)
SELECT * FROM Movie
ORDER BY nome DESC
LIMIT 3;
c)
SELECT * FROM Movie 
WHERE lancamento < CURDATE() 
ORDER BY lancamento DESC 
LIMIT 3;	
d)
SELECT * FROM Movie 
ORDER BY avaliacao DESC 
LIMIT 3;		




