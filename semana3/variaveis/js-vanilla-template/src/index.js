//**Exercícios de interpretação de código**

//exercicio 1- o valor de b será trocado por 5, ficaria (10,5)


//exercicio 2- todos as variaveis seriam 10, mesmo nao dando valor para c


//**Exercícios de escrita de código**

//exercicio 1-


let nome 

console.log(typeof nome)

let idade  

console.log(typeof idade)

//pois não foi atribuido um valor na variavel

nome = prompt("qual seu nome?")

console.log(typeof nome)

idade = prompt("qual sua idade?")

console.log(typeof idade)

//aconteceu uma mudança de undefined para string


console.log("Olá " + nome + " você tem "+ idade+" anos")

//exercicio 2-

cidade = prompt("Qual sua cidade?")
console.log(cidade)

estado = prompt("Qual seu Estado?")
console.log(estado)

time = prompt("Qual seu time de coração?")
console.log(time)

cor = prompt("Sua cor favorita?")
console.log(cor)

cafe = prompt("Café com ou sem açucar?")
console.log(cafe)

//exercicio 3-

let comidas = ["Strognoff", "Feijoada", "x-Bacon", "Pudim", "Arroz de Berinjela"]

console.log("Essas são minhas comidas favoritas")

console.log(comidas[0], comidas[1], comidas[2], comidas[3], comidas[4])

console.log(comidas)
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

comida = prompt("Sua comida favorita?")
console.log(comida)

comidas[1] = comida
console.log(comidas)

//Exercicio 4

let perguntas = ["você esta com fome?", "Você está com sede?", "Você esta com sono?"]
let respostas = [true, false]

console.log(perguntas[0], respostas[1]);
console.log(perguntas[1], respostas[0]);
console.log(perguntas[2], respostas[0]);

