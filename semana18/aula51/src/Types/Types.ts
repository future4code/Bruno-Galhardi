export type user = {
    id:string,
    name:string,
    nickname:string,
    email:string,
    password:string,
    role: userRole

}

export enum userRole {
    ADMIN = "admin",
    NORMAL = "normal",
}

export type AuthenticationData = {
    id:string,
    role:string
}