const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    // publicPath: './public/',
    filename: 'bundle.js'
  },
  resolve:{
    modules: [path.resolve(__dirname, "app"), "node_modules"],
    alias: {
      TodoItem: path.resolve(__dirname, 'app/components/TodoItem.jsx'),
      addItem: path.resolve(__dirname, 'app/components/addItem.jsx'),
      //css files
      indexcss: path.resolve(__dirname, 'app/css/index.css'),
      todoItem: path.resolve(__dirname, 'app/css/todoItem.css'),
      addItemcss: path.resolve(__dirname, 'app/css/addItem.css')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', ["es2015", { "modules": false }], 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loader:  'style-loader!css-loader'
      }
    ]
  }
};
