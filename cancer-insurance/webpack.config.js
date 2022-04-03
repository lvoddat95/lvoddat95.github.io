const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    ProvidePlugin
} = require("webpack");

module.exports = {
    // https://webpack.js.org/configuration/mode/
    // production, development
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
    //   contentBase: "./dist",
      hot: true,
    },
    // https://webpack.js.org/concepts/entry-points/
    entry: {
        main: {
            import: "./src/build/main.js",
            filename: "build/main.[contenthash].js",
        },
        index: {
            import: "./src/build/index.js",
            filename: "build/index.[contenthash].js",
            dependOn: "main",
        },

    },

    // https://webpack.js.org/concepts/output/
    output: {
        path: `${__dirname}/dist`,
        publicPath: "/",
        clean: true,
    },

    // https://webpack.js.org/concepts/plugins/
    plugins: [
        // https://webpack.js.org/plugins/html-webpack-plugin/
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
            chunks: ["main"],
            filename: "index.html",
        }),
        // new HtmlWebpackPlugin({
        //     template: "./src/about.html",
        //     inject: "body",
        //     chunks: ["main", "about"],
        //     filename: "about.html",
        // }),

        // https://webpack.js.org/plugins/mini-css-extract-plugin/
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        
        // https://webpack.js.org/plugins/provide-plugin/
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ],

    // https://webpack.js.org/concepts/modules/
    module: {
        rules: [{
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     type: "assets/img",
            //     generator: {
            //         filename: "img/[hash][ext]",
            //     },
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     generator: {
            //         filename: "assets/fonts/[name][ext]",
            //     },
            //     use: {
            //         loader: "url-loader", // Use url-loader when change generator filename
            //     },
            // },

        ],
    },
};