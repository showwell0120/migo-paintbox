/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ReactIconAction,
  ReactIconActionProps,
} from '@paintbox/react-icon-action';
import { RealIcons } from '@paintbox/react-foundation';

const Template: ComponentStory<typeof ReactIconAction> = (
  args: ReactIconActionProps
) => {
  return <ReactIconAction {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  icon: <RealIcons.TrashBin />,
  tooltip: 'Delete',
  onClick() {
    alert('click');
  },
};

export default {
  component: ReactIconAction,
  title: 'React/Form/IconAction/Main',
} as ComponentMeta<typeof ReactIconAction>;
