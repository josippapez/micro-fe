const webpack = require("webpack");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const {
  DuplicateReporterPlugin,
} = require("duplicate-dependencies-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv");
const Dotenv = require("dotenv-webpack");

const devMode = process.env.REACT_APP_NODE_ENV !== "production";

console.log("devMode", devMode);

const deps = require("./package.json").dependencies;

const env = dotenv.config({
  path: path.resolve(__dirname, ".env." + process.env.REACT_APP_NODE_ENV),
}).parsed;

console.log(env);

module.exports = () => {
  return {
    entry: "./src/index",
    devServer: {
      static: "./public",
      port: 8082,
      liveReload: true,
      hot: true,
      historyApiFallback: true,
      allowedHosts: ["localhost", "93.143.222.48"],
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
        "Access-Control-Allow-Private-Network": "*",
      },
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, ".env." + process.env.REACT_APP_NODE_ENV),
      }),
      new ModuleFederationPlugin({
        name: "app",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/App",
        },
        remotes: {
          home: `home@${env.REACT_APP_ROOT_APP_LINK}/remoteEntry.js`,
        },
        shared: {
          ...deps,
          luxon: {
            eager: true,
            singleton: true,
            version: "^3.0.1",
          },
          react: {
            eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            eager: true,
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: path.resolve("public", "index.html"),
        favicon: path.resolve("public", "favicon.ico"),
        filename: "index.html",
        manifest: "./public/manifest.json",
        inject: true,
        minify: devMode
          ? {}
          : {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            },
      }),
      // new BundleAnalyzerPlugin({
      //   analyzerMode: "server",
      //   openAnalyzer: false,
      // }),
      new DuplicateReporterPlugin(),
    ].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
  };
};
