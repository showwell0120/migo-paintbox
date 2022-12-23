/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactChip, ReactChipProps } from '@paintbox/react-chip';

const Template: ComponentStory<typeof ReactChip> = (args: ReactChipProps) => {
  return <ReactChip {...args} />;
};

const AllChips: ComponentStory<typeof ReactChip> = (args: ReactChipProps) => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ReactChip {...args} theme={'danger'} children={'danger'} />
      <ReactChip {...args} theme={'primary'} children={'primary'} />
      <ReactChip {...args} theme={'secondary'} children={'secondary'} />
      <ReactChip {...args} theme={'success'} children={'success'} />
      <ReactChip {...args} theme={'warning'} children={'warning'} />
    </div>
  );
};

export const AllThemes = AllChips.bind({});
AllThemes.args = {};

export const NoDot = Template.bind({});
NoDot.args = {
  children: 'No Dot',
  dot: false,
};

export const TriggerClick = Template.bind({});
TriggerClick.args = {
  children: 'Click me',
  onClick() {
    alert('clicked');
  },
};

export default {
  component: ReactChip,
  title: 'React/Display/Chip/All Themes',
} as ComponentMeta<typeof ReactChip>;
