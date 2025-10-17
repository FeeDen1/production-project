// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import 'app/styles/index.scss';
import {Button, ButtonTheme} from './Button';

//👇 This default export determines where your story goes in the story list
const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstStory: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        title: 'Button 1',
        //👇 The args you need here will depend on your component
    },
};