import '../src/app/styles/index.scss'
import React from 'react';
// ✅ Импортируем провайдер и перечисление тем
import { ThemeProvider } from '../src/shared/config/ThemeProvider';
import { Theme } from '../src/shared/lib/themeContext/ThemeContext';

// ✅ Глобальные декораторы — оборачиваем каждую сторис в App-подобную среду
export const decorators = [
    (Story, context) => {
        const theme = (context.globals.theme) ?? Theme.LIGHT;
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <Story />
                </div>
            </ThemeProvider>
        );
    },
];

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: Theme.LIGHT,
        toolbar: {
            icon: 'circlehollow',
            items: [
                { value: Theme.LIGHT, title: 'Light Theme' },
                { value: Theme.DARK, title: 'Dark Theme' },
            ],
            showName: true,
        },
    },
};

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;