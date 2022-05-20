class CompanyHandler {
  constructor(service) {
    this.service = service
    
    this.getAll = this.getAll.bind(this)
    this.post = this.post.bind(this)
  }
  
  getAll(request, h) {
    const company = this.service.getAll()
    return h.response({
      status : "success",
      data : company,
    })
  } 

  post({ payload }, h) {
    const newCompany = {
      name : payload.name,
      city : payload.city,
    }
    
    this.service.add(newCompany)
    
    const response = h.response({
      status : "success",
      message : "company added"  
    })
    return response
  }
}

module.exports = CompanyHandler;