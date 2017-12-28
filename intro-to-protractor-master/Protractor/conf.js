exports config = {
    seleniumAddress: 'http://localhost:4444/wed/hub', //selenium address
    specs: ['./ratings/event.list.item.spec.js'],

    onPrepare: function() {
        browser.driver.manage().window().setPosition(0, 0); // upper left corner
        browser.driver.manage().window().setSize(1280, 720); // resolution 
    }

}