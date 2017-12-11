import {AppPage} from './app.po';

describe('ng5-jasmine-karma-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title Automated Testing Demo', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Automated Testing Demo!');
  });

  it('should click three times and reset with matching points', () => {
    page.navigateTo();
    expect(page.getPoints()).toBe('1');

    page.getPlusOneButton().click();
    page.getPlusOneButton().click();
    page.getPlusOneButton().click();

    expect(page.getPoints()).toBe('4');

    page.getResetButton().click();

    expect(page.getPoints()).toBe('0');
  });
});
