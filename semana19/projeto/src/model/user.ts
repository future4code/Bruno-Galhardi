
export interface authenticationData {
   id: string   
}

export interface user extends authenticationData {
   name: string,
   email: string,
   password: string,
}

export class User implements authenticationData {

   constructor(
      public id: string,
      private name: string,
      private email: string,
      private password: string,
   ) { }

   getId(): string { return this.id };
   getName(): string { return this.name };
   getEmail(): string { return this.email };
   getPassword(): string { return this.password };

   setPassword(password: string): void { this.password = password }

}

export interface signupInput {
   name: string,
   email: string,
   password: string,
  
}

export interface loginInput {
   email: string
   password: string
}