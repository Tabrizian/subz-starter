const Vision = require('vision')

exports.register = (server, options, next) => {
  server.register(Vision, () => {
    server.root.views({
      engines: {
        html: require('handlebars'),
      },
      path: __dirname + '/../templates',
      layout: true
    })
    next()
  })
}

exports.register.attributes = {
  name: 'subz-view'
}
