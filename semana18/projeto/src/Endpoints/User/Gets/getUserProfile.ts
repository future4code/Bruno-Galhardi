import connection from "../../../connection"
import { Request, Response } from 'express'
import getTokenData from '../../../Services/getTokenData'
import { userProfileInfo } from "../../../Types"

const getUserProfile = async (
    req:Request,
    res:Response
): Promise<void> =>{
    try {
      const {id, name, email}: userProfileInfo = req.body

      const token = req.headers.authorization as string

      const AuthenticationData = getTokenData(token)

      const result = await connection('User_Cookenu')
         .where({id:AuthenticationData.id})

      const bodyUser = {
          id:result[0].id,
          name:result[0].name,
          email:result[0].email
      }  
         res.status(200).send(bodyUser)

    } 
    
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({message: error.message})
         }
   
         res.send({message: error.message})
      }
    }


export default getUserProfile
