const CompanyHandler = require('./handler')
const routes = require('./routes')

module.exports = {
  name: 'company',
  version: '1.0.0',
  register: async (server, { service }) => {
    const companyHandler = new CompanyHandler(service);
    server.route(routes(companyHandler));
  },
};