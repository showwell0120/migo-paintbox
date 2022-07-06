import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { ReactTreeView, ReactTreeViewProps, ItemType } from '@paintbox/react-tree-view';

export default {
  component: ReactTreeView,
  title: 'Components / TreeView',
} as Meta;

const Template: Story<ReactTreeViewProps> = (args) => (
  <ReactTreeView {...args} />
);

const itemProps: Array<ItemType> = [
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
Primary.decorators = [
  (Story, context) => {
    const [ tab, setTab ] = useState('Test 1');
    const handleTab = (t: ItemType) => {
      setTab(t.name);
    };

    context.args['selectedTab'] = tab;
    context.args['onSelectTab'] = handleTab;
    return (
      <div style={{width: '300px'}}>
        <Story />
      </div>
    );
  },
];
Primary.args = {
  items: itemProps,
}

const itemWithIconProp: Array<ItemType> = [
  {
    id: '1',
    name: 'Item 1',
    icon: '*',
  },
  {
    id: '2',
    name: 'Item 2',
    icon: '#',
    children: [
      {
        id: '3',
        name: 'Item 3',
        icon: '::',
      },
      {
        id: '4',
        name: 'Item 4',
        icon: '::'
      }
    ],
  }
];

export const Secondary = Template.bind({});
Secondary.args = {
  items: itemWithIconProp
};