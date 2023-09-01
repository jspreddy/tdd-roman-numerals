export default (api) => {
  api.cache.never();

  return {
    presets: [
      ['@babel/preset-env'],
    ],
    targets: {
      node: 16,
      esmodules: true
    },
    sourceMaps: "inline",
    retainLines: true,
  };
};
