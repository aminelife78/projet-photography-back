module.exports = ({ env }) => ({
  proxy: true,
  url: env('https://mysterious-badlands-99027.herokuapp.com'),
  app: {
    keys: env.array('APP_KEYS')
  },
})
