const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',   //入口
    resolve: {  //解析resolve.alias配置
        alias: {
            extensions:[".js", ".vue", ".json"],
            '@': path.resolve(__dirname, 'src/')
        }
    },
    module: {
        rules: [
            {   //JS eslint 校验然后 babel 转码
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,  // 加快编译速度，不包含node_modules文件夹内容
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }, {
                    loader: "eslint-loader",
                    options: {
                        // eslint options (if necessary)
                        fix: true
                    }
                }]
            }, {   //处理图片的rule-1
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                include: [path.resolve(__dirname, 'src/')],
                use: [
                    {
                        loader: 'url-loader', // 根据图片大小，把图片优化成base64
                        options: {
                            limit: 10000
                        }
                    },
                ]
            }, { //处理图片的rule-2
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                    },
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: '65-90',
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    webp: {
                        quality: 75
                    }
                }
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'GOOGLE PRACTICE', // 默认值：Webpack App
            filename: 'main.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, 'src/main.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,   //是否移除注释
                removeAttributeQuotes: true // 是否移除属性的引号
            }
        }),
        new CleanWebpackPlugin(['dist'])   //清理dist目录
    ]
};


