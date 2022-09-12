export class findAllController {
    constructor(fildAllUseCase) {
      this.findAll = fildAllUseCase;
    }
  
    async execute(_, res) {
      try {
        const response = await this.findAll.execute();
        res.status(200).send(response);
      } catch (err) {
        console.log(err);
        res.status(500);
      }
    }
  }
  