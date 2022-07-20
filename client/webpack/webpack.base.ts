import { Configuration } from "webpack"

import HtmlWebpackPlugin from "html-webpack-plugin";

import { mode, isDev } from './utils/env';
import { pathResolve } from "./utils/pathResolve";

const webpackConfigBase: Configuration = {
    mode: mode,
    entry: pathResolve('src/index.tsx'),
    output: {
        path: pathResolve('dist'),
        filename: isDev ? '[name].js' : '[name].[contenthash].js',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },

            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: [
                    'css-loader',
                    'sass-loader',
                ]
            },

            {
                test: /\.(jpg|png|gif)$/,
                type: 'asset/resource',      
            },
            {
                test: /\.svg/,
                type: 'asset/inline',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',            
            },
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: pathResolve('public/index.html')
        })
    ],

    devtool: 'inline-source-map',
    
    resolve: {
        alias: {
            '@components': pathResolve('src/components/'),
            '@hooks': pathResolve('src/hooks/'),
            '@assets': pathResolve('src/assets/'),
            '@redux': pathResolve('src/redux/'),
            '@styles': pathResolve('src/styles/'),
            '@constants': pathResolve('src/constans/'),
            '@services': pathResolve('src/services/'),
            '@utils': pathResolve('src/utils/'),
        },            
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }
}

export default webpackConfigBase;