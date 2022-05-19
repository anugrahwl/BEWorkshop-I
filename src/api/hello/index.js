const HelloHandler = require('./handler')
const routes = require('./routes')

module.exports = {
  name: 'hello',
  version: '1.0.0',
  register: async (server) => {
    const helloHandler = new HelloHandler();
    server.route(routes(helloHandler));
  },
};