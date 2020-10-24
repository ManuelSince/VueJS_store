// const axios = require('axios')

class AxiosClient {
  constructor (baseURL, port, user = '', pwd = '') {
    this.base_URL = baseURL
    this.port = port
    this.user = user
    this.password = pwd
  }

  createURL () {
    return `${this.base_URL}:${this.port}`
  }

  stringifyParams (params) {
    const list = []
    Object.keys(params).forEach((key) => {
      list.push(`${key}=${encodeURIComponent(params[key])}`)
    })
    return `Filters=${list.join('&')}`
  }

  get (path, params) {
    // res = this.get(`${this.create_URL}/${path}?${this.stringifyParams(params)}`)
    return this.get(`${this.create_URL}/${path}?`)
  }
}
// testing the axiosclient :
const a = new AxiosClient('http://wwww.macguyver', 3006, '', '')
const filters = {name: 'Tesla', earning: 40999, office: 'london'}
const res = a.get('companies', filters)
console.log(res)

