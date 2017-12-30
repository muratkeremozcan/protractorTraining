"use strict";

module.exports = function() {
    // the page exports a name property      
    this.name = element(by.model('event.name'));
    // exports a button property
    this.button = element(by.buttonText('Create'));
    // exports a getButtonClass function
    this.getbuttonClasses = function() {
        return this.button.getAttribute('class');
    };
    this.setName = function(name) { // setName can replace name.sendKeys
        this.name.sendKeys(name);
    };
    this.saveData = function() { // saveData can replace button.click
        this.button.click();
    };

};