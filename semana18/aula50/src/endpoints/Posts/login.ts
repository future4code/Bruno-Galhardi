import connection from "../../connection"
import { Request, Response } from 'express'
import { user } from '../../Types/Types'
import generateToken from "../../services/getToken"
import { generateId } from "../../services/getId"

const login = async (
    req: Request,
    res: Response
): Promise<void> =>{
    try {

        const userLogin = {
            email:req.body.email,
            password: req.body.password
        }

        
        if(!userLogin.email || !userLogin.email.includes('@')) throw new Error('email invalido')

        const user = await connection.raw(`
            SELECT * FROM User
            WHERE email = "${userLogin.email}"
        `)

        const token = generateToken(user[0][0].id)
        console.log(user[0][0].id)

        if(!userLogin.password || userLogin.password.length < 6) throw new Error('a senha deve conter no minimo 6 caracteres')
 

        res.status(200).send({token})
    }

    catch (error) {
        res.status(400).send(error.message)
    }
}

export default login