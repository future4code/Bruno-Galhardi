import connection from "../../connection"
import { Request, Response } from 'express'


const getAvgActor = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
         
        const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender: req.query.gender });

        res.send(`USD ${result[0].average.toFixed(2)}`);
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error")
    }
 }
 
 export default getAvgActor;