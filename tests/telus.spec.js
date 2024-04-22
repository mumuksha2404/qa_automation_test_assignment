module.exports = {
  before: function (browser) {
    browser.maximizeWindow()
  },
  'Test Telus Search': function (browser) {
    const telus = browser.page.telus()

    telus.navigate()
      .assert.visible('@searchButton')
      .click('@searchButton')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'internet')
      .assert.visible('@thirdSearchSuggestion')
      .click('@thirdSearchSuggestion')
  },
  'Test Search Result Page': function (browser) {
    const telus = browser.page.telus()

    telus.assert.visible('@resultSearchBar')
    const result = telus.element('@resultSearchBar').getValue()
    result.then((text) => {
      telus.element('@searchPageHeading').getText().assert.equals('Search results for “' + text + '”')
    })
    telus.assert.visible('@tabAll')
    telus.expect.element('@tabAll').to.have.property('ariaSelected').equal('true')

    telus.expect.elements('@articlesList').count.to.equal(6)
    telus.element('@firstArticle').click()
    // .waitForElementVisible('')
  }
}
