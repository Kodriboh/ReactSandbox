import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../App/components/Button';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Button',
    primary: true,
    color: 'red',
}