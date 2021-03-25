import connection from "../../connection"
import { Request, Response } from 'express'


const deleteActor = async (req: Request, res: Response) => {
   try {

      const result = await connection("Actor")
         .delete()
         .where({
            id: req.params.id
         })

     res.send({message:"Actor delete sucessfully"});

   } catch (error) {
      console.log(error.message)
      res.status(500).send("Internal server error")
   }
}

export default deleteActor