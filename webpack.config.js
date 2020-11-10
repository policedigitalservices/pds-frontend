const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const sass = require("sass");
const webpack = require("webpack");

const outputDir = path.resolve(__dirname, "dist");
const isDev = process.env.NODE_ENV !== "production";
const outputEnv = isDev ? "." + process.env.NODE_ENV : "";

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

module.exports = {
  entry: {
    "styles": ["./src/scss/styles.scss"],
    "scripts": [
      "./src/js/Start.js",
      "./src/scss/styles.scss",
      "./src/js/GroupsTree.js",
      "./src/js/side.js",
      "./src/js/ToggleContent.js",
      "./src/js/ToggleSidebar.js",
      "./src/js/tables.js",
      "./src/js/SeeAll.js",
      "./src/js/showPassword.js",
      "./src/js/menu.js",
      "./src/js/snackbar.js",
      "./src/js/hint-snackbar.js",
      "./src/js/SelectListTags.js",
      "./src/js/linkify-tables.js",
      "./src/js/search.js",
      "./src/js/pages/SelectStaffForMessage.js",
      "./src/js/pages/ComposeStaffMessage.js",
      "./src/js/pages/CourierProfile.js",
      "./src/js/messagesView.js"
    ],
    courier: [
      "./src/scss/overrides/courier.scss"
    ],
    integrity: [
      "./src/scss/overrides/integrity.scss"
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        courierStyles: {
          name: 'courier',
          test: (m, c, entry = 'courier') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        integrityStyles: {
          name: 'integrity',
          test: (m, c, entry = 'integrity') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  output: {
    filename: "js/[name]" + outputEnv + ".js",
    // filename: isDev ? "[name].js" : "[name].[contenthash].js",
    path: outputDir
  },
  devtool: isDev ? "inline-source-map" : false,
  devServer: {
    headers: {
    "Access-Control-Allow-Origin": "*",
    https: true
  },
    contentBase: outputDir,
    compress: isDev ? true : false,
    port: 7264
  },
  plugins: [
    new CleanWebpackPlugin([outputDir]),
    new MiniCssExtractPlugin({
      filename: "css/[name]" + outputEnv + ".css",
    }),
    new CopyWebpackPlugin([
      { from: "./src/img", to: "img" },
      { from: "./src/fonts", to: "fonts" },
      { from: "./src/lib", to: "lib" }
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
      }
    ]
  }
};
