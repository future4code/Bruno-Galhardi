### Exercícios aula-50
## Exercício 01
### Letra a:
Melhor usar strings do que numeros, pois você consegue formular combinações mais seguras para que nenhum dado do usúario seja exposto.

### Letra b:
~~~
import { v4 } from 'uuid'

export function generateId(): string {
    return v4();
  }
~~~

## Exercício 02
### Letra a:
No código acima, o usuário está sendo criado na tabela, esta sendo passado os types para adicionar.
### Letra b:
~~~
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
~~~
### Letra c:
~~~
const createUser = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
    
      const id = generateId()
      const {name, nickname, email,password} = req.body

      if(!id || !name || !nickname || !email || !password){
          throw new Error('invalid paramters')
      }

      await connection.raw(
         `INSERT INTO User (id, name, nickname, email, password)
         VALUES (
            "${id}",
            "${name}",
            "${nickname}",
            "${email}",
            "${password}"
         );`
      )

      res.status(201).send({
          message:"Usuário criado com sucesso!",
          user:{
              id,
              name,
              nickname,
              email,
              password
          }         
        })

   } catch (error) {
      console.log(error.message)
      res.status(500).send("Todos os campos devem ser preenchidos")
   }
}


export default createUser;
~~~

## Exercício 03
### Letra a:
ela recebe any como padrao, então voce esta passando um type pra ela, e falando pra ela ter esse comportamento que você definiu.

### Letra b:
```
const expiresIn = "5min";
  const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }


export default generateToken
```
```
export type AuthenticationData = {
    id:string
}
```

## Exercício 04
### Letra a, b, c:
```
const createUser = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
    
      const id = generateId()
      const {name, nickname, email,password} = req.body

      if(!id || !name || !nickname || !password){
          throw new Error('invalid paramters')
      }

      if(!email || !email.includes('@')) throw new Error('email invalido')
      if(!password || password.length < 6) throw new Error('a senha deve conter no minimo 6 caracteres')

      await connection.raw(
         `INSERT INTO User (id, name, nickname, email, password)
         VALUES (
            "${id}",
            "${name}",
            "${nickname}",
            "${email}",
            "${password}"
         );`
      )
      const token = generateToken({id})

      res.status(201).send({
          message:"Usuário criado com sucesso!",
          user:{
              id,
              name,
              nickname,
              email,
              password
          },
          token

        })

   } catch (error) {
      console.log(error.message)
      res.status(500).send(error.message)
   }
}


export default createUser;
```
## Exercício 05
```
const getUserByEmail = async(req: Request, res: Response) : Promise<void> =>{
    try {
        const result = await connection.raw(`
        SELECT * FROM User
        WHERE email = "${req.params.email}"       
        `)

       res.status(200).send(result[0])

    } catch (error) {
        res.status(500).send(error.message)
    }
}

export default getUserByEmail
```
## Exercício 06
### Letra a e b:
```
const login = async (
    req: Request,
    res: Response
): Promise<void> =>{
    try {

        const userLogin = {
            email:req.body.email,
            password: req.body.password
        }

        
        if(!userLogin.email || !userLogin.email.includes('@')) throw new Error('email invalido')

        const user = await connection.raw(`
            SELECT * FROM User
            WHERE email = "${userLogin.email}"
        `)

        const token = generateToken({id:user[0][0].id})
        console.log(user[0][0].id)

        if(!userLogin.password || userLogin.password.length < 6) throw new Error('a senha deve conter no minimo 6 caracteres')
 

        res.status(200).send({token})
    }

    catch (error) {
        res.status(400).send(error.message)
    }
}

export default login
```

## Exercício 07
### Letra a:
usamos o any ali para indicar que o typo pode ser qualquer coisa, assim nao precisa tipar ele ao passar.

### Letra b:
```
const getData = (token: string): AuthenticationData => {

  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;

  const result = {
    id: payload.id,
  };

  return result;
  
};

export default getData
```
## Exercício 08
### Letra a e b:
const getUserById = async(req: Request, res: Response) : Promise<void> =>{
    try {

        const token = req.headers.authorization as string
        
        const authenticationData = getData(token)
        
        const result = await connection.raw(`
        SELECT * FROM User
        WHERE id = "${authenticationData.id}"       
        `)

       res.status(200).send({
           userProfile:{
               id:result[0][0].id,
               email:result[0][0].email
           }
    })

    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

export default getUserById

