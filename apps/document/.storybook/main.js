const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/stories/guides/**/*.stories.@(mdx|jsx|js|tsx|ts)',
    '../src/stories/project/**/*.stories.@(mdx|jsx|js|tsx|ts)',
    '../src/stories/react/**/*.stories.@(mdx|jsx|js|tsx|ts)',
    '../src/stories/model/**/*.stories.@(mdx|jsx|js|tsx|ts)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
};
