const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    devtool: "",
    entry: {
        main: "./src/js/main.js",
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                exclude: [
                    /node_modules/,
                    "bootstrap-datepicker.min.js",
                    "jquery-jvectormap-2.0.5.min.js",
                    "jvectormapmirc.js",
                ],
            }),
        ],
    },

    mode: "production",

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
                    },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" },
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
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
};
