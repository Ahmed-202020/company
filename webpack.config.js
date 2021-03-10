const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
           },
            {
                test: /\.(sass|css|scss)$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:'[name].[ext]',
                            outputPath: 'images',
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|svg|eot|woff|woff2|)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:'[name].[ext]',
                            outputPath: 'fonts', 
                        },
                    },
                ],
            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                  exposes: ["$", "jQuery"],
                },
              },
        ],
    },    
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/projects.html",
            filename: "projects.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/project-details.html",
            filename: "project-details.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/blog.html",
            filename: "blog.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/blog-details.html",
            filename: "blog-details.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/add-blog.html",
            filename: "add-blog.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/about.html",
            filename: "about.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/contact.html",
            filename: "contact.html",
        }),
        new MiniCssExtractPlugin({filename: "css/style.css"}),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 9000,
        open:true,
        writeToDisk: true,
        stats: 'errors-only',
    }
};