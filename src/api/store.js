/**
 * Mocking client-server processing if axios call return !200 || !201
 */
const jsonData = require('./companies.json')
const _companies = jsonData
const _user = { lastname: 'since', firstname: 'manuel', email: 'manuelsince@gmail.com', password: '1234' }

const isUser = (user) => user.email === _user.email && user.password === _user.password

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
  },
  login (payload, cb) {
    setTimeout(() => cb(isUser(payload) ? _user : null), 100)
  }
}
