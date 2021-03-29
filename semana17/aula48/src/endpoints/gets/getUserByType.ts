import { Request, Response } from 'express'
import selectByType from '../../querys/selectByType';


const getUserByType = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        const type = req.params.type as string

        if (!type) {
            throw new Error("Invalid params");
          }
     const users = await selectByType(type)
        
       res.send(users)
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send(error.message)
    }
 }
 
 export default getUserByType;
