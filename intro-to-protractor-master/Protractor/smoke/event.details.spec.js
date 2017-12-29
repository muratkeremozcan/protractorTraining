"use strict";
describe('Event Details', () => {
    describe('Ratings Block', () => {
        beforeEach(() => {
            // browse to even details page for a specific event (even id can change, use your own)    
            browser.get('http://localhost:3000/#!/EventRatings/540d090f92ce44212');
        })

        it('Should show ratings', () => {
            // the page has a list of ratings, find all of them. 
            var ratings = element.all(by.repeater('r in eventDetails.ratings'));
            // ratings is now a collection of everything that has a repeater element 'r in eventDetails.ratings'
            expect(ratings.count()).toBe(6);
        });

        it('Should have a description', () => {
            // in ratings get the description column  (you could get ID, numerical rating , all are columns)  
            var descriptions = element.all(by.repeater('r in eventDetails.ratings').column('description'));
            // veriy there is a description 'waste of time
            expect(descriptions.getText()).toMatch('Waste of time');
        })
    });
});