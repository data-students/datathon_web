const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['app'],
      filename: 'index.html',
    }),
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
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
};
