const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index/script.js',
    legal: './src/legal/script.js',
    generator: './src/generator/script.js'
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
      template: './src/index/index.html',
      chunks: ['app'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/legal/legal.html',
      chunks: ['legal'],
      filename: 'legal.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/legal/privacy.html',
      chunks: ['legal'],
      filename: 'privacy.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/legal/terms.html',
      chunks: ['legal'],
      filename: 'terms.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/generator/index.html',
      chunks: ['generator'],
      filename: 'generator.html',
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
