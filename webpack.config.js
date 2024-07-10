const path = require('path');

module.exports = {
  mode: 'development', // Set the mode to 'development'
  devtool: 'cheap-module-source-map',
  entry: './public/js/index.js', // Entry point for your JavaScript files
  output: {
    filename: 'bundle.js', // Name of the output file
    path: path.resolve(__dirname, 'public/js'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to all JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  watchOptions: {
    ignored: /node_modules/, // Exclude node_modules from being watched
  },
};
