const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: './',
        filename: 'js/bundle.js'
    },
    module: {
        rules: [

           {
                test: /\.(sass|css|scss)$/i,
                use: [
                    
                // Creates `style` nodes from JS strings
           {
                loader:MiniCssExtractPlugin.loader, 
                options: {
                    publicPath: "../",
                }
            },
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
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
                          
                        }
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
                      
                    }
                },
            ],
      },
      
          {
                test: /\.html$/i,
                loader: 'html-loader',
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
                    
        new MiniCssExtractPlugin({filename: "css/style.css"}),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        // compress: true,
        port: 9000,
        open:true,
        writeToDisk: true,
        stats: 'errors-only',
       
    }
};