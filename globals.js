const chromedriver = require('chromedriver')

module.exports = {
  before (done) {
    chromedriver.start()
    console.log('Started chromedriver')
    done()
  },

  after (done) {
    chromedriver.stop()
    console.log('Stopped chromedriver')
    done()
  }
}
