export default class CustomError extends Error {
    constructor(
       public statusCode: number,
       message?: string
    ) {
       super(message)
    }
 }
 
 export const missingParametersError = new CustomError(422, "Missing paremeters")