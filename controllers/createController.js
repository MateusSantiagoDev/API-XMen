export class createController {
    constructor(createUseCase) {
      this.create = createUseCase;
    }
  
    async execute(req, res) {
      try {
        const params = req.body
        const response = await this.create.execute(params)
        res.status(201).send(response);
      } catch (err) {
        res.status(400).send(err.message);
      }
    }
  }
  