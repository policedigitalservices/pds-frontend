const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const sass = require("sass");
const webpack = require("webpack");

const outputDir = path.resolve(__dirname, "");
const isDev = process.env.NODE_ENV !== "production";
const outputEnv = isDev ? "." + process.env.NODE_ENV : "";

module.exports = {
  entry: {
    "dist/css/styles": ["./src/scss/styles.scss"],
    "dist/js/scripts": [
      "./src/js/Start.js",
      "./src/js/GroupsTree.js",
      "./src/js/side.js",
      "./src/js/ToggleContent.js",
      "./src/js/ToggleSidebar.js",
      "./src/js/tables.js",
      "./src/js/SeeAll.js",
      "./src/js/menu.js",
      "./src/js/snackbar.js",
      "./src/js/hint-snackbar.js",
      "./src/js/SelectListTags.js",
      "./src/js/linkify-tables.js",
      "./src/js/search.js",
      "./src/js/pages/AddGroup.js",
      "./src/js/pages/SelectStaffForMessage.js",
      "./src/js/pages/ComposeStaffMessage.js",
      "./src/js/pages/CourierProfile.js"
    ]
  },
  output: {
    filename: "[name]" + outputEnv + ".js",
    // filename: isDev ? "[name].js" : "[name].[contenthash].js",
    path: outputDir
  },
  devtool: isDev ? "inline-source-map" : false,
  devServer: {
    contentBase: outputDir,
    compress: isDev ? true : false,
    port: 7264
  },
  plugins: [
    new CleanWebpackPlugin([outputDir]),
    new MiniCssExtractPlugin({
      filename: "[name]" + outputEnv + ".css"
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
              sourceMap: !!isDev,

            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: !!isDev,
              minimize: !!isDev

            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
              sourceMap: !!isDev,
              minimize: !!isDev,
              outputStyle: isDev ? "expanded" : "compressed"
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
