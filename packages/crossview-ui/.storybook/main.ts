const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|ts|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  features: { previewCsfV3: true },
  webpackFinal: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src"),
    };
    return config;
  }
};
