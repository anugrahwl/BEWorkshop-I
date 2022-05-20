const routes = (handler) => [
  {
    method: 'GET',
    path: '/company',
    handler: handler.getAll,
  },
  {
    method: 'POST',
    path: '/company',
    handler: handler.post,
  },
];

module.exports = routes;