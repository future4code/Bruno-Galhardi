import { Request, Response } from "express";
import { signupBusiness } from "../business/singupBusiness";
import { signupInput } from "../model/user";

export const signup = async (
   req: Request,
   res: Response
) => {
   try {

      const { name, email, password} = req.body as signupInput;

      const token = await signupBusiness({ name, email, password })

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      res.status(400).send(error.message)
   }
}