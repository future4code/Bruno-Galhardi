import express, {Request, Response} from "express";
import cors from "cors";
import {countries, country} from './countries'


const app = express();
app.use(express.json());
app.use(cors());

//Endpoint1
app.get("/countries/all", (req: Request, res: Response)=>{
    
    const mapCountries = countries.map((pais:country)=>{
        return{id:pais.id, name:pais.name}
    })
    res
    .status(200)
    .send(mapCountries)
})

//Endpoint3
app.get("/countries/search", (req: Request, res: Response) => {


    let result: country[] = countries;
    let resultado: country[] = []
    try {
 
       if (!req.query.name && !req.query.capital && !req.query.continent) {
          throw new Error("Invalid Parameters");
       }
       if (req.query.name || req.query.capital || req.query.continent) {
        resultado = result.filter(
             country => country.name.includes(req.query.name as string ||'')
          )
          .filter(
            country => country.capital.includes(req.query.capital as string ||'')
         )
         .filter(
            country => country.continent.includes(req.query.continent as string ||'')
         )
       }
     
    } catch (error) {
       res.status(400).send(error.message);
    }
 
    res.status(200).send(resultado);
 
 });
 
//endpoint2
app.get("/countries/:id", (req: Request, res: Response)=>{
    const findId: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    if(findId){
        res.status(200).send(findId)
    }else{
        res.status(404).send("Not found")
    }
})





app.listen(3003, ()=>{
    console.log("servidor rodando no endereço http://localhost:3003")
})
