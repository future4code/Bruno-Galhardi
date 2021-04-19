import connection from "../../connection"
import { Request, Response } from 'express'
import { generateId } from "../../services/getId"
import { user } from '../../Types/Types'
import generateToken from "../../services/getToken"
import { hash } from "../../services/hashManager"
import  { userRole } from '../../Types/Types'

export default async function testCreateUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, role} = req.body

      if (!name || !nickname || !email || !password || !role ) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password', 'email' e 'role'")
      }
      if(!email || !email.includes('@')) throw new Error('email invalido')
      if(!password || password.length < 6) throw new Error('a senha deve conter no minimo 6 caracteres')

      const [user] = await connection('User')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const cypherText = await hash(password);
      console.log("senha hasheada: ", cypherText);

      const newUser: user = { id, name, nickname, email, password: cypherText, role}

      await connection('User')
         .insert(newUser)
      
      const token = generateToken({ id, role })

      res.status(201).send({ token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}