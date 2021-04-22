import { createPostInput, Post, post } from "../model/post"
import { generateId } from "../services/idGenerator"
import {PostDatabase} from "../data/PostDatabase"
import { generateToken, getTokenData } from "../services/authenticator"
import { authenticationData } from "../model/user"

const postDatabase = new PostDatabase("labook_posts")

export async function PostBusiness(input: createPostInput): Promise<string> {
   try {
      if (
         !input.photo ||
         !input.description ||
         !input.type ||
         !input.tokenUser 
      ) {
          
         throw new Error('Preencha os campos "photo","description", "type"')
      }

      const id: string = generateId();

      const tokenPostUser : authenticationData = getTokenData(input.tokenUser)

      await postDatabase.createPost(new Post(
         id,
         input.photo,
         input.description,
         input.type,
         input.createdAt,
         tokenPostUser.id
      ));

      const token: string = generateToken({
         id
      });

      return token;

   } catch (error) {
      throw new Error(error.message);
   }
}
