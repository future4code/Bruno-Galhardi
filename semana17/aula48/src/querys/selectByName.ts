import connection from "../connection";

const selectByName = async(name: string)=>{

    const result = await connection.raw(`
    SELECT *
    FROM aula48_exercicio
    WHERE LOWER(name) = "${name.toLowerCase()}"
`)

    return result[0]

}

export default selectByName
