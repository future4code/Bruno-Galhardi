import express, {Request, Response} from "express";
import cors from "cors";
import {users, user, UserType} from './users'
import { AddressInfo } from "net";


const app = express();
app.use(express.json());
app.use(cors());

//Ex1
//a-Método utilizado é o get

//b-o caminho que usei foi o ''/users/all" pois nele eu pego todos os usuarios cadastrados.
app.get('/users/all', (req:Request, res:Response)=>{
    try {
        const mapUsers = users.map((u:user)=>{
            return{
                id:u.id,
                name:u.name,
                email:u.email,
                type:u.type,
                age:u.age
            }
        })

        res.status(200).send(mapUsers)

    } catch (error) {
        res.status(400).send("Error")
    }
})

//Ex2
//a-
//b-

app.get("/users/search", (req: Request, res: Response)=>{
try {
    const findUsersType : user[] = users
    if(!req.query.type){
        throw new Error("Invalid Parameters")
    } else{
        let filterUser = findUsersType.filter(
            user => (user.type.toLowerCase()).includes((req.query.type as string).toLowerCase())
        )
        res.status(200).send(filterUser)
    }
} catch (error) {
    res.status(400).send("Error")
}
   
})

//Ex3
app.get("/users/:name", (req: Request, res: Response)=>{
    const findName: user | undefined = users.find(
        user => (user.name).toLowerCase() === (req.params.name as string).toLowerCase()
    )
    if(findName){
        res.status(200).send(findName)
    }else{
        res.status(404).send("Not found")
    }
})

//Ex4
app.put("/users", (req: Request, res: Response)=>{

    let errorCode: number = 400;

    try {

        const reqBody: user = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        };

        if(!reqBody.age || 
           !reqBody.email || 
           !reqBody.id || 
           !reqBody.name || 
           !reqBody.type){
            errorCode = 422;
            throw new Error("Please check the fields.")
        }

        users.push(reqBody);
        res.status(201).send({message: "User created successfully"})
        
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
    
});

//Ex5
app.put("/users/edit/:id", (req:Request, res: Response)=>{
    let errorCode:number = 400

    try {

        const findUser: user | undefined = users.find(
            user => user.id === Number(req.params.id))       
            
    } 
    catch (error) {
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