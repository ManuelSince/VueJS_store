/**
 * Mocking client-server processing
 */
const jsonData = require('./companies.json')

console.log(jsonData.length)

const _companies = jsonData

export default {
  getCompanies (cb) {
    setTimeout(() => cb(_companies), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  }
}
