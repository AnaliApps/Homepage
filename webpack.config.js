const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    entry:{
        "bundle":'./src/index.js',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            inject:true,
            chunks:["bundle"],
            filename:"index.html"
        }),
        new CompressionPlugin({
            algorithm:"gzip"
        }),
    ],
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type:'asset/resource',
            },
        ],
    },
    mode: 'development',
    optimization:{
        usedExports:true,
    },
};