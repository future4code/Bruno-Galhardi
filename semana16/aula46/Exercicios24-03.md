### Exercício 1
a)o uso do raw serve para passar o primeiro array que eu informei e a segunda informacao é os metadados contidos no array
b)
 ```
const getActorByName = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
 
        const result = await connection.raw(`
           SELECT * FROM Actor
           WHERE name = "${req.query.name}"  
           `)
 
       res.send(result[0])

 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error")
    }
 }
 
 export default getActorByName;
  ```
 c)
  ```
 const getCountActor = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
 
        const result = await connection.raw(`
           SELECT COUNT(*) as count FROM Actor
           WHERE gender = "${req.query.gender}"  
           `)
 
       res.send(result[0])

 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error")
    }
 }
 
 export default getCountActor;
  ```
 ### Exercicio 2
 a)
  ```
 const updateActor = async (req: Request, res: Response) => {
   try {

      await connection("Actor")
         .update({
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birthDate,
            gender: req.body.gender
         })
         .where({
            id: req.params.id
         })

      res.end()

   } catch (error) {
      console.log(error.message)
      res.status(500).send("Internal server error")
   }
}

export default updateActor
 ```
b)
 ```
const deleteActor = async (req: Request, res: Response) => {
   try {

      await connection("Actor")
         .delete()
         .where({
            id: req.params.id
         })

      res.end()

   } catch (error) {
      console.log(error.message)
      res.status(500).send("Internal server error")
   }
}

export default deleteActor
 ```
c)
 ```
const getAvgActor = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
 
        const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender: req.params.gender });

        return result[0].average;
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error")
    }
 }
 
 export default getAvgActor;
  ```
 ### Exercício 3
 a)
  ```
 const getActorById = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
 
        const result = await connection.raw(`
           SELECT * FROM Actor
           WHERE id = ${req.params.id}  
           `)
 
       res.send(result[0])
 
       /* const actor = await connection("Actor")
       .where({
        id: req.params.id
     }) /
 
       / res.send(actor) */
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error")
    }
 }
 
 export default getActorById;
  ```
 b)
  ```
 const getActorByGender = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
 
        const result = await connection.raw(`
           SELECT COUNT(*) as Count FROM Actor
           WHERE gender = "${req.query.gender}"  
           `)
 
       res.send(result[0][0])
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error")
    }
 }
 
 export default getActorByGender;
  ```
 ### Exercício 4
 ```
 a)const updateActor = async (req: Request, res: Response) => {
   try {

      await connection("Actor")
         .update({            
            salary: req.body.salary,
         })
         .where({
            id: req.body.id
         })

      res.end("Actor Update sucessfully")

   } catch (error) {
      console.log(error.message)
      res.status(500).send("Internal server error")
   }
}

export default updateActor
 ```
 b)
 ```
 const deleteActor = async (req: Request, res: Response) => {
   try {

      const result = await connection("Actor")
         .delete()
         .where({
            id: req.params.id
         })

     res.send({message:"Actor delete sucessfully"});

   } catch (error) {
      console.log(error.message)
      res.status(500).send("Internal server error")
   }
}

export default deleteActor
```
 