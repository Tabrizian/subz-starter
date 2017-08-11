const { Server } = require('hapi')
const { view } = require('./lib')
const routes = require('./routes')

const server = new Server()

server.connection({ port: 3000 });

server.register([
  view,
], err => {

  if (err) console.log(err)

  server.register(routes, (err) => {
    if (err) console.log(err)

    server.start((err) => {
      console.log('Server started at: ' + server.info.uri);
    });
  })

})

