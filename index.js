const { Server } = require('hapi')
const { view } = require('./lib')
const server = new Server()

server.connection({ port: 3000 });

server.register([
  view
], err => {

  server.route({ method: 'GET', path: '/', handler: handler });

  server.start((err) => {
    console.log('Server started at: ' + server.info.uri);
  });
})


const handler = (request, reply) => {

  reply.view('index', {
    title: 'Index'
  });

};
