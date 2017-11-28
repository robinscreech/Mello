var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + "/index.html",
    filename: "index.html",
    inject: "body",
    showErrors: true
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: __dirname + "/index.js",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /data/],
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                exclude: [/node-modules/, /data/],
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            }
        ]
    },
    output: {
        filename: "transformed.js",
        path: __dirname + "/dist"
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new ExtractTextPlugin("styles/styles.css")
    ],
    node:{
        fs:"empty"
    }
};
