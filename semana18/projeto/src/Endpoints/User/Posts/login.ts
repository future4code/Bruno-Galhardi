import connection from "../../../connection";
import { Request, Response } from "express";
import { userCredentials } from '../../../Types'
import generateToken from "../../../Services/getToken";
import { compare } from '../../../Services/hashManager'

const login = async (
    req:Request,
    res:Response
):Promise<void> => {
    try {
       const { email, password } : userCredentials = req.body

       if(!email || !password){
           throw new Error("'Email' e 'senha' são obrigatórios!")
       }

       const [user] = await connection('User_Cookenu')
       .where({ email })

       const hashCompare = await compare (password, user.password)

       if(!user || !hashCompare){
           res.statusCode = 401
           throw new Error ("Credenciais inválidas")
       }

       const token:string = generateToken({id:user.id})
       res.send({ token })
    } 
    
    catch (error) {
        if (res.statusCode == 200) {
            res.status(500).send({ message: error.message })
         } else {
            res.send({ message: error.message })
         }
    }



}

export default login