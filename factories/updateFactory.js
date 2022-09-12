import { characterRepository } from "../dataBase/repository/characterRepository.js";

import { updateUseCase } from "../services/useCase/updateUseCase.js";
import { updateController } from "../controllers/updateController.js";
import { updateRouter } from "../routes/updateRouter.js";
import { findByIdUseCase } from "../services/useCase/findByIdUseCase.js";

export const makeUpdate = (router) => {
      const repository = new characterRepository();
      const findById = new findByIdUseCase(repository)
      const updateService = new updateUseCase(repository, findById);
      const updatecontroller = new updateController(updateService);
      const update = new updateRouter(updatecontroller, router);
      return update;
}