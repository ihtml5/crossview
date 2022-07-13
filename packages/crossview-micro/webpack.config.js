const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { UploadPlugin } = require('./scripts/upload.js');

const isDevelopment = process.env.NODE_ENV === 'development';
const isSilent = !!process.env.CI_COMPILE;

module.exports = {
    entry: {
        runtime: [isDevelopment ? void 0 : './src/lib/polyfill.js', 'lit', 'jscalpel', 'loadjs', 'mitt'].filter(entry => entry),
        root: [
            isDevelopment ? 'webpack/hot/dev-server.js' : void 0,
            isDevelopment ?
            'webpack-dev-server/client/index.js?hot=true&live-reload=true&client=false' :
            void 0,
            './src/index.js',
        ].filter(entry => entry),
    },
    mode: process.env.NODE_ENV,
    devtool: isDevelopment ? 'inline-source-map' : 'cheap-source-map',
    devServer: {
        progress: true,
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        hotOnly: false,
        open: true,
        watchContentBase: true,
        proxy: {
            '/crossview/*': {
              target: 'http://localhost:3000',
              changeOrigin: true,
            },
        },
    },
    mode: process.env.NODE_ENV,
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        isDevelopment ? new webpack.HotModuleReplacementPlugin() : void 0, !isSilent &&
        !isDevelopment &&
        new UploadPlugin(),
        new WebpackManifestPlugin(), !isDevelopment ?
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }) :
        undefined,
        new HtmlWebpackPlugin({
            filename: 'index.html', // 最终创建的文件名
            template: 'public/index.html', // 指定模板路径
            inject: 'body',
            publicPath: !isDevelopment ?
                '' : `http://localhost:${process.env.PORT || 8080}/`, // 配置cdn
        }),
    ].filter(plugin => plugin),
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
                options: {
                    babelrc: false,
                    configFile: path.resolve(__dirname, 'babel.config.js'),
                    compact: false,
                    cacheDirectory: true,
                    sourceMaps: false,
                },
            },
            {
                test: /\.template\.js$/,
                loader: 'minify-template-literal-loader',
                options: {
                    caseSensitive: true,
                    collapseWhitespace: true,
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.((sa|sc|c)ss)$/,
                use: [{
                        loader: 'lit-scss-loader',
                        options: {
                            minify: true,
                        },
                    },
                    'extract-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    target: ["web", "es5"],
    output: {
        filename: isDevelopment ? undefined : '[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: !isDevelopment ?
            '' : `http://localhost:${process.env.PORT || 8080}/`, // 配置cdn
    },
    devtool: isDevelopment ? 'source-map' : 'eval',
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                        drop_debugger: true,
                        pure_funcs: ['console.log'],
                    },
                    sourceMap: false,
                    mangle: {
                        safari10: true,
                        ie8: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                },
                parallel: true,
            }),
        ],
    },
};