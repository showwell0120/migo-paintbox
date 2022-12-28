import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactSpinner, ReactSpinnerProps } from '@paintbox/react-spinner';

const Template: ComponentStory<typeof ReactSpinner> = (
  args: ReactSpinnerProps
) => {
  return <ReactSpinner {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export default {
  component: ReactSpinner,
  title: 'React/Feedback/Spinner/Stories',
} as ComponentMeta<typeof ReactSpinner>;
