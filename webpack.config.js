const path = require("path");

module.exports = {
  entry: './index.js',
  outputh: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  {
    module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader'},
        { test: /\.(css)$/, use: ['style-loader','style-loader'] },
         
      ]
    }
  },
  mode: 'development'
};
