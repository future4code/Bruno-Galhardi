import connection from "../../../connection"
import { Request, Response } from 'express'
import getTokenData from '../../../Services/getTokenData'

const getUserById = async(
    req:Request,
    res:Response
): Promise<void> => {

    try {
     
     const token = req.headers.authorization as string
     
     const AuthenticationData = getTokenData(token)
     if(!AuthenticationData.id){
         throw new Error('Usuário não autorizado')
     }

     const result = await connection('User_Cookenu')
        .where({id:req.params.id})

        const bodyUser = {
            id:result[0].id,
            name:result[0].name,
            email:result[0].email
        }  
           res.status(200).send(bodyUser)


    } 
    
    catch (error) {
        res.status(400).send({message: error.message})
    }


}

export default getUserById
