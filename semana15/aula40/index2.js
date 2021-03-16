const operacao = process.argv[2]
const numUm = Number(process.argv[3])
const numDois = Number(process.argv[4])

switch(operacao){
    case 'add':
        console.log(`A soma dos valores ${numUm} + ${numDois} é = ${numUm + numDois}`)
        break
    case 'sub': 
        console.log(`A Subtração do valores ${numUm} - ${numDois} é = ${numUm - numDois}`)
        break
    case 'mult':
        console.log(`A multiplicação dos valores ${numUm} * ${numDois} é = ${numUm * numDois}`)
        break
    case 'div':
        console.log(`A Divisão dos valores ${numUm} / ${numDois} é = ${numUm / numDois}`)
        break
    default:
        console.log('Erro')        
}