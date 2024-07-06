const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "react-laravel-pagination",
    libraryTarget: "umd",
    globalObject: "this",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Matches .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Matches .css files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Add .jsx extension to resolve array
  },
  externals: [nodeExternals()],
};
