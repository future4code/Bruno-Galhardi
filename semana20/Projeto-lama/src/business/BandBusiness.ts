import { CustomError } from "../errors/CustomError";
import { Band} from "../model/Band";
import { BandDatabase } from "../data/BandDataBase";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class BandBusiness {
    static newBand(name: any, music_genre: any, responsible: any) {
        throw new Error("Method not implemented.");
    }

    constructor(
       private idGenerator: IdGenerator,
       private tokenGenerator: TokenGenerator,
       private hashGenerator: HashGenerator,
       private bandDatabase: BandDatabase
    ) { }
 
    public async createBand(
       name: string,
       music_genre: string,
       responsible: string
    ) {
       try {
          if (!name || !music_genre || !responsible ) {
             throw new CustomError(422, "Missing input");
          }
 
          const id = this.idGenerator.generate();
 
          await this.bandDatabase.createBand(
             new Band(id, name, music_genre, responsible)
          );
 
            const token:string = generateToken({id})

            return token

       } catch (error) {
          if (error.message.includes("key 'name'")) {
             throw new CustomError(409, "Name already in use")
          }
 
          throw new CustomError(error.statusCode, error.message)
       }
    }
}
function generateToken(arg0: { id: string; }): string {
    throw new Error("Function not implemented.");
}

