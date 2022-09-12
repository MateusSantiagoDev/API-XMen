export class fildAllUseCase {
    constructor(characterRepository) {
      this.repository = characterRepository;
    }
  
    async execute() {
      return await this.repository.findAll();
    }
  }
  