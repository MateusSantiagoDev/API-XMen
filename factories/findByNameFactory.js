import { characterRepository } from "../database/repository/characterRepository.js";

import { findByNameUseCase } from "../services/useCase/findByNameUseCase.js";
import { findByNameController } from "../controllers/findByNameController.js";
import { findByNameRouter } from "../routes/findByNameRouter.js";

export const makeFindByName = (router) => {
  const repository = new characterRepository();
  const findByNameService = new findByNameUseCase(repository);
  const findByNamecontroller = new findByNameController(findByNameService);
  const findByName = new findByNameRouter(findByNamecontroller, router);
  return findByName;
};
