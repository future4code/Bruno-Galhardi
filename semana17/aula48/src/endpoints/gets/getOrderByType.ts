import { Request, Response } from 'express'
import orderBy from '../../querys/orderBy'

const getOrderByType = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {

        const name = req.query.name as string
        const type = req.query.type as string
        let direction = req.query.direction as string || "ASC"
        let resultOrder = ""

        if (!name && type) {
            resultOrder = await orderBy('type', direction)
          }
        else if (!type && name){
            resultOrder = await orderBy('name', direction)
        }
        else{
            resultOrder = await orderBy('email', direction)
        }
        
       res.send(resultOrder)
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error")
    }
 }
 
 export default getOrderByType;