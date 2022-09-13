export class findByNameController {
  constructor(findByNameUseCase) {
    this.findByName = findByNameUseCase;
  }

  async execute(req, res) {
    try {
      const name = req.body.name;
      const response = await this.findByName.execute(name);
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}
