export default {
  sortedData: function (objectlist, field, desc) {
    if (desc) {
      return objectlist.sort((a, b) => {
        if (a[field] > b[field]) {
          return 1
        } else if (a[field] < b[field]) {
          return -1
        } else {
          return 0
        }
      })
    } else {
      return objectlist.sort((a, b) => {
        if (a[field] > b[field]) {
          return -1
        } else if (a[field] < b[field]) {
          return 1
        } else {
          return 0
        }
      })
    }
  },
  objectIterator: function (object) {
    return false
  },
  filtersCleaner: function (filters) {
    Object.keys(filters).forEach(key => {
      return filters[key] !== '' || typeof filters[key] !== 'object'
    })
  },
  compose: (...fns) => (x) => {
    return fns.rediuce((acc, f) => {
      return f(acc)
    }, x)
  }
}
