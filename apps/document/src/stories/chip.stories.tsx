import { Story, Meta } from '@storybook/react';
import { ReactChip, ReactChipProps } from '@paintbox/react-chip';

export default {
  component: ReactChip,
  title: 'Components / Chip',
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ReactChipProps> = (args) => <ReactChip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'red',
  children: <div>Active</div>,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'green',
  children: <div>Inactive</div>,
  dot: false,
  clickable: true,
};
