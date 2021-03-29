import { Request, Response } from 'express'
import selectByName from "../../querys/selectByName";

const getUserByName = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        const name = req.query.name as string

        if (!name) {
            throw new Error("Invalid params");
          }
     const users = await selectByName(name)
        
       res.send(users)
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error")
    }
 }
 
 export default getUserByName;
