/**
 * Mocking client-server processing if axios call return !200 || !201
 */
const companiesJson = require('./companies.json')
const fortune500Json = require('./companies-Top-500-byYears.json')
const _companies = companiesJson
const _fortune500 = fortune500Json
const _user = { lastname: 'since', firstname: 'manuel', email: 'manuelsince@gmail.com', password: '1234' }

const isUser = (user) => user.email === _user.email && user.password === _user.password

export default {
  getCompanies (cb) {
    setTimeout(() => cb(_companies), 100)
  },
  getFortune500 (cb) {
    setTimeout(() => cb(_fortune500), 100)
  },
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  },
  login (payload, cb) {
    setTimeout(() => cb(isUser(payload) ? _user : null), 100)
  }
}
