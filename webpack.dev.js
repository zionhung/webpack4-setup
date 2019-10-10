const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

let devConfig = {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {   //css样式处理
                test: /\.(sc|c|sa)ss$/,  //正则
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        sourceMap: true,
                        plugins: loader => [
                            require('autoprefixer')() // 添加插件
                        ]
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]   //从后往前去应用到模块上
            }]
    }
};

module.exports = merge(common, devConfig);
