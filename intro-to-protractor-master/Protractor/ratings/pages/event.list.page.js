"use strict";
module.exports = function() {
    this.names = element.all(by.binding('name'));

    this.getNameTexts = function() { //getNameTexts() can replace getText
        return this.names.getText();
    };
}