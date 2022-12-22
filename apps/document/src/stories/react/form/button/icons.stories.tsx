/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactButton, ReactButtonProps } from '@paintbox/react-button';
import { SignIcons, ChevronIcons } from '@paintbox/react-foundation';

const AllThemes: ComponentStory<typeof ReactButton> = (
  args: ReactButtonProps
) => {
  return (
    <ReactButton {...args}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <SignIcons.CheckCircleFill />
        Create New Item
        <ChevronIcons.Down />
      </div>
    </ReactButton>
  );
};

export const Default = AllThemes.bind({});
Default.args = {
  disabled: false,
  onClick() {
    alert('clicked');
  },
};

export default {
  component: ReactButton,
  title: 'React/Form/Button/Add Icons',
} as ComponentMeta<typeof ReactButton>;
