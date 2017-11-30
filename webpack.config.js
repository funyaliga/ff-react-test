var webpack = require("webpack")
var path = require("path")
module.exports = { 
    entry: "./src/entry.js", // 项目打包入口文件
    output: {
        path: __dirname,
        filename: "./build/bundle.js", // 项目打包出口文件
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};
