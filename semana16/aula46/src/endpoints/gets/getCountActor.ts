import connection from "../../connection"
import { Request, Response } from 'express'

const getCountActor = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
 
        const result = await connection.raw(`
           SELECT COUNT(*) as count FROM Actor
           WHERE gender = "${req.query.gender}"  
           `)
 
       res.send(result[0])

 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error")
    }
 }
 
 export default getCountActor;