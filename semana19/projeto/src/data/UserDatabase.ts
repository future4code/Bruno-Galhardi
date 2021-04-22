import BaseDatabase from "./BaseDatabase"
import { User } from "../model/user"

export default class UserDatabase extends BaseDatabase {

   public static tableName = "labook_users"

   public selectUserByEmail = async (
      email: string
   ): Promise<User> => {
      try {
         const result = await BaseDatabase.connection(UserDatabase.tableName)
            .select("*")
            .where({ email })

         return new User(
            result[0].id,
            result[0].name,
            result[0].email,
            result[0].password
         );

      } catch (error) {
         throw new Error(error.slqMessage || error.message)
      }
   }

   public insertUser = async (
      user: User
   ) => {
      await BaseDatabase.connection.insert({
         id: user.getId(),
         name: user.getName(),
         email: user.getEmail(),
         password: user.getPassword()
      }).into(UserDatabase.tableName)
   }
}