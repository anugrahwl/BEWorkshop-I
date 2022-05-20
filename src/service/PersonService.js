const person = require('./../model/person.js')

class PersonService {

  add(p) {
    person.push(p)
  }

  getAll() {
    return person
  }
  
}

module.exports = PersonService