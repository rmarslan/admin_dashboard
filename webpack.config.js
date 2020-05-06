const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/js/main.js",
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    mode: "development",

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            // if hmr does not work, this is a forceful method.
                            reloadAll: true,
                        },
                    },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ],
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        // In options we can set different things like format
                        // and directory to save
                        options: {
                            outputPath: "images",
                        },
                    },
                ],
            },

            {
                // Apply rule for fonts files
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        // Using file-loader too
                        loader: "file-loader",
                        options: {
                            outputPath: "fonts",
                        },
                    },
                ],
            },

            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "main.bundle.css",
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Popper: ["@popperjs/core", "default"],
        }),
    ],

    devServer: {
        contentBase: "./dist",
        hot: true,
        stats: "minimal",
    },
};
