const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
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

