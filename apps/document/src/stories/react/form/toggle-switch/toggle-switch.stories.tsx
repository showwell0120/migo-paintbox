/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ReactToggleSwitch,
  ReactToggleSwitchProps,
} from '@paintbox/react-toggle-switch';

const Template: ComponentStory<typeof ReactToggleSwitch> = (
  args: ReactToggleSwitchProps
) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <ReactToggleSwitch {...args} checked={checked} onChange={setChecked} />
  );
};

export const Default = Template.bind({});
Default.args = {
  theme: 'primary-primary',
  disable: false,
  onText: 'On',
  offText: 'Off',
};

export default {
  component: ReactToggleSwitch,
  title: 'React/Form/ToggleSwitch/Stories',
} as ComponentMeta<typeof ReactToggleSwitch>;
