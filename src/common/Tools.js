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
  }
}
