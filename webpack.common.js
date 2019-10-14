const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',   //入口
    resolve: {  //解析resolve.alias配置
        alias: {   //配置路径别名 看index.js如何引用index.js就知道了
            '@': path.resolve(__dirname, 'src/')
        },
        extensions: [".js", ".vue", ".json"]  //配置模块名字可以省略的后缀名
    },
    externals: {   //外部扩展 设置从输出bundle中排除依赖
        jquery: 'jQuery',
        lodash: '_'
    },
    module: {
        rules: [
            {   //JS eslint 校验然后 babel 转码
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,  // 加快编译速度，不包含node_modules文件夹内容
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }, {   //处理图片的rule-1
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                include: [path.resolve(__dirname, 'src/')],
                use: [
                    {
                        loader: 'url-loader', // 根据图片大小，把图片优化成base64
                        options: {
                            limit: 10000
                        }
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
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'GOOGLE PRACTICE', // 默认值：Webpack App
            filename: 'main.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, 'src/main.html'),
            minify: {
                collapseWhitespace: true,   //是否清除空行
                removeComments: true,   //是否移除注释
                removeAttributeQuotes: true // 是否移除属性的引号
            }
        }),
        new CleanWebpackPlugin(['dist'])   //清理dist目录
    ]
};


