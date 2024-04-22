module.exports = {
  url: 'https://telus.com',
  elements: {
    searchButton: {
      selector: 'button[id=search-button]'
    },
    searchBar: {
      selector: '//*[@id="ge-search-input"]/span/div/div/div/input',
      locateStrategy: 'xpath'
    },
    thirdSearchSuggestion: {
      selector: '//ul[@class="sc-lizKOf eCHhrT"]/li[3]/a',
      locateStrategy: 'xpath'
    },
    resultSearchBar: {
      selector: 'input[placeholder=Search]'
    },
    searchPageHeading: {
      selector: '//*[@id="app"]/div/div/div[1]/div[2]/div',
      locateStrategy: 'xpath'
    },
    tabAll: {
      selector: '//*[@id="all"]',
      locateStrategy: 'xpath'
    },
    articlesList: {
      selector: '//*[@id="app"]/div/div/div[2]/div[2]/div/div[2]/div[2]/ul/li',
      locateStrategy: 'xpath'
    },
    firstArticle: {
      selector: '//*[@id="app"]/div/div/div[2]/div[2]/div/div[2]/div[2]/ul/li[1]/a',
      locateStrategy: 'xpath'
    }
  }
}
