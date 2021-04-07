import connection from "../../connection"
import { Request, Response } from 'express'
import { generateId } from "../../services/getId"
import { user } from '../../Types/Types'
import generateToken from "../../services/getToken"


const createUser = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
    
      const id = generateId()
      const {name, nickname, email,password} = req.body

      if(!id || !name || !nickname || !password){
          throw new Error('invalid paramters')
      }

      if(!email || !email.includes('@')) throw new Error('email invalido')
      if(!password || password.length < 6) throw new Error('a senha deve conter no minimo 6 caracteres')

      await connection.raw(
         `INSERT INTO User (id, name, nickname, email, password)
         VALUES (
            "${id}",
            "${name}",
            "${nickname}",
            "${email}",
            "${password}"
         );`
      )
      const token = generateToken({id})

      res.status(201).send({
          message:"Usuário criado com sucesso!",
          user:{
              id,
              name,
              nickname,
              email,
              password
          },
          token

        })

   } catch (error) {
      
      res.status(500).send(error.message)
   }
}


export default createUser;