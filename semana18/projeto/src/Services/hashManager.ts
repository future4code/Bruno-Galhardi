import * as bcrypt from 'bcrypt'


export const hash = async (s:string): Promise<string> => {

    const rounds: number = Number(process.env.BCRYPT_COST);
    if(isNaN(Number(process.env.BCRYPT_COST))){
        throw new Error("O cost precisa ser um número");
    }   
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);

    return result;
}

export const compare = (s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
}