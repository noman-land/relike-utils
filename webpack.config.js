const path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: 'relike-utils',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
      },
    ],
  },
};
