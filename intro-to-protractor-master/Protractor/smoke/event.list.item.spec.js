"use strict";

describe('Event List Detail', () => {
    describe('When clicking on an event', () => {
        var name;

        beforeEach(function() { // this is like a setup we want before every set, so they don't depend on a sequence of tests
            // browser is part of protractor. LOADIN THE PAGE
            browser.get('http://localhost:3000/#!/EventRatings');
            // get all the elements that have a binding, get the first one
            // once on the page EVENT.LIST.HTML , get the first item. element is a protractor item. get 
            var firstElement = element.all(by.binding('name')).first;

            // get the text of first item, get text returns a promise so we use then    
            firstElement.getText().then(function(text) {
                name = text;
            });

            firstElement.click(); //issue click command on the item
            // clicking this element takes us to the NEXT PAGE
            // tell the browser the page is an Angular page, so wait until Angular magic is done
            browser.waitForAngular();
        });

        it('Should navigate to the details page', () => {
            // getting 1 element versus all on page EVENT.DETAILS.HTML
            var header = element(by.binding('name'));
            // jasmine expect statement
            expect(header.getText()).toMatch('Jazz On the Green');
        });

        it('Should update the url', function() {
            expect(browser.getCurrentUrl()).toMatch('EventRatings/');
        });
    });
});