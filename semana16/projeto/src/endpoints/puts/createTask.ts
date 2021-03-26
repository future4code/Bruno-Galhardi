import connection from "../../connection"
import { Request, Response } from 'express'


const createTask = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
        let _str = req.body.limitDate;
        let newDate = _str.split('/').reverse().join('/');
       
      await connection.raw(
         `INSERT INTO Task (title, description, limitDate, status, creatorUserId)
         VALUES (
            "${req.body.title}",
            "${req.body.description}",
            "${newDate}",
            "${req.body.status}",
            "${req.body.creatorUserId}"
         );`
      )

      res.status(201).send({Message: "Tarefa criada com sucesso!", newDate})

   } catch (error) {
      console.log(error.message)
      res.status(500).send("Todos os campos devem ser preenchidos")
   }
}


export default createTask;