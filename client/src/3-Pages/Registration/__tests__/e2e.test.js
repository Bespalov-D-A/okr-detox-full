const assert = require("assert");
const puppeteer = require("puppeteer");

describe("test registration", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      executablePath: "/usr/bin/chromium-browser",
      product: "chrome",
      //headless: false,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("navigates to the about page", async () => {
    await page.goto("http://localhost:3000/registration");

    //login modal
    const button = await page.$("#btn-go-reg");
    const isDisabled = await button.evaluate((el) => el.disabled);
    assert(
      isDisabled,
      'Кнопка "регистрация" должна быть заблокирована до ввода капчи'
    );

    const emailInput = await page.$("#email");
    const passInput = await page.$("#password");
    const confPassInput = await page.$("#confirm_password");

    const expectedValue = "Hello, world!";
    await emailInput.type(expectedValue);
    await passInput.type(expectedValue);
    await confPassInput.type(expectedValue);

    const emailInputValue = await emailInput.evaluate((el) => el.value);
    const passInputValue = await passInput.evaluate((el) => el.value);
    const confPassInputValue = await passInput.evaluate((el) => el.value);
    assert.equal(
      emailInputValue,
      expectedValue,
      `Значение инпута: ${emailInputValue} отличается от ожидаемого: ${expectedValue}`
    );
    assert.equal(
      passInputValue,
      expectedValue,
      `Значение инпута: ${passInputValue} отличается от ожидаемого: ${expectedValue}`
    );
    assert.equal(
      confPassInputValue,
      expectedValue,
      `Значение инпута: ${confPassInputValue} отличается от ожидаемого: ${expectedValue}`
    );
  });
});
