import React from 'react'
import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory  } from '@storybook/react';



export default {
    title: 'UI/Label',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }

    }

} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    label: 'Hello World',
    size: 'normal',
    allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
    allCaps: true,
    size: 'normal'
};

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color:'secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color:'secondary'
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    color:'secondary',
    fontColor: '#5517ac'
};