const PersonHandler = require('./handler')
const routes = require('./routes')

module.exports = {
  name: 'person',
  version: '1.0.0',
  register: async (server, { service }) => {
    const personHandler = new PersonHandler(service);
    server.route(routes(personHandler));
  },
};