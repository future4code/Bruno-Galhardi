import * as jwt from "jsonwebtoken";
import { AuthenticationData } from '../Types'
import  dotenv  from 'dotenv'

  const expiresIn = "10min";
  dotenv.config();
  const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id    
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }


export default generateToken