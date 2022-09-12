import { characterRepository } from "../dataBase/repository/characterRepository.js";

import { createUseCase } from "../services/useCase/createUseCase.js";
import { createController } from "../controllers/createController.js";
import { createRouter } from "../routes/createRouter.js";

export const makeCreate = (router) =>{
    const repository = new characterRepository();
    const createService = new createUseCase(repository);
    const createcontrolle = new createController(createService);
    const create = new createRouter(createcontrolle, router);
    return create;
}
