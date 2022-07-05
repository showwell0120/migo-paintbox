import { Story, Meta } from '@storybook/react';
import { ReactToast, ReactToastProps } from '@paintbox/react-toast';

export default {
  component: ReactToast,
  title: 'Components / Toast',
} as Meta;

const Template: Story<ReactToastProps> = (args) => <ReactToast {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: 'test',
};