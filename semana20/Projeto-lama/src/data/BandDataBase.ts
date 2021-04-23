import BaseDataBase from "./BaseDatabase"
import { Band } from "../model/Band"

export class BandDatabase extends BaseDataBase {

    protected tableName: string = "NOME_TABELA_BANDAS"
 
    private toModel(dbModel?: any): Band | undefined {
       return (
          dbModel &&
          new Band(
             dbModel.id,
             dbModel.name,
             dbModel.music_genre,
             dbModel.responsible
             
          )
       );
    }
 
    public async createBand(band: Band): Promise<void> {
       try {
          await BaseDataBase.connection.raw(`
             INSERT INTO ${this.tableName} (id, name, music_genre, responsible)
             VALUES (
             '${band.getId()}', 
             '${band.getName()}', 
             '${band.getMusicGenre()}',
             '${band.getResponsible()}', 
             
             )`
          );
       } catch (error) {
          throw new Error(error.sqlMessage || error.message)
       }
    }
}