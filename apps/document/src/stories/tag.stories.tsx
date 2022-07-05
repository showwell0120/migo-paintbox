import { Story, Meta } from '@storybook/react';
import { ReactTag, ReactTagProps } from '@paintbox/react-tag';

export default {
  component: ReactTag,
  title: 'Components / Tag',
} as Meta;

const Template: Story<ReactTagProps> = (args) => <ReactTag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'test',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'test',
  colorType: 'white',
  bgColorType: 'blue',
  hasBorder: true,
};
