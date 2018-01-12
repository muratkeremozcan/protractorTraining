import { browser, by, element } from 'protractor';
import { AnimalPage } from './animal.po'; // import animal page object

export class HomePage {
  enterFieldValue(value) {
    element(by.model('person.name')).sendKeys(value);
  }
  getDynamicText() {
    return element(by.binding('person.name')).getText();
  }
  clickContinue() {
    element(by.buttonText('CONTINUE')).click();
    // return a reference to the animal page object
    return require('./animal.po.ts');  // expect to have animal page after clicking CONTINUE
  }
}
