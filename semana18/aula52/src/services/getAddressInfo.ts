import axios from "axios"
import { addressInfo } from "../Types/Types"

const baseUrl: string = "https://viacep.com.br/ws"

const getAddressInfo = async (CEP: string): Promise<addressInfo | null> => {
   try {

      const response = await axios.get(`${baseUrl}/${CEP}/json`)
      console.log(response)
      const { logradouro, bairro, localidade, uf } = response.data

      return {
         street: logradouro,
         neighbourhood: bairro,
         city: localidade,
         state: uf
      }

   } catch (error) {
      return null
   }
}


export default getAddressInfo
