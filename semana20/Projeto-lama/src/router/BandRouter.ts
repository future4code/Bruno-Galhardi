import express from 'express'
import { BandController } from '../controller/BandController'

export const BandRouter = express.Router();

BandRouter.post("/createBand", BandController.newBand)