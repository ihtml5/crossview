const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const dist = path.resolve(__dirname, './dist');
const resolve = dir => path.join(__dirname, `./${dir}`);

module.exports = {
  entry: {
    ".": "./index.ts",
    "components/paragraph": './src/components/paragraph/index.ts',
    "components/abstract": './src/components/abstract/index.ts',
    "components/image": './src/components/image/index.ts',
    "components/bold": './src/components/bold/index.ts',
    "components/heading": './src/components/heading/index.ts',
  },
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/,
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
          output: {
            comments: false,
          },
        },
        extractComments: false
      }),
    ],
  },
  output: {
    filename: "[name]/index.js",
    path: dist
  },
  module: {
    rules: [
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
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        include: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", 'svg'],
    alias: {
      '@': resolve('src'),
    },
  },
  devServer: {
    contentBase: dist,
    compress: false,
    port: 8082,
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: false
    }),
  ]
};
