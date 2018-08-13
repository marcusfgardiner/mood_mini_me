'use strict'

const path = require('path');

module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    }
};

const ExtractPlugin = require('extract-text-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
    devtool: 'eval',
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        filename: 'bundle-[hash].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },
    plugins: [
        new HTMLPlugin(),
        new ExtractPlugin('bundle-[hash].css'),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
            },
        ]
    }
}