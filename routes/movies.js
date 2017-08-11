const axios = require('axios')
const search = {
  method: 'POST',
  path: '/movies/search',
  handler: async (req, reply) => {
    let results = {}
    try {
      results = await axios.get('https://subz.now.sh/imdb/search', {
        params: {
          query: req.payload.movie
        }
      })
    } catch (e) {
      console.log(e)
    }


    console.log(results.data.results)
    reply.view('movies/search_results', {
      movies: results.data.results
    })
  }
}

const searchView = {
  method: 'GET',
  path: '/movies/search',
  handler: (req, reply) => {
    reply.view('movies/search', {
      title: 'Movie Search'
    });
  }
}

exports.register = (server, options, next) => {
  server.route([search, searchView])
  next()
}

exports.register.attributes = {
  name: 'subz-routes-movies'
}

