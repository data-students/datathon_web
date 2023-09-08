const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
    legal: './src/legal.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      template: './src/legal.html',
      chunks: ['legal'],
      filename: 'legal.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/privacy.html',
      chunks: ['legal'],
      filename: 'privacy.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/terms.html',
      chunks: ['legal'],
      filename: 'terms.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
    new FaviconsWebpackPlugin({
      logo: './public/img/logo-datathon.png',
      logoMaskable: './public/img/logo-datathon.png',
      prefix: '/',
      favicons: {
        appName: 'datathon.cat',
        developerURL: 'https://github.com/data-students',
        start_url: '/',
        display: 'standalone',
        theme_color: '#468f8b',
        background: '#fff',
        icons: {
          yandex: false,
        },
      },
    }),
  ],
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
};
