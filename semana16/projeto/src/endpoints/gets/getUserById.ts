import connection from "../../connection"
import { Request, Response } from 'express'

const getUserById = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
 
        const result = await connection.raw(`
           SELECT * FROM Users
           WHERE id = ${req.params.id}  
           `)
        const bodyUser = {
            id:result[0][0].id,
            nickname:result[0][0].nickname
        }

       res.send(bodyUser)
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Esse Usuário não existe")
    }
 }
 
 export default getUserById;