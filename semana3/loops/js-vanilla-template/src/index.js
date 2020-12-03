//Exercícios de interpretação de código

//EXERCÍCIO 1

// o valor impresso na tela é 10, essa maneira permite você incrementar uma condição, assim percorre todos os array contidos.

//EXERCÍCIO 2

// a) Todos os numeros maior que o 18, condição feita no if >18, dentro dessa array especifica.

// b) Poderia, ai iria tirar a condição if da variavel, ai ele iria passar por todos da lista.




//**Exercícios de escrita de código**

//EXERCÍCIO 3
// A)
    /*let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    for (let i = 0; i < 12; i++){
    const elemento = array[i]
    console.log(elemento)

}
*/


// B)

    /*let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    
    let divArray = []

    for(let i =0; i < arrayOriginal.length; i++){
        divArray.push (arrayOriginal[i]/10)
        console.log(divArray[i])
    }
    */

// C)
/*let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let par=[]
for(let numero of arrayOriginal){
    if (numero%2 === 0){
        par.push(numero)
    }
}
console.log(par)
*/

// D)
/*let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    
    for(let i =0; i < arrayOriginal.length; i++){
        console.log("O elemento de índice " + i + " é: " + arrayOriginal[i])
    

    }
*/

// E)
/*let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

valorMaximo = 130
valorMinimo = 30

 for (let num of arrayOriginal) {
      if (num > valorMaximo){
          valorMaximo = num
      }
      if (num < valorMinimo){
          valorMinimo = num
      }
  }

  console.log("O maior número é: ", valorMaximo, "e o menor ", valorMinimo)
*/
