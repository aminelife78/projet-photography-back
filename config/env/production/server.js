module.exports = ({ env }) => ({
  proxy: true,
  url: env('https://polar-garden-88436.herokuapp.com'),
  app: {
    keys: env.array('APP_KEYS')
  },
})
