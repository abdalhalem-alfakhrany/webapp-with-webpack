var path = require('path');

var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: {
        bundel: path.join(__dirname, 'src/index.js'),
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            title: 'webpack app'
        })
    ]
}