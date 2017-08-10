

module.exports.register = function(server, config, next) {
  server.register(require('vision'), err => {

    if(err) console.log(err)

    server.views({
      engines: {
        html: require('handlebars'),
      },
      path: __dirname + '/templates',
      layout: true
    });

    next()
  })
}

module.exports.register.attributes = {
  name: 'subz-vision',
};
