exports config = {
    seleniumAddress: 'http://localhost:4444/wed/hub', //selenium address

    // for all tests
    specs: ['./**/*.spec.js'], // go a folder up, wildcard any folder/ any file that ends with spec

    // for test suites
    suites: {
        smoke: './smoke/*.spec.js', // smoke tests
        full: './**/*.spec.js' // for all tests
    },

    onPrepare: function() {
        browser.driver.manage().window().setPosition(0, 0); // upper left corner
        browser.driver.manage().window().setSize(1280, 720); // resolution 
    }

}