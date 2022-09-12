export class findByIdUseCase {
    constructor(characterRepository) {
      this.repository = characterRepository;
    }
  
    async execute(id) {
      if (!id) {
        throw new Error("provide a valid id");
      }
      const characterId = await this.repository.findById(id);
      if (!characterId) {
        throw new Error("Not found");
      }
      return characterId;
    }
  }
  