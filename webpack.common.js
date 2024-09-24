const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')
const zlib = require("zlib");

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
            filename: "[path][base].br",
            algorithm: "brotliCompress",
            test: /\.(js|css|html|svg)$/,
            compressionOptions: {
                params: {
                [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
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