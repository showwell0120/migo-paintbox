/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactButton, ReactButtonProps } from '@paintbox/react-button';

const AllVariants: ComponentStory<typeof ReactButton> = (
  args: ReactButtonProps
) => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ReactButton {...args} variant={'primary'} children={'primary'} />
      <ReactButton {...args} variant={'secondary'} children={'secondary'} />
      <ReactButton {...args} variant={'outlined'} children={'outlined'} />
    </div>
  );
};

export const Default = AllVariants.bind({});
Default.args = {
  theme: 'primary',
  disabled: false,
  onClick() {
    alert('clicked');
  },
};

export default {
  component: ReactButton,
  title: 'React/Form/Button/All Variants',
} as ComponentMeta<typeof ReactButton>;
