import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { withRouter } from 'storybook-addon-react-router-v6';

import { DocsContainer } from './docs-container';

import '../../../packages/react/foundation/src/palettes/main.scss';
import '../src/stories/react/foundation/icons/_icons.scss';

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  options: {
    storySort: {
      method: '',
      order: ['guides', 'project', 'react', 'model'],
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' },
    classTarget: 'html',
  },
  viewMode: 'docs',
  docs: {
    container: DocsContainer,
  },
};

export const decorators = [
  (Story) => (
    <div
      className={useDarkMode() ? 'dark' : 'light'}
      data-theme={useDarkMode() ? 'dark' : 'light'}
    >
      <Story />
    </div>
  ),
  withRouter,
];
