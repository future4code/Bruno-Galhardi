import express, {Request, Response} from "express";
import cors from "cors";
import {account,transaction, clients} from './clientsBank'
import { AddressInfo } from "net";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/clients", (req:Request, res:Response)=>{
    let errorCode:number = 400

    try {
        const reqBody: account = {
            name: req.body.name,
            cpf: req.body.cpf,
            birthDate: req.body.birthDate,
            funds: req.body.funds,
            transaction: req.body.transaction
        };

        let ageUser = new Date (req.body.birthDate)
        let ageMilissegundos = Date.now() - ageUser.getTime()
        let ageYears = ageMilissegundos / 1000 / 60 / 60 / 24 / 365

        if(ageYears < 18){
            errorCode = 401
            throw  new Error("Unauthorized age")
        }


        if(!reqBody.name || 
            !reqBody.cpf || 
            !reqBody.birthDate || 
            reqBody.funds < 0 || 
            !reqBody.transaction){
             errorCode = 422;
             throw new Error("Please check the fields.")
         }
 
         clients.push(reqBody);
         res.status(201).send({message: "Client created successfully"})
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})        
    }
})

app.get('/clients/all', (req:Request, res:Response)=>{
    let errorCode:number = 400
    try {
        const mapClients = clients.map((c:account)=>{
            return{
                name:c.name,
                cpf: c.cpf,
                birthDate: c.birthDate,
                funds: c.funds,
                transaction: c.transaction
            }
        })

        res.status(200).send(mapClients)

    } catch (error) {
        res.status(errorCode).send({message: error.message}) 
    }
})
























const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});