import { Story, Meta } from '@storybook/react';

function Test1() {
  return <div>test1</div>;
}

export default {
  component: Test1,
  title: 'Test1',
} as Meta;

const Template: Story = (args) => <Test1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
