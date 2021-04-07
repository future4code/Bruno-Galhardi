import connection from "../../connection"
import { Request, Response } from 'express'
import getData from "../../services/getData"

const getUserById = async(req: Request, res: Response) : Promise<void> =>{
    try {

        const token = req.headers.authorization as string
        
        const authenticationData = getData(token)
        
        if(authenticationData.role !== "normal"){
            console.log(authenticationData)
            throw new Error("Only a normal user can acess this funcionality")

        }


        const result = await connection.raw(`
        SELECT * FROM User
        WHERE id = "${authenticationData.id}"       
        `)

       res.status(200).send({
           userProfile:{
               id:result[0][0].id,
               email:result[0][0].email
           }
    })

    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

export default getUserById

