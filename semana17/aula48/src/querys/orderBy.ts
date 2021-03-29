import connection from "../connection";


const orderBy = async (a: string, b:string) => {

    const result = await connection.raw(`
    SELECT *
    FROM aula48_exercicio
    ORDER BY  ${a} ${b}
`)

    return result[0]

}

export default orderBy 