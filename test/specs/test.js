var assert = require('assert');

describe('webdriver.io page', function () {

    it('should have the right title', function () {
        browser.url('/');
        browser.click('=API');
        var title = browser.getTitle();
        assert.equal(title, "WebdriverIO - API Docs")
    });
});