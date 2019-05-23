const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/a.js',
        // vendor: ['react', 'react-dom','react-router', 'react-router-dom','react-loadable']
    },
    output: {
        filename:'[name].js',
        chunkFilename:'[name].chunk.js',// 设置按需加载后的chunk名字
        path: path.join(__dirname, './build'),
        publicPath: './'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
            }
          }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'common',
        },
        runtimeChunk: {
            name: 'runtime',
        }
    },
    devServer: {
        contentBase: './',
        compress: true,
        port: 9000,
        hot: true,
        publicPath: '/',
        historyApiFallback: {
            disableDotRule: true,
        },
    },
    devtool: 'source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            // chunks: ['vendor.dll', 'index'],
            title: 'My index',
            filename: 'index.html',
        }),
    ],
}