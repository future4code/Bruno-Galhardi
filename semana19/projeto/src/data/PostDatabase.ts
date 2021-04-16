import BaseDatabase from "./BaseDatabase";
import {  post  } from "../model/post";

export class PostDatabase extends BaseDatabase {

   private tableName: string;

   constructor(tableName: string, param2?: number) {
      console.log("Construindo um TaskDatabase");
      super()
      this.tableName = tableName;
   }

   async createPost(post: post) {
      await PostDatabase.connection(this.tableName)
         .insert({
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            createdAt: post.createdAt,
            authorId: post.authorId
         })
   }

   async getPostById(id: string): Promise<any> {
      const result = await BaseDatabase.connection.raw(`
             SELECT id.*, id FROM labook_posts AS id
             JOIN labook_users AS users
             ON authorId = users.id
             WHERE post.id = '${id}';
         `)

      return result[0][0]
   }

}