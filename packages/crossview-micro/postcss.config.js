const postcssNormalize = require('postcss-normalize');

module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
    postcssNormalize()
  ]
}