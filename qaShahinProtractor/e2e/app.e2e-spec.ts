import { AppPage } from './app.po';
import { HomePage } from './po/home.po'; // import page object
import { AnimalPage } from './po/animal.po'; // import page object
import { ConfirmPage } from './po/confirm.po'; // import page object
import { browser, by, element } from 'protractor';

describe( 'test zoo site for input field on home page', () => {
  let homepage: HomePage; // instantiate global variable
  let animalpage: AnimalPage; // instantiate global variable for animalpage
  let confirmpage: ConfirmPage; // instantiate global variable for confirmpage

  beforeEach( () => { // the only requirement with before each is it has to be inside a describe block
    homepage = new HomePage();  // assign to new homepage
    animalpage = new AnimalPage(); // assign to new animal page
    confirmpage = new ConfirmPage();

    browser.get('http://www.thetestroom.com/jswebapp');  // navigate to the site
  });

  afterEach( () => {
    console.log('AfterEach method executed');
  });

    it('should go to the correct webpage', () => {
        expect(browser.getCurrentUrl()).toContain('jswebapp');  // verify url
        expect(browser.getCurrentUrl()).toEqual('http://www.thetestroom.com/jswebapp/'); // same test, full string
    });

    describe('should generate correct text', () => {
      beforeEach( () => {
        console.log('beforeEach, do nothing');
      });
      const textMessage = 'Subscribe to the channel...';  // the string to enter
      it ('should check correct text', () => {
        element(by.model('person.name')).sendKeys(textMessage);  // enter the string
        element(by.binding('person.name')).getText().then((text) => {  // get the string from the entry
        expect(textMessage).toEqual('Subscribe to the channel...');  // check the string
        //    console.log(text); // no point to this, just showing you can do it
        });
      });
    });

    describe('should check the correct number of items in the dropdown', () => {
      let lengthOfItems;

      beforeEach( () => {
        lengthOfItems = 4;
      });
      it ('should check number of items', () => {
        element(by.buttonText('CONTINUE')).click();  // click continue to go to the next page
        element(by.model('animal')).$('[value="1"]').click();   // in dropdown , select the item [1] : css selector to find value="1"
        element.all(by.css('.ng-pristine option')).then((items) => { // grab the css class ng-pristine and all chilren under it named option
          expect(items.length).toBe(4); // expect 4 items
          expect(items[1].getText()).toBe('George the Turtle'); // expect the 2nd item to be...
        });
        element(by.partialButtonText('CONT')).click(); // partial button text works too // click continue again
      });
    });

    it('should check user is on the Thank you page', () => {
      element(by.buttonText('CONTINUE')).click();  // click continue to go to the next page
      element(by.partialButtonText('CONT')).click(); // partial button text works too // click continue again
      expect(browser.getCurrentUrl()).toContain('confirm');
    });

    it('should test by using CSS expressions', () => {
        // css tag
        element(by.css('input')).sendKeys('text test');
        // css class
        element(by.css('.ng-binding')).getText().then((text) => {
          console.log(text);
        });
        // css id
        element(by.css('#continue_button')).click();
        // css chaining
        element(by.css('button#continue_button')).click();
        // css child nodes
        element(by.css('table td a')).getText().then( (text) => {
          console.log(text);
        });
        // css attributes
        element(by.css('h1[id="title"]')).getText().then( (text) => {
          console.log(text);
        });
    });

    // using page object. Page objects keeps things tidy and
    it ('Should be able to adopt an animal using page objects', () => {
        homepage.enterFieldValue('You will subscribe');
        const getHomePageText = homepage.getDynamicText();
        expect(getHomePageText).toBe('You will subscribe');
        homepage.clickContinue();
        // we get to the animal page now
        animalpage.selectAninmal(2);
        animalpage.clickContinue();
        // at confirm page
        expect(confirmpage.getTitle()).toBe('Thank you');

    });
});
