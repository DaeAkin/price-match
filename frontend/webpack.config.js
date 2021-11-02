const path = require('path');
const webpack = require('webpack');

const {  CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    resolve: {
        alias: {
            jquery: path.resolve(__dirname, 'src/js/jquery-1.12.4.js'),
            jqueryNew: path.resolve(__dirname, 'src/js/jquery-2.2.4.js'),
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: path.join(__dirname, 'src/index.html'),
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            jQueryNew: 'jqueryNew',
            Popper: 'popper.js'
        }),
    ],
};
