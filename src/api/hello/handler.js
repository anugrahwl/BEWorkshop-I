class HelloHandler {
  constructor() {
    this.getMessage = this.getMessage.bind(this)
  }
  
  getMessage(request, h) {
    return h.response({
      message : "KENTOY",
    })
  }
}

module.exports = HelloHandler;