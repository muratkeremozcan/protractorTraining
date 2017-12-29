"use strict";

describe('Adding a new event', () => {

    beforeEach(() => {
        // starting at eventratings/new page
        browser.get('http:localhost:3000#!/EventRatings/new');
        // get the Create button element
        var button = element(by.buttonText('Create'));
    });
    describe('When the form is empty', () => {
        it('Should disable the Create button', () => {
            // get the css classes of the button with getAttribute 
            var css = button.getAttribute('class');
            // expect the class to match disabled
            expect(css).toMatch('disabled');
        });
    });
    describe('When specifying the name', () => {
        it('Should enable the Create button', () => {
            // get the element by model, this is an input so we send keystroke with protractor     
            element(by.model('event.name')).sendKeys('A Sample Event')
                // get the css classes of the button with getAttribute 
            var css = button.getAttribute('class');
            // once we type in to the field, we expect the button not to be disabled
            expect(css).not.toMatch('disabled');
        });
    });
    describe('When saving the form', () => {
        it('Should add the event to the list', () => {
            // get the element by model, this is an input so we send keystroke with protractor     
            element(by.model('event.name')).sendKeys('Module 3');
            button.click(); // click the button
            browser.waitForAngular(); // wait for the next page to load
            // find the name element on the new page
            var list = element.all(by.binding('name'));
            // make sure the list has an item whose text is module 3
            expect(list.getText()).toMatch('Module 3');
        });
    });
});