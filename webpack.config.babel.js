import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const htmlWebpackPluginConf = {
    template: __dirname + '/dev/index.html',
    inject: 'body'
};

module.exports = (env) => {
    return {
        context: __dirname + '/dev',

        entry: {
            main: './main.js',
            style: './static/styles/main'
        },

        output: {
            path: __dirname + '/public',
            filename: 'js/[name].js',
            publicPath: '/'
        },

        resolve: {
            modules: ['node_modules'],
            extensions: ['.js', '.scss']
        },

        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new HtmlWebpackPlugin(htmlWebpackPluginConf),
            new webpack.DefinePlugin({
                DELAY: JSON.stringify(env.delay)
            }),
            new CopyWebpackPlugin([{
                from: __dirname + '/dev/static/images/users',
                to: __dirname + '/public/images/users'
            }]),
            new ExtractTextPlugin('styles/styles.css')
        ],

        module: {
            rules:[{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['es2015', 'react', 'stage-0']
                    }
                }]
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            //minimize: NODE_ENV !== 'development'
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }, {
                        loader: 'resolve-url-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            }, {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                include: /node_modules/,
                loader: "file-loader?name=styles/fonts/[name].[ext]"
            }, {
                test: /\.png$/,
                include: __dirname + '/dev/static/images',
                loader: "file-loader?name=images/[name].[ext]"
            }]
        },

        //devtool: 'cheap-module-source-map',
        devtool: 'inline-source-map',

        devServer: {
            port: 8080,
            contentBase: __dirname + '/public'
        }
    }
};