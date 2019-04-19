var HtmlWebpackPlugin = require('html-webpack-plugin');
var package = require('./package.json');
var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: {
        // vendor: Object.keys(package.dependencies) || {},
        app: "./src/app.js",
    }, 
    output: {
        path: path.join(__dirname, "../dist/"),
        filename: "[name].bundle.js",
    },
    watch:true,
    resolve: { extensions: [".js", ".ts"] },
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 9000
    },
    module : {
        rules : [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            chunks: ['vendor', 'shared', 'app'],
            path: path.join(__dirname, "../dist/"),
            filename: 'index.html' 
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Settings',
            template: './src/index.html',
            chunks: ['vendor', 'shared', 'settings'],
            path: path.join(__dirname, "../dist/"),
            filename: 'settings.html'
        }),
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
   ]

}