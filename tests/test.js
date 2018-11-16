module.exports = {
  "Demo test": function(browser) {
    const timeout = 10000;
    browser.url("http://127.0.0.1:8080");

    browser.waitForElementVisible("#button1", timeout);
    browser.click("#button1");

    browser.waitForElementVisible("#button2", timeout);
    browser.click("#button2");

    browser.waitForElementVisible("#text", timeout);
  },

  after: browser => browser.end()
};
