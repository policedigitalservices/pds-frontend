const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const sass = require("sass");
const webpack = require("webpack");

const outputDir = path.resolve(__dirname, "");
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    "dist/css/styles": ["./src/scss/styles.scss"],
    "dist/js/scripts": [
      "./src/js/GroupsTree.js",
      "./src/js/side.js",
      "./src/js/ToggleContent.js",
      "./src/js/ToggleSidebar.js",
      "./src/js/tables.js",
      "./src/js/SeeAll.js"
    ]
  },
  output: {
    filename: "[name].js",
    // filename: isDev ? "[name].js" : "[name].[contenthash].js",
    path: outputDir
  },
  devtool: isDev ? "inline-source-map" : false,
  devServer: {
    contentBase: outputDir,
    compress: true,
    port: 7264
  },
  plugins: [
    new CleanWebpackPlugin([outputDir]),
    new MiniCssExtractPlugin({
      filename: "[name].css"
      // filename: isDev ? "[name].css" : "[name].[contenthash].css"
    }),
    new CopyWebpackPlugin([
      { from: "./src/img", to: "dist/img" },
      { from: "./src/fonts", to: "dist/fonts" },
      { from: "./src/lib", to: "dist/lib" }
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: !!isDev
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
              sourceMap: !!isDev
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: "file-loader"
      }
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   loader: "file-loader"
      // }
    ]
  }
};
