import { charactersEntity } from "../../entities/entity.js";

export class createUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  async execute(character) {
    const newCharacter = new charactersEntity(character);
    newCharacter.validate();
    return await this.repository.create(newCharacter.getCharacter());
  }
}
