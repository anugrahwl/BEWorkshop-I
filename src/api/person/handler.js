class PersonHandler {
  constructor(service) {
    this.service = service
    
    this.getAll = this.getAll.bind(this)
    this.post = this.post.bind(this)
  }
  
  getAll(request, h) {
    const person = this.service.getAll()
    return h.response({
      status : "success",
      data : person,
    })
  } 

  post({ payload }, h) {
    if (payload.name.length < 3) {
      const response = h.response({
        status : "failed",
        message: "name should contains 3 character at least",
      })
      response.code(400)
      return response
    }
    
    const newPerson = {
      name : payload.name,
      job : payload.job,
    }
    
    this.service.add(newPerson)
    
    const response = h.response({
      status : "success",
      message : "person added"  
    })
    return response
  }
}

module.exports = PersonHandler;