import { randomUUID } from "crypto";

export class charactersEntity{
    constructor(character){
         this.id = character.id ?? randomUUID();
         this.name = character.name;
         this.ability = character.ability;
         this.origin = character.origin;
         this.image1 = character.image1;
         this.image2 = character.image2
    }

    validate(){
        if(!this.name || !this.ability || !this.origin || !this.image1 || !this.image2){
            throw new Error("fill in all fields");
        }
    }

    getCharacter(){
        return{
            id: this.id,
            name: this.name,
            ability: this.ability,
            origin: this.origin,
            image1: this.image1,
            image2: this.image2,
        }
    }
}