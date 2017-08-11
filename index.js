const { Server } = require('hapi')

const server = new Server()

server.connection({ port: 3000 });

server.register([
  require('vision')
], err => {
  if (err) return console.log(err);

  server.views({
    engines: {
      html: require('handlebars'),
    },
    path: __dirname + '/templates',
    layout: true
  });

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
