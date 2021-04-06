import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../Types/Types";

const getData = (token: string): AuthenticationData => {

  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;

  const result = {
    id: payload.id,
    role:payload.role
  };

  return result;
  
};

export default getData