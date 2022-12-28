import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactCheckbox, ReactCheckboxProps } from '@paintbox/react-checkbox';

const Template: ComponentStory<typeof ReactCheckbox> = (
  args: ReactCheckboxProps
) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return <ReactCheckbox {...args} checked={checked} onChange={setChecked} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'This is a label',
};

export default {
  component: ReactCheckbox,
  title: 'React/Form/Checkbox/Stories',
} as ComponentMeta<typeof ReactCheckbox>;
