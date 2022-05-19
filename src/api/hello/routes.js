const routes = (handler) => [
  {
    method: 'GET',
    path: '/hello',
    handler: handler.getMessage,
  },
];

module.exports = routes;