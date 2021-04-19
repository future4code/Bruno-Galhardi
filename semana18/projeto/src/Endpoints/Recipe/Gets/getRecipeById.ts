import connection from "../../../connection"
import { Request, Response } from 'express'
import getTokenData from '../../../Services/getTokenData'

const getRecipeById = async(
    req:Request,
    res:Response
): Promise<void> => {

    try {
     
     const token = req.headers.authorization as string
     
     const AuthenticationData = getTokenData(token)
     if(!AuthenticationData.id){
         throw new Error('Usuário não autorizado')
     }

     const result = await connection('Recipe_Cookenu')
        .where({id:req.params.id})

        let timestamp = Number(result[0].date);
        let data = new Date(timestamp).toLocaleDateString("pt-BR");
           
        const bodyUser = {
            id:result[0].id,
            title:result[0].title,
            description:result[0].description,
            cratedAt:data
        }  
           res.status(200).send(bodyUser)

    } 
    
    catch (error) {
        res.status(400).send({message: error.message})
    }


}

export default getRecipeById
