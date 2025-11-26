import webpack from "webpack";
import {BuildOptions} from "./types/config";
import ReactRefreshTypeScript from 'react-refresh-typescript'
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: '@svgr/webpack',
    }

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {locales: ['ru', 'en'], keyAsDefaultValue: true}
                    ]
                ]
            }
        }
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                    transpileOnly: isDev,
                },
            }
        ],
        exclude: /node_modules/,
    }

    const scssLoaders = buildCssLoader(isDev)

    const fileLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        scssLoaders,

    ]
}