
//**Exercícios de interpretação de código**

//exercicio 1
// a-vai retornar false
// b- vai retornar false 
// c- vai retornar true
// d- vai vir como booleano

//exercicio 2
// a- ele vem como undefined
// b- ele vem com o null
// c- ele mostra quantos elemento tem no array, no caso 11
// d- ele fala qual elemento esta na posição 0, no caso desse array é o numero 3
// e- ele troca o elemento 4 por 19, e imprime o novo array
// f- ele soma o valor do elemento na posicao 0 com 6, 3 +6 = 9 e imprime novo valor

// **Exercícios de escrita de código**

//Exercicio 1-

let  idade = prompt("Qual sua idade?")
let  idadeamigo = prompt("Qual idade do seu melhor amigo?")

let pergunta = ("Sua idade é maior do que a do seu melhor amigo?")
console.log(pergunta)

let resultado1 = idade > idadeamigo
let resultado2 = idade < idadeamigo

console.log(resultado1)



let diferenca = Number(idade) - Number(idadeamigo)
console.log(diferenca)

//Exercicio 2-

let numeroPar = prompt("Digite um numero PAR?")
let resultado = numeroPar%2
console.log(resultado)
console.log(typeof resultado)

// c- o resultado sempre da 0

// d- o resultado sempre da -1


//Exercicio 3-

let listaDeTarefas = []

alert("Diga 3 tarefas que precise realizar no dia: ")

listaDeTarefas.push(prompt("Tarefa1"))
listaDeTarefas.push(prompt("Tarefa2"))
listaDeTarefas.push(prompt("Tarefa3"))

console.log(listaDeTarefas)

let indicerealizado = prompt("Escolha entre : 0, 1, 2, Sua Tarefas realizadas")

let tarefaRealizada = Number(indicerealizado)
listaDeTarefas.splice(indicerealizado, 1)

console.log(listaDeTarefas)

//Exercicio 4-

let nomeUsuario = prompt("Qual seu nome?")
let emailUsuario = prompt("Qual seu email?")

const minhamensagem = "O E-mail " + emailUsuario + "foi cadastrado com sucesso. Seja bem vindo(a), " + nomeUsuario 
console.log(minhamensagem)


