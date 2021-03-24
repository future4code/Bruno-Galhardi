import connection from "../../connection"
import { Request, Response } from 'express'


const deleteActor = async (req: Request, res: Response) => {
   try {

      const result = await connection("Actor")
         .avg()
         .where({
            gender: req.params.gender
         })

     return result [0].average;

   } catch (error) {
      console.log(error.message)
      res.status(500).send("Internal server error")
   }
}

export default deleteActor