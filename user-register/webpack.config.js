/**
 * Created by admin on 2017/8/24.
 */
let path = require("path");
let webpack = require("webpack");

let HtmlWebpackPlugin = require("html-webpack-plugin");
let HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let page1ExtractTextPlugin = new ExtractTextPlugin({
    filename: "index.css"
});

function getPath(file) {
    return path.resolve(__dirname, file);
}

module.exports = env => {
    let isDev = env.dev

    let plugins = [
        page1ExtractTextPlugin,
        new HtmlWebpackPlugin({
            template: getPath("./index.html"),
            inlineSource: ".(css|js)$",
            minify: {minifyCSS: true, minifyJS: true},
        }),
        new webpack.DefinePlugin({
            'IS_DEV': JSON.stringify(isDev),
        }),
    ];
    if (env.build) {
        plugins.push(new HtmlWebpackInlineSourcePlugin());
    }
    return {
        entry: {
            index: isDev ? [
                // getPath("./js/_mock.js"),
                getPath("./index.js")
            ] : getPath("./index.js")
        },
        output: {path: getPath("./dist"), filename: "[name].js"},
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader?presets=env"
                },
                {
                    test: /\.scss$/,
                    use: page1ExtractTextPlugin.extract({
                        use: [
                            "css-loader",
                            "autoprefixer-loader",
                            "sass-loader"
                        ]
                    })
                },
                {
                    test: /\.(png|jpg)/,
                    use: {loader: "url-loader", options: {limit: 8192}}
                }
            ]
        },
        externals: {
            jquery: "window.jQuery",
            // Doufu: "window.Doufu",
            layer: "window.layer",
            Vue: "window.Vue",
        },
        plugins
    };
};
