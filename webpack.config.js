const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { default: Slider } = require('react-slick');
const { webpack } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const SLICK_CSS = /slick\.css$/;

function setupDevtool() {
        if (NODE_ENV === 'development') {
                return 'eval'
        } else {
                return false;
        }
}

module.exports = {
        resolve: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        mode: NODE_ENV ? NODE_ENV : 'development',
        entry: [
                path.resolve(__dirname, '/src/index.jsx')
        ],
        output: {
                path: path.resolve(__dirname, 'dist'),
                filename: 'main[contenthash].js'
        },
        module: {
                rules: [{
                                test: /\.[tj]sx?$/,
                                use: 'ts-loader',
                                exclude: /node_modules/
                                        // exclude: /node_modules/,
                                        // use: ['babel-loader', {
                                        //         options: {
                                        //                 presets: [
                                        //                         '@babel/preset-react'
                                        //                 ],
                                        //                 plugins: ['@babel/plugin-syntax-jsx']
                                        //         }
                                        // }],
                        },
                        {
                                test: GLOBAL_CSS_REGEXP,
                                use: ['style-loader', 'css-loader']

                        },
                        {
                                test: SLICK_CSS,
                                use: ['style-loader', 'css-loader']

                        },
                        {
                                test: /\.css$/,
                                use: [
                                        'style-loader',
                                        {
                                                loader: 'css-loader',
                                                options: {
                                                        modules: {
                                                                mode: 'local',
                                                                localIdentName: '[name]__[local]--[hash:base64:5]'
                                                        }
                                                }
                                        },
                                        'less-loader'
                                ],
                                exclude: [GLOBAL_CSS_REGEXP, SLICK_CSS]
                        },
                        {
                                test: /\.(png|jpg|svg)$/i,
                                type: 'asset'
                        }
                ]
        },
        devtool: setupDevtool(),
        devServer: {
                historyApiFallback: true,
        },
        plugins: [
                new CleanWebpackPlugin(),
                new HtmlWebpackPlugin({
                        template: path.resolve(__dirname, '/index.html'),
                        favicon: path.resolve(__dirname, 'src/img/logo.svg'),
                })
        ]
}
