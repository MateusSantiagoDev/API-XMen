export class updateRouter {
    constructor(updateController, router) {
      this.update = updateController;
      this.router = router;
    }
  
    route() {
      this.router.patch("/update-character/:id", (req, res) => this.update.execute(req, res));
      return this.router;
    }
  }
  