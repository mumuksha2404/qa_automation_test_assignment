module.exports = {
  before: function (browser) {
    // Maximize the browser window
    browser.maximizeWindow()
  },
  'Test Telus Search': function (browser) {
    const telus = browser.page.telus()

    // Navigate to the Telus.com page
    telus.navigate()

    // Click on the 'I acknowledge' link if present
    telus.isPresent('@acknowledgeLink', function (isPresent) {
      if (isPresent.value) {
        telus.click('@acknowledgeLink')
      }
    })

    // Search 'internet' and click on third search suggestion
    telus.waitForElementVisible('@searchButton')
      .click('@searchButton')
      .waitForElementVisible('@searchBar')
      .setValue('@searchBar', 'internet')
      .waitForElementVisible('@thirdSearchSuggestion')
      .click('@thirdSearchSuggestion')
  },
  'Test Search Result Page': function (browser) {
    const telus = browser.page.telus()

    // Match the search bar text and heading
    telus.waitForElementVisible('@resultSearchBar')
    const result = telus.element('@resultSearchBar').getValue()
    result.then((text) => {
      telus.element('@searchPageHeading').getText().assert.equals('Search results for “' + text + '”')
    })

    // Validate if 'All' tab is present and selected
    telus.waitForElementVisible('@tabAll')
    telus.expect.element('@tabAll').to.have.property('ariaSelected').equal('true')

    // Validate if Articles list has 6 links
    telus.expect.elements('@articlesList').count.to.equal(6)

    // Scroll to the first article and click on it
    telus.getLocationInView('@firstArticle')
    telus.element('@firstArticle').click('@firstArticle')
  }
}
