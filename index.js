const Hapi = require('@hapi/hapi');

const hello = require('./src/api/hello')

const person = require('./src/api/person')
const PersonService = require('./src/service/PersonService')

// const company = require('./src/api/person')
// const  = require('./src/service/PersonService')

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0'
  });

  const personService = new PersonService()
  plugins = [
    {
      plugin : hello,
    },
    {
      plugin : person,
      options : {
        service : personService,
      }
    },
  ]
  await server.register(plugins);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init()