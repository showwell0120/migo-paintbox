/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { useRoutes } from 'react-router-dom';

import { routes } from './routes';

const RouteObjectApp = () => {
  const element = useRoutes(routes);

  return <div>{element}</div>;
};

export default {
  component: RouteObjectApp,
  title: 'React/Navigation/Breadcrumb/Stories/Route Objects',
  decorators: [withRouter],
} as ComponentMeta<typeof RouteObjectApp>;

export const RouteObjects = () => <RouteObjectApp />;
