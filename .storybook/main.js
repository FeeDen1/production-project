import { buildCssLoader } from '../config/build/loaders/buildCssLoader';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from "path";

const config = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        {
            name: '@storybook/addon-styling-webpack',
            options: { rules: [buildCssLoader(true)] },
        },
    ],
    framework: { name: '@storybook/react-webpack5', options: {} },

    webpackFinal: async (cfg) => {
        const paths = {
            // eslint-disable-next-line no-undef
            src: path.resolve(__dirname, '..', 'src')
        }
        cfg.resolve = cfg.resolve || {};
        cfg.resolve.modules.push(paths.src)
        cfg.resolve.plugins = [
            ...(cfg.resolve.plugins || []),
            new TsconfigPathsPlugin({
                // чтобы брал те же расширения, что и сторибук
                extensions: cfg.resolve?.extensions,
            }),
        ];
        // 1) исключаем svg из существующего asset rule





        return cfg;
    },
};

export default config;
