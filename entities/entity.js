import { randomUUID } from "crypto";

export class charactersEntity{
    constructor(character){
         this.id = character.id ?? randomUUID();
         this.name = character.name;
         this.ability = character.ability;
         this.image = character.image;
    }

    validate(){
        if(!this.name || !this.ability || !this.image){
            throw new Error("fill in all fields");
        }
    }

    getCharacter(){
        return{
            id: this.id,
            name: this.name,
            ability: this.ability,
            image: this.image,
        }
    }
}