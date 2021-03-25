import connection from "../../connection"
import { Request, Response } from 'express'


const updateActor = async (req: Request, res: Response) => {
   try {

      await connection("Actor")
         .update({            
            salary: req.body.salary,
         })
         .where({
            id: req.body.id
         })

      res.end("Actor Update sucessfully")

   } catch (error) {
      console.log(error.message)
      res.status(500).send("Internal server error")
   }
}

export default updateActor