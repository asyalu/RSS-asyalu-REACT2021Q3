const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const esLintPlugin = (isDev) => (isDev ? [] : [new ESLintPlugin({ extensions: ["ts", "js"] })]);
module.exports = ({ development }) => ({
  mode: development ? "development" : "production",
  devtool: development ? "inline-source-map" : false,
  entry: "./src/index.tsx",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.bundle\.ts$/,
        use: {
          loader: "bundle-loader",
          options: {
            name: "[name]",
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|gif|jpg)$/,
        exclude: /fonts/,
        loader: "file-loader",
      },
      {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        loader: "file-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    ...esLintPlugin(development),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new HtmlWebpackPlugin({ template: "./index.html", favicon: "./favicon.ico" }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "public" }, { from: "public/audio", to: "public/audio" }],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
});