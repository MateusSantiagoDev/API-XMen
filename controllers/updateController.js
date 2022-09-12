export class updateController {
    constructor(updateUseCase) {
      this.update = updateUseCase;
    }
  
    async execute(req, res) {
      try {
        const id = req.params.id;
        const newParams = req.body;
        const response = await this.update.execute(newParams, id);
        res.status(200).send(response);
      } catch (err) {
        res.status(400).send(message.err);
      }
    }
  }
  