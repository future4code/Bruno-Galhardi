//a
// a entrada da função é um array de numeros

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b
type estatisticas = {
    maior:number,
    menor:number,
    media:number
}
// NumerosOrdenados é um array que recebe maior menor e media ele recebe typo de number

//d

type amostraDados = {
    numeros: number[],
    obterEstatisticas: (numeros:number[]) => estatisticas
}