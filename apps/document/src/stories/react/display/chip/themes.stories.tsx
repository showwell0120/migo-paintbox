/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactChip, ReactChipProps } from '@paintbox/react-chip';

const Template: ComponentStory<typeof ReactChip> = (args: ReactChipProps) => {
  return <ReactChip {...args} />;
};

const AllChips: ComponentStory<typeof ReactChip> = (args: ReactChipProps) => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ReactChip
        {...args}
        theme={'secondary-brand'}
        children={'secondary-brand'}
      />
      <ReactChip
        {...args}
        theme={'secondary-danger'}
        children={'secondary-danger'}
      />
      <ReactChip
        {...args}
        theme={'secondary-info'}
        children={'secondary-info'}
      />
      <ReactChip
        {...args}
        theme={'secondary-primary'}
        children={'secondary-primary'}
      />
      <ReactChip
        {...args}
        theme={'secondary-secondary'}
        children={'secondary-secondary'}
      />
      <ReactChip
        {...args}
        theme={'secondary-success'}
        children={'secondary-success'}
      />
      <ReactChip
        {...args}
        theme={'secondary-warning'}
        children={'secondary-warning'}
      />
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
