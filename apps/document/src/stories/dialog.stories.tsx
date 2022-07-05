import { Story, Meta } from '@storybook/react';
import { ReactDialog, ReactDialogProps } from '@paintbox/react-dialog';

export default {
  component: ReactDialog,
  title: 'Components / Dialog',
} as Meta;

const Template: Story<ReactDialogProps> = (args) => <ReactDialog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <div>Check</div>
};