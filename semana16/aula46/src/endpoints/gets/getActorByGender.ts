import connection from "../../connection"
import { Request, Response } from 'express'

const getActorByGender = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
 
        const result = await connection.raw(`
           SELECT COUNT(*) as Count FROM Actor
           WHERE gender = "${req.query.gender}"  
           `)
 
       res.send(result[0][0])
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error")
    }
 }
 
 export default getActorByGender;