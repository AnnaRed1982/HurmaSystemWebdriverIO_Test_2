const { expect } = require("@wdio/globals");
const TariffsPage = require("../pageobjects/tariffs.page");
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')

// async function priceOnChangeWorkersQuant() {
//   await (await $(".tariff-card.primary").$(".price-value")).getText();
// }

describe("tarriffs page test", () => {
  it("checking tariff-card primary tarrifs", async () => {
    await TariffsPage.open();

    let select = await $(".tariff-card.primary").$("select");
    let options = await select.$$("option");

    expect(options.length).toBe(8);

    for (let i = 0; i < options.length; i++) {
      await select.selectByIndex(i);
      await select.click();

      switch (i) {
        case 0:
          //   expect(priceOnChangeWorkersQuant()).toEqual("103.5");
          expect(
            await (await $(".tariff-card.primary").$(".price-value")).getText()
          ).toEqual("103.5");
          break;

        // case 1:
        //   expect(
        //     await (await $(".tariff-card.primary").$(".price-value")).getText()
        //   ).toEqual("157.5");
        //   break;

        // case 2:
        //   expect(
        //     await (await $(".tariff-card.primary").$(".price-value")).getText()
        //   ).toEqual("220.5");
        //   break;

        // case 3:
        //   await spanPriceValueText.isEqual("283.5");
        //   break;

        // case 4:
        //   await spanPriceValueText.isEqual("310.5");
        //   break;

        // case 5:
        //   await spanPriceValueText.isEqual("378");
        //   break;

        // case 6:
        //   await spanPriceValueText.isEqual("445.5");
        //   break;

        case 7:
          // spanPriceValueText.isEqual("Зв'яжіться з нами для розрахунку");
     
          break;

        default:
          console.log("Invalid select option");
      }
    }

    // console.log("select--------------->", select);

    // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
    // await expect(SecurePage.flashAlert).toBeExisting()
    // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //     'You logged into a secure area!')
  });
});
