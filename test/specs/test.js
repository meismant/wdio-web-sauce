let assert = require('assert');

describe('webdriver.io page', function () {

    it('should have the right title', function () {
        browser.url('/');
        let title = browser.getTitle();
        assert.equal(title, "WebdriverIO - WebDriver bindings for Node.js")
    });

    describe('Api Page', function () {
        it('should have a link to it from homepage', function () {
            browser.url("/");
            let hasApiLink = browser.isExisting('=API');
            assert(hasApiLink)
        });

        it('should take you to the API page', function () {
            browser.url("/");
            browser.click('=API');
            let title = browser.getTitle();
            assert.equal(title, "WebdriverIO - API Docs")

            // browser.debug();
        });

        it('should filter search results', function () {
            browser.url("/api.html");
            browser.setValue('[name="search"]', "debug");
            browser.saveScreenshot("screen.png")
        })
    })
});