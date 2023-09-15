const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const title = 'Datathon FME';
const description = 'Join us in Barcelona on November 11-12 for Datathon FME – sign up now!';
const image = 'https://datathon.cat/img/promo.jpeg';
const metaTags = {
  'description': { name: 'description', content: description },
  'keyword': { name: 'keywords', content: 'Datathon FME,datathon.cat,datathon,Barcelona,data,data science,UPC,FME,Catalunya,Catalonia,hackathon,ML,machine learning,AI,artificial intelligence,November,11-12 November' },
  'og:title': { property: 'og:title', content: title },
  'og:description': { property: 'og:description', content: description },
  'og:type': { property: 'og:type', content: 'website' },
  'og:url': { property: 'og:url', content: 'https://datathon.cat' },
  'og:image': { property: 'og:image', content: image },
  'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
  'twitter:title': { name: 'twitter:title', content: title },
  'twitter:description': { name: 'twitter:description', content: description },
  'twitter:image': { name: 'twitter:image', content: image }
}

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
      meta: metaTags,
    }),
    new HtmlWebpackPlugin({
      template: './src/legal/legal.html',
      chunks: ['legal'],
      filename: 'legal.html',
      meta: metaTags,
    }),
    new HtmlWebpackPlugin({
      template: './src/legal/privacy.html',
      chunks: ['legal'],
      filename: 'privacy.html',
      meta: metaTags,
    }),
    new HtmlWebpackPlugin({
      template: './src/legal/terms.html',
      chunks: ['legal'],
      filename: 'terms.html',
      meta: metaTags,
    }),
    new HtmlWebpackPlugin({
      template: './src/generator/index.html',
      chunks: ['generator'],
      filename: 'generator.html',
      meta: metaTags,
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
    new FaviconsWebpackPlugin({
      logo: './public/img/logo-datathon.webp',
      logoMaskable: './public/img/logo-datathon.webp',
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
