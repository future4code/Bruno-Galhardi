import { Request, Response } from "express";
import { PostDatabase } from "../data/PostDatabase";

export const getPostById = async(
    req: Request,
    res: Response
) => {
    try {

        const { id } = req.params

        const td: PostDatabase = new PostDatabase("labook_posts")
        const result = await td.getPostById(id)

        if(!result) {
            throw new Error("Post não encontrado")
        }

        const post = {
            id: result[0].id,
            photo: result[0].photo,
            description: result[0].description,
            type: result[0].type,
            createdAt: result[0].created_at,
            authorId: result[0].author_id,
         }

         res.status(200).send(post)
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}