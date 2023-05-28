const assert = require("assert");
const puppeteer = require("puppeteer");

describe("test greetings", () => {
  let browser;
  let page;
  jest.setTimeout(12000);
  beforeAll(async () => {
    browser = await puppeteer.launch({
      executablePath: "/usr/bin/chromium-browser",
      product: "chrome",
      headless: false,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("navigates to the about page", async () => {
    await page.goto("http://localhost:3000/greetings");
    await page.waitForTimeout(1000);

    //open/close greeting modal
    await page.click("#btn-greeting");
    await page.waitForTimeout(500);
    await page
      .waitForSelector("#greeting-modal-content", {
        hidden: false,
        timeout: 3000,
      })
      .catch(() => console.log("Модальное окно greeting не появилось"));
    await page.$("#close-modal");
    await page.click("#close-modal");
    await page.waitForTimeout(500);
    await page
      .waitForSelector("#greeting-modal-content", {
        hidden: true,
        timeout: 3000,
      })
      .catch(() => console.log("Модальное окно greeting не исчезло"));
    await page.click("#btn-greeting");
    await page.waitForTimeout(500);
    await page
      .waitForSelector("#greeting-modal-content", {
        hidden: false,
        timeout: 3000,
      })
      .catch(() => console.log("Модальное окно greeting не появилось"));
    await page.$("#btn-greeting-ok");
    await page.click("#btn-greeting-ok");
    await page.waitForTimeout(500);
    await page
      .waitForSelector("#greeting-modal-content", {
        hidden: true,
        timeout: 3000,
      })
      .catch(() => console.log("Модальное окно greeting не исчезло"));

    await page.click("#btn-login");
    await page.waitForTimeout(500);
    await page
      .waitForSelector("#login-modal-content", { hidden: false, timeout: 3000 })
      .catch(() => console.log("Модальное окно login не появилось"));

    const button = await page.$("#btn-go-auth");
    const isDisabled = await button.evaluate((el) => el.disabled);
    assert(
      isDisabled,
      'Кнопка "войти" должна быть заблокирована до ввода капчи'
    );

    const loginInput = await page.$("#authLogin");
    const passInput = await page.$("#authPassword");

    const expectedValue = "Hello, world!";
    await loginInput.type(expectedValue);
    await passInput.type(expectedValue);

    const loginInputValue = await loginInput.evaluate((el) => el.value);
    const passInputValue = await passInput.evaluate((el) => el.value);
    assert.equal(
      loginInputValue,
      expectedValue,
      `Значение инпута: ${loginInputValue} отличается от ожидаемого: ${expectedValue}`
    );
    assert.equal(
      passInputValue,
      expectedValue,
      `Значение инпута: ${passInputValue} отличается от ожидаемого: ${expectedValue}`
    );

    await page.$("#close-modal");
    await page.click("#close-modal");

    await page.waitForTimeout(500);
    await page
      .waitForSelector("#login-modal-content", { hidden: true, timeout: 3000 })
      .catch(() => console.log("Модальное окно login не исчезло"));

    await page.click("#btn-login");
    await page.waitForTimeout(500);
    await page
      .waitForSelector("#login-modal-content", { hidden: false, timeout: 3000 })
      .catch(() => console.log("Модальное окно login не появилось"));

    await page.click("#btn-forgot");
    await page.waitForTimeout(500);
    await page
      .waitForSelector("#login-modal-content", { hidden: true, timeout: 3000 })
      .catch(() => console.log("Модальное окно login не исчезло"));
    await page
      .waitForSelector("#forgot-modal-content", {
        hidden: false,
        timeout: 3000,
      })
      .catch(() => console.log("Модальное окно forgot не появилось"));

    const emailInput = await page.$("#email");
    await emailInput.type(expectedValue);
    const emailInputValue = await passInput.evaluate((el) => el.value);
    assert.equal(
      emailInputValue,
      expectedValue,
      `Значение инпута: ${emailInput} отличается от ожидаемого: ${expectedValue}`
    );
    await page.click("#close-modal");
    await page.waitForTimeout(500);
    await page
      .waitForSelector("#forgot-modal-content", { hidden: true, timeout: 3000 })
      .catch(() => console.log("Модальное окно forgot не исчезло"));
  });
});
