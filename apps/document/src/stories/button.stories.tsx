import { Story, Meta } from '@storybook/react';
import { ReactButton, ReactButtonProps } from '@paintbox/react-button';

export default {
  component: ReactButton,
  title: 'ReactButton',
} as Meta

const Template: Story<ReactButtonProps> = (args) => <ReactButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click'
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  children: 'Click'
};