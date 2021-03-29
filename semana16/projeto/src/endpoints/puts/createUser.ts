import connection from "../../connection"
import { Request, Response } from 'express'


const createUser = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {

      await connection.raw(
         `INSERT INTO Users (name, nickname, email)
         VALUES (
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}"
         );`
      )

      res.status(201).send("Usuário criado com sucesso!")

   } catch (error) {
      console.log(error.message)
      res.status(500).send("Todos os campos devem ser preenchidos")
   }
}


export default createUser;