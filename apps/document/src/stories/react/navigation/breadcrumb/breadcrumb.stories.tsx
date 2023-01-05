/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactBreadcrumb } from '@paintbox/react-breadcrumb';
import App from './app';

export default {
  component: ReactBreadcrumb,
  title: 'React/Navigation/Breadcrumb/Stories',
} as ComponentMeta<typeof ReactBreadcrumb>;

const Template: ComponentStory<typeof ReactBreadcrumb> = (args) => {
  return <App />;
};

export const Default = Template.bind({});
Default.args = {};
