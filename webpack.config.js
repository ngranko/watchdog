const webpack = require('webpack');
const path = require('path');
let HTMLWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

function getPlugins() {
    let plugins = [
        new HTMLWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            chunks: ['bundle'],
            inject: 'body'
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ];
    if(process.env.NODE_ENV === 'production') {
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
                drop_debugger: true,
                conditionals: true,
                drop_console: true,
                sequences: true,
                booleans: true
            }
        }));
        plugins.push(new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }));
    }

    return plugins;
}

module.exports = [
    {
        context: __dirname,
        entry: {
            "bundle": './src/app.js'
        },
        output: {
            filename: '[name].js',
            path: path.join(__dirname, 'lib'),
            library: '[name]'
        },
        plugins: getPlugins(),
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader',
                        'eslint-loader'
                    ]
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true
                    }
                },
                {
                    enforce: "pre",
                    test: /\.vue$/,
                    loader: 'eslint-loader'
                },
                {
                    test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                    loader: 'file-loader'
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: ['node_modules'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    }
];
