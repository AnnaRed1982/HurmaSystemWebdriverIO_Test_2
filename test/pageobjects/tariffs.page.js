const Page = require("./page");

class TariffsPage extends Page {
  open() {
    return super.open("tariffs/");
  }
}

module.exports = new TariffsPage();
