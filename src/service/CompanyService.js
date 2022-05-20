const company = require('./../model/company.js')

class PersonService {

  add(c) {
    company.push(c)
  }

  getAll() {
    return company
  }
  
}

module.exports = CompanyService