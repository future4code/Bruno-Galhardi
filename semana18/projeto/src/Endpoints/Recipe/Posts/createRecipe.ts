import connection from "../../../connection"
import { Request, Response } from "express"
import { recipe } from '../../../Types'
import { generateId } from '../../../Services/getId'
import { hash } from "../../../Services/hashManager"
import generateToken from "../../../Services/getToken"
import getTokenData from "../../../Services/getTokenData"

const createRecipe = async(
    req:Request,
    res:Response
): Promise<void> => {
    try {

        const token = req.headers.authorization as string
       
        const { title, description } = req.body

        if(!title || !description) {
            throw new Error("Preencha os campos 'titulo' e 'descrição'")
        }

        const id: string = generateId()

        const dateNow =  Date.now()

        const AuthenticationData = getTokenData(token)

        const newRecipe: recipe = { id, title, description, date:dateNow, user_id: AuthenticationData.id}

        await connection('Recipe_Cookenu')
            .insert(newRecipe)


        res.status(201).send({message:"Receita criada com sucesso! Bom apetite"})

    } 
    
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message })
         } else {
            res.send({ message: error.message })
         }
    }
}

export default createRecipe