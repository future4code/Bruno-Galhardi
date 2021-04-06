### Exercícios aula-50
## Exercício 01
### Letra a:
salt cria um texto aleatório na senha, para encriptar de forma mais segura e nao ficar vuneravel a ataques, já os rounds tambem conhecidos por cost, o custo, indicado por dois dígitos, seguido por $, usaremos o numero 12 como padrao da aplicacção
### Letra b:
```
const rounds: number = Number(process.env.BCRYPT_COST);
    if(isNaN(Number(process.env.BCRYPT_COST))){
        throw new Error("O cost precisa ser um número");
    }   
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);

    return result;
}
```
### Letra c:
```
export const compare = (s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
}
```
## Exercício 02
### Letra a:
O primeiro a ser modificado é o signup, pois voce deve criar usuários ja escondendo a senha por cripotografia.
### Letra b:
```
export default async function testCreateUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password} = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password', 'email' e 'role'")
      }
      if(!email || !email.includes('@')) throw new Error('email invalido')
      if(!password || password.length < 6) throw new Error('a senha deve conter no minimo 6 caracteres')

      const [user] = await connection('User')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const cypherText = await hash(password);
      console.log("senha hasheada: ", cypherText);

      const newUser: user = { id, name, nickname, email, password: cypherText}

      await connection('User')
         .insert(newUser)

      const token: string = generateToken({ id })

      res.status(201).send({ token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}
```
### Letra c:
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

        const token = generateToken(user[0][0].id)
        console.log(user[0][0].id)

        if(!userLogin.password || userLogin.password.length < 6) throw new Error('a senha deve conter no minimo 6 caracteres')
 
        const hashCompare = await compare(userLogin.password, userLogin.password);
        if(!hashCompare){
         res.statusCode = 401;
         throw new Error("Senha Incorreta");
      }


        res.status(200).send({token})
    }

    catch (error) {
        res.status(400).send(error.message)
    }
}

export default login
```
### Letra d:
Não precisa alterar 
## Exercício 03
### Letra a:
```
ALTER TABLE User ADD COLUMN role VARCHAR(255) DEFAULT "normal"
```
### Letra b:
```
export type AuthenticationData = {
    id:string,
    role:string
}
```
