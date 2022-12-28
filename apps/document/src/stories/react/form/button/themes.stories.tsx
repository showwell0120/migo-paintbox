/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ColorThemes } from '@paintbox/react-foundation';
import { ReactButton, ReactButtonProps } from '@paintbox/react-button';

const AllThemes: ComponentStory<typeof ReactButton> = (
  args: ReactButtonProps
) => {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {ColorThemes.map((theme) => (
        <ReactButton {...args} theme={theme} children={theme} />
      ))}
    </div>
  );
};

export const Default = AllThemes.bind({});
Default.args = {
  variant: 'contained',
  disabled: false,
  onClick() {
    alert('clicked');
  },
};

export default {
  component: ReactButton,
  title: 'React/Form/Button/All Themes',
} as ComponentMeta<typeof ReactButton>;
