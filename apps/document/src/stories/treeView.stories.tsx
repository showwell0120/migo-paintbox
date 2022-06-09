import { Story, Meta } from '@storybook/react';
import { ReactTreeView, ReactTreeViewProps } from '@paintbox/react-tree-view';

export default {
  component: ReactTreeView,
  title: 'ReactTreeView',
} as Meta;

// 需要多個 selectedTab 的 state 和 selectTab 的事件實作，測試元件的 selectedTab 和 selectTab props
const Template: Story<ReactTreeViewProps> = (args) => (
  <ReactTreeView {...args} />
);

const itemProps = [
  {
    id: '1',
    name: 'Test 1',
  },
  {
    id: '2',
    name: 'Test 2',
    children: [
      {
        id: '3',
        name: 'Test 3',
      },
    ],
  },
];

export const Primary = Template.bind({});
Primary.args = {
  items: itemProps,
  selectedTab: 'Test 1',
  prepend: <div>*</div>
}