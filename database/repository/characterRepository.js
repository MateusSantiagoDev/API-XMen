import { characterModel } from "../mongoDB/schemas/schema.js";

export class characterRepository {
  async create(character) {
    return await characterModel.create(character);
  }

  async update(character) {
    return await characterModel.findOneAndUpdate(
      { id: character.id },
      character,
      { new: true }
    );
  }

  async findAll() {
    return await characterModel.find();
  }

  async findById(id) {
    return await characterModel.findOne({ id: id });
  }

  async delete(id) {
    return await characterModel.findOneAndRemove({ id: id });
  }
}
