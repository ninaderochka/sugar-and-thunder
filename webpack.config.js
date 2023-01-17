module.exports = {
  plugins: [
    new Dotenv({
      path: './.env',
      safe: true, // load '../../path/to/other.env.example'
      defaults: true, // load '../../path/to/other.env.defaults'
    }),
  ],
};
