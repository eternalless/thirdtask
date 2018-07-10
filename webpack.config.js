const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: "./src/index.js",
        a: "./src/a.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0 // This is example is too small to create commons chunks
                },
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    watch: true,
    devServer: {//配置此静态文件服务器，可以用来预览打包后项目
        inline:true,//打包后加入一个websocket客户端
        hot:true,//热加载
        contentBase: path.resolve(__dirname, 'dist'),//开发服务运行时的文件根目录
        host: 'localhost',//主机地址
        port: 9090,//端口号
        compress: true//开发服务器是否启动gzip等压缩
    },
    plugins: [
        new webpack.BannerPlugin('chen'),
        new CleanWebpackPlugin(["./dist"]),
        // new webpack.optimize.SplitChunksPlugin({
        //     name: 'common', // 如果还要提取公共代码,在新建一个实例
        //     minChunks: 2, //重复两次之后就提取出来
        //     chunks: ['index', 'a'] // 指定提取范围
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks:['index'], // 多入口时需要用到
            hash: true, // 插入的文件后面加一段随机数
        }),
    ]
}
