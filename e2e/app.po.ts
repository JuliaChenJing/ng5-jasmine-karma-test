import {browser, by, element} from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get('/');
  }

  static getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  static getPoints() {
    return element(by.cssContainingText('div', 'Points')).$('span').getText();
  }

  static getPlusOneButton() {
    return element(by.cssContainingText('button', 'Plus 1'));
  }

  static getResetButton() {
    return element(by.cssContainingText('button', 'Reset'));
  }
}
