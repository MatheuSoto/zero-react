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

const nodeEnv = process.env.NODE_ENV.trim()
console.log(nodeEnv)

const browserConfig = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
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
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve('src'),
      '@hooks': path.resolve('src/helpers/hooks'),
      '@helpers': path.resolve('src/helpers')
    }
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
      template: path.join(__dirname, nodeEnv === 'production' ? '/src/assets/static/index.production.html' : '/src/assets/static/index.development.html')
    }),
    nodeEnv === 'production' ? new WebpackPwaManifestPlugin({
      name: nameApp,
      ios: true,
      inject: true,
      orientation: 'portrait',
      display: 'standalone',
      start_url: productionHost + 'index.html',
      shortname: nameApp,
      description: nameApp,
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: path.resolve('src/assets/img/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('icons', 'ios'),
          ios: true
        }
      ]
    }) : false,
    nodeEnv === 'production' ? new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(productionHost),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp(productionHost),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    }) : false,
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ].filter(Boolean)
}

module.exports = browserConfig
