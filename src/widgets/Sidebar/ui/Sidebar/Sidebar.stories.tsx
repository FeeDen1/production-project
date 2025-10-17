// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import {Sidebar} from './Sidebar';

//👇 This default export determines where your story goes in the story list
const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarStory: Story = {
    args: {

        //👇 The args you need here will depend on your component
    },
};