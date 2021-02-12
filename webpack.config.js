const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    open: true,
    compress: true,
    hot: true,
    port: 9000,
  },
  plugins: [
    /* ... */
    // https://www.taniarascia.com/how-to-use-webpack/
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
};
