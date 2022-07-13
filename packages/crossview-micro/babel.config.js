module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs:"3",
        useBuiltIns: 'entry',
        targets: {
          browsers: [
            "edge >= 16",
            "safari >= 9",
            "firefox >= 57",
            "ie >= 11",
            "ios >= 9",
            "chrome >= 49"
          ]
        }
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      "@babel/plugin-transform-template-literals",
      {
        "loose": true
      }
    ],
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
        regenerator: true,
      },
    ],
  ],
};
