/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 //Nosso Jogo

 // 1)
   const mensagemInicial =("Bem vindo ao jogo de Blackjack!")
   console.log(mensagemInicial)


   if(confirm("Quer iniciar uma nova rodada?")) {

      let cartaUsuario = [comprarCarta(), comprarCarta()]
      let cartaComputador =[comprarCarta(), comprarCarta()]

      let somaUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor
      let somaComputador = cartaComputador[0].valor + cartaComputador[1].valor

      console.log(`Usuário - Cartas : ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} - Pontuação: ${somaUsuario}`)
      console.log(`Computador - Cartas : ${cartaComputador[0].texto} ${cartaComputador[1].texto} - Pontuação: ${somaComputador}`)

      if(somaUsuario > somaComputador){
         console.log("O Usuário venceu");
      }

      else if(somaComputador > somaUsuario){
         console.log("O Computador venceu");
      }

      else{
         console.log("O jogo ficou emptado");
      }
   }

   else{
      console.log("O jogo acabou");
   }
