/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ComponentMeta } from '@storybook/react';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

const CreateRouterApp = () => {
  return <RouterProvider router={router} />;
};

export default {
  component: CreateRouterApp,
  title: 'React/Navigation/Breadcrumb/Stories/Create Router',
} as ComponentMeta<typeof CreateRouterApp>;

export const CreateRouter = () => <CreateRouterApp />;
