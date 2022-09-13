export class findByNameRouter {
  constructor(findByNameController, router) {
    this.findByName = findByNameController;
    this.router = router;
  }

  route() {
    this.router.get("/search-character", (req, res) => this.findByName.execute(req, res));
    return this.router;
  }
}
