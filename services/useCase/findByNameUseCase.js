export class findByNameUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  async execute(name) {
    if (!name) {
      throw new Error("Name not found");
    }
    const findName = await this.repository.findByName(name);
    if (!findName) {
      throw new Error("Not found");
    }
    return findName;
  }
}
