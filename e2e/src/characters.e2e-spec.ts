import { browser, logging } from 'protractor';
import { CharactersPage } from './characters.po';

describe('Characters List', () => {
  let page: CharactersPage;

  beforeEach(() => {
    page = new CharactersPage();
  });

  it('should display modal when details button is clicked', async () => {
    page.navigateTo();

    await page.getFirstDetailsButton().click();

    expect(page.getModal().isPresent()).toBe(true);
  });

  it('should close modal when close button is clicked', async () => {
    page.navigateTo();

    await page.getFirstDetailsButton().click();

    expect(page.getModal().isPresent()).toBe(true);

    await page.getCloseModalButton().click();

    expect(page.getModal().isPresent()).toBe(false);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
