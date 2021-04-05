import * as jwt from "jsonwebtoken";
import { AuthenticationData } from '../Types/Types'
import  dotenv  from 'dotenv'

  const expiresIn = "5min";
  dotenv.config();
  const generateToken = (id: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }


export default generateToken