import connection from "../../../connection";
import { Request, Response } from "express";
import { user } from '../../../Types'
import { generateId } from '../../../Services/getId'
import { hash } from "../../../Services/hashManager";
import generateToken from "../../../Services/getToken";



const createUser = async (
    req:Request,
    res:Response
): Promise<void> =>{

    try {

        const {name, email, password } = req.body

        if(!name || !email || !password ) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'name', 'email' e 'password'")
        }

        if(!email || !email.includes('@')) throw new Error('email invalido')
        if(!password || password.length < 6) throw new Error('a senha dever conter no minimo 6 caracteres')
        
        const [user] = await connection('User_Cookenu')
            .where({ email })

        if(user) {
            res.statusCode = 409
            throw new Error ('Email já cadastrado')
        }
        
        const id: string = generateId()

        const cypherText = await hash(password);
       

        const newUser: user = { id, name, email, password: cypherText }

        await connection('User_Cookenu')
            .insert(newUser)
        
        const token = generateToken({ id })

        res.status(201).send({token})
    } 
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message })
         } else {
            res.send({ message: error.message })
         }
    }

}

export default createUser