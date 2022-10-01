const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/index.js'
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 3000, 
    open: ['/login.html', '/password.html']
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/login.html',
      inject: true,
      chunks: ['index'],
      filename: 'login.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/password.html',
      inject: true,
      chunks: ['index'],
      filename: 'password.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.png$/,
      	type: 'asset/resource',
        generator: {
          filename : './img/[name][ext]',
        }
      }
    ]
  }

};

