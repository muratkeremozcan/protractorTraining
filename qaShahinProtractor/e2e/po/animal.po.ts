import { browser, by, element } from 'protractor';
import { ConfirmPage } from './confirm.po';

export class AnimalPage {

  selectAninmal(index) {
    element(by.model('animal')).$('[value="index"]');
  }

  clickContinue() {
    element(by.buttonText('CONTINUE')).click();
    return require('./confirm.po.ts');
  }
}
