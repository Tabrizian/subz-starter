const index = {
  method: 'GET',
  path: '/common',
  handler: (req, reply) => {
    reply.view('index', {
      title: 'Index'
    });
  }
}

exports.register = (server, options, next) => {
  server.route(index)
  next()
}

exports.register.attributes = {
  name: 'subz-routes-common'
}

