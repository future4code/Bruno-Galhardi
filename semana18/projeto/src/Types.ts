export type user = {
    id:string,
    name:string,
    email:string,
    password:string
}

export type recipe = {
    id:string,
    title:string,
    description:string,
    date:number,
    user_id:string
}

export type userCredentials = {
    email: string
    password: string
 }


export type AuthenticationData = {
    id:string
    
}

export type userProfileInfo = {
    id: string,
    name: string,
    email:string
 }