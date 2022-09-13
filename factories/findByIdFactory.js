import { characterRepository } from "../database/repository/characterRepository.js";

import { findByIdUseCase } from "../services/useCase/findByIdUseCase.js";
import { findByIdController } from "../controllers/findByIdController.js";
import { findByIdRouter } from "../routes/findByIdRouter.js";

export const makeFindById = (router) => {
    const repository = new characterRepository();
    const findByIdService = new findByIdUseCase(repository);
    const findByIdcontroller = new findByIdController(findByIdService);
    const findById = new findByIdRouter(findByIdcontroller, router);
    return findById;
}