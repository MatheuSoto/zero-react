const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

// Change variables
const productionHost = 'https://zero-react.vercel.app/'
const nameApp = 'Zero Start'

const browserConfig = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devServer: {
    open: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: '/build/media/[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, '/src/assets/static/robots.txt'), to: path.join(__dirname, '/build') }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'build/css/main.css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/assets/static/index.html')
    })
  ].filter(Boolean)
}

module.exports = browserConfig
