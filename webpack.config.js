const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        noParse: /jquery|lodash/,
        rules: [
            {
                test: /\.(sc|c|sa)ss$/,  //正则
                use: [{
                    loader: "style-loader"
                  }, {
                    loader: "css-loader"
                  }, {
                    loader: "sass-loader"
                  }]   //从后往前去应用到模块上
            }
        ]
    }
};

