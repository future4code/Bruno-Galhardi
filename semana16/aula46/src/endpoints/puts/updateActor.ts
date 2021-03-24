import connection from "../../connection"
import { Request, Response } from 'express'


const updateActor = async (req: Request, res: Response) => {
   try {

      await connection("Actor")
         .update({
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birthDate,
            gender: req.body.gender
         })
         .where({
            id: req.params.id
         })

      res.end()

   } catch (error) {
      console.log(error.message)
      res.status(500).send("Internal server error")
   }
}

export default updateActor