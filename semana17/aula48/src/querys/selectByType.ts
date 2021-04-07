import connection from "../connection";

const selectByType = async(type: string)=>{

    const result = await connection.raw(`
    SELECT *
    FROM aula48_exercicio
    WHERE LOWER(type) = "${type.toLowerCase()}"
`)

    return result[0]

}

export default selectByType
