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
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
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
                                use: ['ts-loader'],
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
                                test: [GLOBAL_CSS_REGEXP, SLICK_CSS],
                                use: ['style-loader', 'css-loader']

                        },
                        {
                                test: /\.(png|jpg)$/i,
                                use: {
                                        loader: 'file-loader',
                                        options: {
                                                name: 'img/[name].[ext]',
                                                output: path.resolve(__dirname, '/dist/img/')
                                        }
                                },
                        }
                ]
        },
        devtool: setupDevtool(),
        plugins: [
                new CleanWebpackPlugin(),
                new HtmlWebpackPlugin({
                        template: path.resolve(__dirname, '/index.html')
                })
        ]
}
