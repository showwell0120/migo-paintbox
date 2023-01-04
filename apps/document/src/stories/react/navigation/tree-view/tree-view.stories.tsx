import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ReactTreeView,
  ReactTreeViewProps,
  ItemType,
} from '@paintbox/react-tree-view';

const Template: ComponentStory<typeof ReactTreeView> = (
  args: ReactTreeViewProps
) => {
  const [tab, setTab] = React.useState('Test 1');
  const handleTab = (t: ItemType) => {
    setTab(t.name);
  };

  return (
    <div style={{ width: '300px' }}>
      <ReactTreeView {...args} selectedTab={tab} onSelectTab={handleTab} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
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
  ],
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  items: [
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
          icon: '::',
        },
      ],
    },
  ],
};

export default {
  component: ReactTreeView,
  title: 'React/Navigation/TreeView/Stories',
} as ComponentMeta<typeof ReactTreeView>;
