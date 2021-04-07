import connection from "../../connection"
import { Request, Response } from 'express'

const getUserByEmail = async(req: Request, res: Response) : Promise<void> =>{
    try {
        const result = await connection.raw(`
        SELECT * FROM User
        WHERE email = "${req.params.email}"       
        `)

       res.status(200).send(result[0])

    } catch (error) {
        res.status(500).send(error.message)
    }
}

export default getUserByEmail