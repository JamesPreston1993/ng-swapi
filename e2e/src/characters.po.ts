
import { browser, by, element, ElementFinder } from 'protractor';

export class CharactersPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/characters`) as Promise<unknown>;
  }

  getFirstDetailsButton(): ElementFinder {
    return element.all(by.css('li button')).first();
  }

  getCloseModalButton(): ElementFinder {
    return element(by.css('.modal button'));
  }

  getModal(): ElementFinder {
    return element(by.css('.modal'));
  }
}
