//console.log("Olá mundo!")

//Exercícios de interpretação de código

//EXERCÍCIO 1

//a. O que vai ser impresso no console?

// Vai aparecer o valor de 10 e de 50, pois é a 2x5=10 e 10x5=50.

//b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

//Nada será impresso, a variável não foi declarada.

//EXERCÍCIO 2

//a. Explicite quais são as saídas impressas no console

//Darvas e Caio.

//Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?

//Amanda e Caio.

//EXERCÍCIO 3

// Nessa função ele pega os numeros pares e transforma ao quadrado, numeros recebidos no array, ele pega o resto de uma divisao (%) e o resto for 0, o nome adequado poderia ser multiplicador
// 

//Exercícios de escrita de código


//EXERCÍCIO 4

//a.

/*function fraseFixa() =>{
         console.log("Oi, meu nome é Bruno, e gosto de codar!")
     }
         
    fraseFixa()
*/

//b.
/*
    function informacoes(nome, idade, cidade, estudante){
        
        if (estudante == true){
            estudante = "sou"
        } else{
            estudante = "não sou"
        }

        console.log(`Eu sou o ${nome} tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante. `)



    }

    informacoes("Bruno", 30, "Londrina", true)
    */

//EXERCÍCIO 5

// a.

/*function somaDoisNumeros (num1, num2){

    const soma = (Number(num1 + num2)) 

    return soma

}


const resultado = somaDoisNumeros(5, 5)
console.log(resultado)
*/

// b.

/*function maiorMenor (num1, num2){
    if(num1 >= num2){
        let maior = true
        return maior
    } else{
        let menor = false
        return menor
    }

}

console.log(maiorMenor(10,8))
*/

// c.







//EXERCÍCIO 6

// a.

/*const meuArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function array(meuArray){
         for(item of meuArray){
             console.log(item)
         }
         return meuArray.length
         
     }
    
     const numeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
     const tamanhoNumeros = array(numeros)
     console.log("Quantidade ", tamanhoNumeros)
*/

// b.

/*let parOuImpar = (num1) =>{
    return num1 % 2 === 0
}
console.log(parOuImpar(4))
*/

// c.



function numerosPares(array){
   let numerosPares = 0
   for(let par of array) {
       if(par % 2 ===0){
        numeroPares++
       }   
   }
   return numeroPares
}

console.log(`Há apenas ${numerosPares(array)}`)






