const { expect } = require("@wdio/globals");
const TariffsPage = require("../pageobjects/tariffs.page");
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')

// async function priceOnChangeWorkersQuant(equal) {
//   expect(
//     await (await $(".tariff-card.primary").$(".price-value")).getText()
//   ).toEqual(equal);
// }

describe("tarriffs page test", () => {
    it("tariff-card primary tarrifs change check", async () => {
      await TariffsPage.open();

      let select = await $(".tariff-card.primary").$("select");
      let options = await select.$$("option");

      expect(options.length).toBe(8);

      for (let i = 0; i < options.length; i++) {
        await select.selectByIndex(i);
        await select.click();

        switch (i) {
          case 0:
            expect(
              await (await $(".tariff-card.primary").$(".price-value")).getText()
            ).toEqual("103.5");
            break;

          case 1:
            expect(
              await (await $(".tariff-card.primary").$(".price-value")).getText()
            ).toEqual("157.5");
            break;

          case 2:
            expect(
              await (await $(".tariff-card.primary").$(".price-value")).getText()
            ).toEqual("220.5");
            break;

          case 3:
            expect(
              await (await $(".tariff-card.primary").$(".price-value")).getText()
            ).toEqual("283.5");
            break;

          case 4:
            expect(
              await (await $(".tariff-card.primary").$(".price-value")).getText()
            ).toEqual("310.5");
            break;

          case 5:
            expect(
              await (await $(".tariff-card.primary").$(".price-value")).getText()
            ).toEqual("378");
            break;

          case 6:
            expect(
              await (await $(".tariff-card.primary").$(".price-value")).getText()
            ).toEqual("445.5");
            break;

          case 7:
            expect(
              await (
                await $(".tariff-card.primary")
                  .$(".individual-price")
                  .$(".price-title")
              ).getText()
            ).toEqual("Індивідуальна ціна");
            break;

          default:
            console.log("Invalid select option");
        }
      }

      // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
      // await expect(SecurePage.flashAlert).toBeExisting()
      // await expect(SecurePage.flashAlert).toHaveTextContaining(
      //     'You logged into a secure area!')
    });

    ///////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    it("currency symbol change check", async () => {
      await TariffsPage.open();

      let select = await $(".currency-select").$("select");
      let options = await select.$$("option");

      expect(options.length).toBe(3);

      for (let i = 0; i < options.length; i++) {
        await select.selectByIndex(i);
        await select.click();

        switch (i) {
          case 0:
            expect(
              await (await $(".price-per-month").$(".currency")).getText()
            ).toEqual("€");
            break;

          case 1:
            expect(
              await (await $(".price-per-month").$(".currency")).getText()
            ).toEqual("$");
            break;

          case 2:
            expect(
              await (await $(".price-per-month").$(".currency")).getText()
            ).toEqual("₴");
            break;

          default:
            console.log("Invalid select option");
        }
      }
    });

  ///////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  it("Period control check", async () => {
    await TariffsPage.open();

    //open page
    expect(
      await (
        await $(".period-and-currency")
          .$(".period-control")
          .$(".period-element.active")
      ).getText()
    ).toEqual("3 місяці");

    //1 month
    await $(".period-and-currency")
      .$(".period-control")
      .$("div=1 місяць")
      .click();

    expect(
      await (
        await $(".period-and-currency").$(".period-control").$("div=1 місяць")
      ).getAttribute("class")
    ).toEqual("period-element active");

    //3 month
    await $(".period-and-currency")
      .$(".period-control")
      .$("div=3 місяці")
      .click();

    expect(
      await (
        await $(".period-and-currency").$(".period-control").$("div=3 місяці")
      ).getAttribute("class")
    ).toEqual("period-element active");

    //6 month
    await $(".period-and-currency")
      .$(".period-control")
      .$("div=6 місяців")
      .click();

    expect(
      await (
        await $(".period-and-currency").$(".period-control").$("div=6 місяців")
      ).getAttribute("class")
    ).toEqual("period-element active");

    //12 month
    await $(".period-and-currency")
      .$(".period-control")
      .$("div=12 місяців")
      .click();

    expect(
      await (
        await $(".period-and-currency").$(".period-control").$("div=12 місяців")
      ).getAttribute("class")
    ).toEqual("period-element active");
  });
});
