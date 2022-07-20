import { Configuration } from 'webpack';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ESlintWebpackPlugin from 'eslint-webpack-plugin'

const webpackConfigDev: Configuration = {

    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                ]
            }
        ]
    },
    // @ts-ignore //
    devServer: {
        open: true,
        port: 3000,
        hot: true,
    },

    plugins: [
        new ReactRefreshWebpackPlugin(),
        new ESlintWebpackPlugin(),
    ]
}

export default webpackConfigDev;