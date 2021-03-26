import connection from "../../connection"
import { Request, Response } from 'express'

const getTaskById = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
 
        const result = await connection.raw(`
           SELECT * FROM Users
           JOIN Task
           ON Task.creatorUserId = Users.id
           
           `)
        type task = {
            id: number,
            name: string,
            nickname: string,
            email: string,
            title: string,
            description: string,
            limitDate: string,
            status: string,
            creatorUserId: number
          }
       const resultMap = result[0].find((taskList: task) => {
            return taskList.id === Number(req.params.id)
       })
       res.send(resultMap)
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Esta tarefa não existe")
    }
 }
 
 export default getTaskById;