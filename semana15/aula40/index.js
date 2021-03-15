const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = Number(process.argv[3]) +7 

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você tera ${novaIdade}`)