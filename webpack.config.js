const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            //自己的css代码开启css模块化 对antd关闭css模块化
            // {
            //     test: /\.css$/,
            //     exclude: /(node_modules)/,
            //     loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'
            // },
            // {
            //     test: /\.css$/,
            //     exclude: /(app)/,
            //     loader: 'style-loader!css-loader'
            // },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?importLoaders=1',
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }


            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: "style-loader"
            //         }, {
            //             loader: "css-loader",
            //             options: {
            //                 modules: true, // 指定启用css modules
            //                 localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
            //             }
            //         }, {
            //             loader: "postcss-loader"
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ]
};