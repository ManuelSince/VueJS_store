// const axios = require('axios')
const axios = {}
class AxiosClient {
    constructor(base_URL, port, user='', pwd='') {
        this.base_URL = base_URL
        this.port = port
        this.user = user    
        this.password = pwd
    }
    create_URL() {
        return `${this.base_URL}:${port}`
    }
    stringifyParams(params) {
        let list= []
        Object.keys(params).forEach((key) => {
            list.push(`${key}=${encodeURIComponent(params[key])}`)
        })
        return `Filters=${list.join('&')}`
    }
    get(path, params) {
        res = this.get(`${this.create_URL}/${path}?${this.stringifyParams(params)}`)
        return this.get(`${this.create_URL}/${path}?`)
    }
}
// testing the axiosclient :
a = new AxiosClient('http://wwww.macguyver', 3006, '', '')
const filters = {name: 'Tesla', earning: 40999, office : 'london'}
const res = a.get('companies', filters)
console.log(res)

