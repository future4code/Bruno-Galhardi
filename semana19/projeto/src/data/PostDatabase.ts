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

   /* async getTaskById(id: string): Promise<any> {
      const result = await BaseDatabase.connection.raw(`
             SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
             JOIN to_do_list_users AS users
             ON author_id = users.id
             WHERE tasks.id = '${id}';
         `)

      return result[0][0]
   } */

}