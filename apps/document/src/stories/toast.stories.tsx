import { Story, Meta } from '@storybook/react';
import { ReactToast, ReactToastProps } from '@paintbox/react-toast';

export default {
  component: ReactToast,
  title: 'Components / Toast',
} as Meta;

const Template: Story<ReactToastProps> = (args) => <ReactToast {...args} />;

export const Warn = Template.bind({});
Warn.args = {
  variant: 'warn',
  childern:
    'Unable to log in, please check your login information and try again.',
  enableClose: true,
  onClose: () => alert('update show prop'),
  yAxis: 'top',
  xAxis: 'right',
  className: 'test',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  childern: 'Price successfully updated!',
  waitToClose: 3000,
  onClose: () => alert('update show prop'),
};