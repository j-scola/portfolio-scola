const path = require('path');
const webpack = require('webpack');

const isProd = false;

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: './src/index.jsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js'),
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'public'),
  //   open: true,
  //   compress: true,
  //   hot: true,
  //   port: 9000,
  // },
  plugins: [
    /* ... */
    // https://www.taniarascia.com/how-to-use-webpack/
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: isProd ? false : 'eval-source-map',
};
