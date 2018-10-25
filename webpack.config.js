const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = (env) => {
    const plugins = [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]

    if (env.NODE_ENV === 'production') {
        plugins.push(
          new CleanWebpackPlugin(['dist'], { root: __dirname })
        )
      }
    
    return {
        mode: 'production',
        entry: {
            app: path.resolve(__dirname, 'src/entries/home-app.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: path.resolve(__dirname, 'dist')+'/'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                    "css-loader"
                    ]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                },
                {
                    test: /\.(jpg|gif|png|svg)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            limit: 100000,
                            name: 'images/[name].[ext]'
                        }
                    }
                }
            ]
        },
        plugins,
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        }
    }
}