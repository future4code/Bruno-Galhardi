
export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
 }
 
 export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
 }

 export class Post  {

   constructor(
      public id:string,
      public photo:string,
      public description:string,
      public type:POST_TYPES,
      public createdAt:Date,
      public authorId:string
   ){ }

   getId(): string { return this.id }
   getPhoto(): string { return this.photo }
   getDescription(): string { return this.description }   
   getType(): string { return this.type }
   getCreatedAt(): Date { return this.createdAt }
   getAuthorId(): string { return this.authorId }
 }

 export type createPostInput = {
    photo:string,
    description:string,
    type:POST_TYPES,
    createdAt:Date,
    tokenUser:string
 }

 export function convertStringToPost(type: string): POST_TYPES {
   switch (type) {
      case "normal":
         return POST_TYPES.NORMAL;
      case "event":
         return POST_TYPES.EVENT;
      default:
         throw new Error("O user role precisa ser 'NORMAL' ou 'EVENT'")
   }
}