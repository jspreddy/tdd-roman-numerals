module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      ['@babel/preset-env', {
        targets: {
          node: 'v8.10.0',
        },
      }],
    ],
  };
};
