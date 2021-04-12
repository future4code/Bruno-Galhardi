import { signupInput, convertStringToUserRole } from "../model/user";
import { generateId } from "../services/idGenerator";
import { hash } from "../services/hashManager";
import { insertUser } from "../data/insertUser";
import { generateToken } from "../services/authenticator";

export async function signupBusiness(input: signupInput): Promise<string> {
try {
    if (
        !input.name ||
        !input.nickname ||
        !input.email ||
        !input.password ||
        !input.role
     ) {
        throw new Error('Preencha os campos "name","nickname", "email" e "password"')
     }

      const id: string = generateId()
      
      const cypherPassword = await hash(input.password);

      await insertUser({
        id,
        name: input.name,
        nickname : input.nickname,
        email: input.email,
        password: cypherPassword,
        role: convertStringToUserRole(input.role) 
     });

     const token: string = generateToken({
        id,
        role: convertStringToUserRole(input.role)
     });

     return token;

} catch (error) {
    throw new Error(error.message);
}
   

}