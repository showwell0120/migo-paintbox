import { Story, Meta } from '@storybook/react';

function Test() {
  return <div>test</div>;
}

export default {
  component: Test,
  title: 'Test',
} as Meta;

const Template: Story = (args) => <Test {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
