/* eslint-disable */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const path = require("path");

const PUBLIC_FOLDER_PATH = path.resolve(__dirname, "./public");

module.exports = function (env, argv) {
  const isEnvDevelopment = argv.mode === "development";
  const isEnvProduction = argv.mode === "production";

  return {
    entry: `${path.resolve(__dirname, "./src")}/index.tsx`,
    output: {
      filename: "[name].[contenthash:8].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${PUBLIC_FOLDER_PATH}/index.html`,
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: isEnvProduction
            ? JSON.stringify("production")
            : JSON.stringify("development"),
          PUBLIC_URL: JSON.stringify(""),
        },
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "public",
            filter: async (resourcePath) => {
              if (resourcePath === `${PUBLIC_FOLDER_PATH}/index.html`) {
                return false;
              }
              return true;
            },
          },
        ],
      }),
      isEnvProduction &&
        new InjectManifest({
          swSrc: "./src/service-worker.ts",
          swDest: "service-worker.js",
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        }),
    ].filter(Boolean),
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
    },
  };
};
