import { Request, Response } from "express"
import { loginInput } from '../model/user'
import { loginBusiness } from "../business/loginBusiness"

export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {

      const { email, password } = req.body as loginInput;

      const token: string = await loginBusiness({ email, password });

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}