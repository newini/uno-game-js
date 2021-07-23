var path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: "./src/index.js", // string | object | array
  output: {
    path: path.resolve(__dirname, "js"), // string (default)
    filename: "uno_game.js", // string (default)
    //publicPath: "/assets/", // string
    uniqueName: "uno-game", // (defaults to package.json "name")
    // unique name for this build to avoid conflicts with other builds in the same HTML
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
        //use: [
        //  {
        //    loader: 'file-loader',
        //    options: {
        //      name: '[name].[ext]',
        //      outputPath : 'images/',
        //    }
        //  },
        //],
      },
    ],
  },
};
