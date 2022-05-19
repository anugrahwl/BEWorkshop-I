const Hapi = require('@hapi/hapi');
const hello = require('./src/api/hello')

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  await server.register(hello);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init()