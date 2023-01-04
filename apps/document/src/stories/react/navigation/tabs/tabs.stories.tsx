/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactTabs, TabItem } from '@paintbox/react-tabs';

export default {
  component: ReactTabs,
  title: 'React/Navigation/Tabs/Stories',
} as ComponentMeta<typeof ReactTabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [tabs, setTabs] = React.useState<TabItem[]>([
    { id: 1, name: 'All' },
    { id: 2, name: 'Video' },
    { id: 3, name: 'Dubbing' },
    { id: 4, name: 'Graphic' },
    { id: 5, name: 'Subtitles' },
  ]);
  const [currentTabID, setCurrentTabID] = React.useState<number>(1);

  return (
    <ReactTabs
      tabs={tabs}
      currentTabID={currentTabID}
      onTabChange={setCurrentTabID}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
