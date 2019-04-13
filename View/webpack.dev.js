const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { spawn } = require('child_process');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000/',
        'webpack/hot/only-dev-server',
        '@babel/polyfill',
        './src/index',
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        inline: true,
        port: 3000,
        historyApiFallback: true,
        after: function () {
            let remoteDev = spawn('npm', ['run', 'remotedev']);
            remoteDev.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });
            remoteDev.stderr.on('data', (data) => {
                console.log(`stderr: ${data}`);
            });
            remoteDev.on('close', (code) => {
                console.log(`child process exited with code ${code}`);
            });
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
