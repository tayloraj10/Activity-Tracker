module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel-loader']
      }
    ]
  }
};
