const { merge } = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8000,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  output: {
    publicPath: "http://localhost:8000/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@http://localhost:8001/remoteEntry.js`,
        auth: `auth@http://localhost:8002/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
