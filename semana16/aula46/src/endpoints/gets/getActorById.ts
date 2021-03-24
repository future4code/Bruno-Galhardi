import connection from "../../connection"
import { Request, Response } from 'express'

const getActorById = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
 
        const result = await connection.raw(`
           SELECT * FROM Actor
           WHERE id = ${req.params.id}  
           `)
 
       res.send(result[0])
 
       /* const actor = await connection("Actor")
       .where({
        id: req.params.id
     }) /
 
       / res.send(actor) */
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error")
    }
 }
 
 export default getActorById;