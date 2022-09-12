import { charactersEntity } from "../../entities/entity.js";

export class updateUseCase {
  constructor(characterRepository, findByIdUseCase) {
    this.repository = characterRepository;
    this.findById = findByIdUseCase;
  }

  async execute(character, characterId) {
    const idEdt = await this.findById.execute(characterId);
    const characterEdt = Object.assign(idEdt, character);
    const characterValid = new charactersEntity(characterEdt);
    characterValid.validate();
    return await this.repository.update(characterValid.getCharacter());
  }
}
