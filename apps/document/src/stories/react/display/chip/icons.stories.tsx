/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactChip, ReactChipProps } from '@paintbox/react-chip';
import { RealIcons } from '@paintbox/react-foundation';

const Template: ComponentStory<typeof ReactChip> = (args: ReactChipProps) => {
  return (
    <ReactChip {...args}>
      <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
        <RealIcons.TagFill />
        Add icons
      </div>
    </ReactChip>
  );
};

export const Default = Template.bind({});
Default.args = {
  dot: false,
  theme: 'primary',
};

export default {
  component: ReactChip,
  title: 'React/Display/Chip/Add Icons',
} as ComponentMeta<typeof ReactChip>;
