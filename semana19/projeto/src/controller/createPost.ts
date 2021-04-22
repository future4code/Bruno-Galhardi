import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { createPostInput } from "../model/post";

export const createPost = async (
   req: Request,
   res: Response
) => {
   try {

      const { photo, description, type, createdAt} = req.body as createPostInput;

      const tokenUser = req.headers.authorization as string  

      const tokenPost = await PostBusiness({ photo, description, type, createdAt,tokenUser })
      
      
      res
         .status(201)
         .send({
            message: "Post criado com sucesso!",
            tokenPost
         })

   } catch (error) {
      res.status(400).send(error.message)
   }
}