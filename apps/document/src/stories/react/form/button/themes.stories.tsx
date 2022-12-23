/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactButton, ReactButtonProps } from '@paintbox/react-button';

const AllThemes: ComponentStory<typeof ReactButton> = (
  args: ReactButtonProps
) => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ReactButton {...args} theme={'brand'} children={'brand'} />
      <ReactButton {...args} theme={'primary'} children={'primary'} />
      <ReactButton {...args} theme={'secondary'} children={'secondary'} />
      <ReactButton {...args} theme={'danger'} children={'danger'} />
      <ReactButton {...args} theme={'info'} children={'info'} />
      <ReactButton {...args} theme={'success'} children={'success'} />
      <ReactButton {...args} theme={'warning'} children={'warning'} />
    </div>
  );
};

export const Default = AllThemes.bind({});
Default.args = {
  variant: 'primary',
  disabled: false,
  onClick() {
    alert('clicked');
  },
};

export default {
  component: ReactButton,
  title: 'React/Form/Button/All Themes',
} as ComponentMeta<typeof ReactButton>;
