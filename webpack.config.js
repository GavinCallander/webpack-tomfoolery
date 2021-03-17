const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    // application entry point
    entry: './src/index.js',
    // file path and name for deploying the bundled file output
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    // loaders
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
        ],
    },
    // plugin to use html file for serving bundled js plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    
};