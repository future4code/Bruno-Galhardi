//a
//let minhaString: string = 7
// deu erro pq ele esperava uma string e foi passado um number

//b
let meuNumero: number = 10
//podemos criar um outro type dentro da mesma função usando o |
let novoNumero: number | string 
novoNumero= 7,
novoNumero="sete"

//c
let novoObjeto: {nome:string, idade:number, corFavorita:string}

//d
type Pessoa = {nome:string, idade: number, corFavorita:string}

const james: Pessoa={nome:"James Fraser", idade:49, corFavorita:"Vermelho"}
const claire: Pessoa={nome:"Claire Fraser",idade:48, corFavorita:"Branco"}
const fergus: Pessoa={nome:"Fergus Fraser", idade:33, corFavorita:"Amarelo"}

//e
enum COR_ARCO_IRIS {
    VERMELHO="vermelho",
    LARANJA="laranja",
    AMARELO="amarelo",
    VERDE="verde",
    AZUL="azul",
    ANIL="anil",
    VIOLETA="violeta"
}

type Pessoa2 = {nome:string, idade:number, corFavorita:COR_ARCO_IRIS}
const james2: Pessoa={nome:"James Fraser", idade:49, corFavorita: COR_ARCO_IRIS.VERMELHO}
const claire2: Pessoa={nome:"Claire Fraser",idade:48, corFavorita: COR_ARCO_IRIS.ANIL}
const fergus2: Pessoa={nome:"Fergus Fraser", idade:33, corFavorita: COR_ARCO_IRIS.AMARELO}