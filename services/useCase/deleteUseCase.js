export class deleteUseCase {
    constructor(characterRepository) {
      this.repository = characterRepository;
    }
  
    async execute(id) {
      if (!id) {
        throw new Error("provide a valid id");
      }
      const deleted = await this.repository.delete(id);
      if (!deleted) {
        throw new Error("Not found!");
      }
      return deleted;
    }
  }
  