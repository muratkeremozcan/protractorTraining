import { browser, by, element } from 'protractor';

export class ConfirmPage {

  getTitle() {
    return element(by.css('h1')).getText();
  }


}
