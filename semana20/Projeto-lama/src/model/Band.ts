export class Band {
    
    constructor(
        private id: string,
        private name: string,
        private music_genre: string,
        private responsible: string      
    ){ }

    public getId(): string{
        return this.id
    }
    public getName(): string{
        return this.name
    }
    public getMusicGenre(): string{
        return this.music_genre
    }
    public getResponsible(): string{
        return this.responsible
    }
}

export type band = {
    id:string,
    name:string,
    music_genre:string,
    responsible:string
}

export type createBandInput = {
    name:string,
    music_genre:string,
    responsible:string,
    tokenUser:string
}