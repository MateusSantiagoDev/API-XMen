import { characterRepository } from "../database/repository/characterRepository.js";

import { deleteUseCase } from "../services/useCase/deleteUseCase.js";
import { deleteController } from "../controllers/deleteController.js";
import { deleteRouter } from "../routes/deleteRouter.js";

export const makeDelete = (router) => {
    const repository = new characterRepository();
    const deleteService = new deleteUseCase(repository);
    const deletecontroller = new deleteController(deleteService);
    const delet = new deleteRouter(deletecontroller, router);
    return delet;
}