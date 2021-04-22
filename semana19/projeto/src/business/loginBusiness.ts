import { loginInput, User } from "../model/user";
import UserDatabase from "../data/UserDatabase";
import { HashManager } from "../services/hashManager";
import { generateToken } from "../services/authenticator";
import CustomError from "../errors/customError"

const userDatabase = new UserDatabase()

export async function loginBusiness(input: loginInput): Promise<string> {
   try {

      if (!input.email || !input.password) {
         throw new Error("'email' e 'senha' são obrigatórios")
      }

      const user: User = await userDatabase.selectUserByEmail(input.email);


      if (!user) {
         throw new Error("Usuário não encontrado ou senha incorreta")
      }

      const hm = new HashManager();

      const passwordIsCorrect: boolean = await hm.compare(input.password, user.getPassword())
      user.setPassword(input.password);

      if (!passwordIsCorrect) {
         throw new CustomError(401, "Usuário não encontrado ou senha incorreta")
      }

      const token: string = generateToken({
         id: user.getId(),
      });

      return token;

   } catch (error) {
      throw new Error(error.message);
   }
}