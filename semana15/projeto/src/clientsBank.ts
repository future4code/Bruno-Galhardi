export type account = {
    name:string,
    cpf:number,
    birthDate:string,
    funds:number,
    transaction:transaction[]    
}

export type transaction = {
    value:number,
    date:string,
    description:string
}

export let clients: account[] = [
    {
        name:"James Fraser",
        cpf:123456789,
        birthDate:"25/12/1721",
        funds:0,
        transaction:[]
    },
    {
        name:"Claire",
        cpf:987654321,
        birthDate:"20/11/1918",
        funds:0,
        transaction:[] 
    }

]