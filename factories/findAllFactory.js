import { characterRepository } from "../database/repository/characterRepository.js";

import { fildAllUseCase } from "../services/useCase/findAllUseCase.js";
import { findAllController } from "../controllers/findAllController.js";
import { findAllRouter } from "../routes/findAllRouter.js";

export const makeFindAll = (router) => {
    const repository = new characterRepository();
    const findAllService = new fildAllUseCase(repository);
    const findAllcontroller = new findAllController(findAllService);
    const findAll = new findAllRouter(findAllcontroller, router);
    return findAll;
}