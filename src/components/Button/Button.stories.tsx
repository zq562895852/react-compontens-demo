import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonType, ButtonProps } from './Button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    // 按钮类型
    btnType: ButtonType.Primary,
    // 子元素
    children: 'Primary'
};

export const Danger = Template.bind({});
Danger.args = {
    btnType: ButtonType.Danger,
    children: "Danger"
}

export const Link = Template.bind({});
Link.args = {
    btnType: ButtonType.Link,
    children: "Link"
}
export const Default = Template.bind({});
Default.args = {
    btnType: ButtonType.Default,
    children: "Default"
}


