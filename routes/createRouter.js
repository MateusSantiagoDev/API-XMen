export class createRouter {
    constructor(createController, router) {
      this.create = createController;
      this.router = router;
    }
  
    route() {
      this.router.post("/create-character", (req, res) => this.create.execute(req, res));
      return this.router;
    }
  }