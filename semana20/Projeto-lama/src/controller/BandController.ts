import { Request, Response } from "express";
import { BandBusiness } from '../business/BandBusiness'

export class BandController {
    static newBand(arg0: string, newBand: any) {
        throw new Error('Method not implemented.');
    }

    public async newBand(req: Request, res: Response) {
       try {
          const { name, music_genre, responsible } = req.body
          const result = await BandBusiness.newBand(
             name,
             music_genre,
             responsible
          );
          res.status(200).send(result);
       } catch (error) {
          const { statusCode, message } = error
          res.status(statusCode || 400).send({ message });
       }
    }
}

export default new BandController()
