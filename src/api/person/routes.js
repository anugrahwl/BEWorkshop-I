const routes = (handler) => [
  {
    method: 'GET',
    path: '/person',
    handler: handler.getAll,
  },
  {
    method: 'POST',
    path: '/person',
    handler: handler.post,
  },
];

module.exports = routes;