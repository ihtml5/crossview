import type { ReadonlyDeep } from 'type-fest';
const puppeteer = require('puppeteer');

describe('crossview-ui-image', () => {
  it('starts crossview-ui-image', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:10001/');
    await page.setContent('<crossview-ui-image></crossview-ui-image>');
    const element = await page.$('crossview-ui-image');

    const text = await page.evaluate(
      (el: ReadonlyDeep<HTMLElement>) => el.shadowRoot?.textContent,
      element,
    );

    expect(text).toStrictEqual(expect.stringContaining('Hello world!'));
  });
});
 