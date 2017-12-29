"use strict";

describe('Creating New Event', () => {
    describe('When clicking the button', () => {
        it('Should route to the new event page', () => {
            browser.get('http:localhost:3000#!/EventRatings'); // go to the initial page
            // find the New Event button and click it    
            element(by.buttonText('New Event')).click();
            // make sure browser goes to the correct page
            expect(browser.getCurrentUrl()).toMatch('EventRatings/new');
        });
    });
});