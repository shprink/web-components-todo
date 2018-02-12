exports.config = {
  collections: [
    // { name: '@stencil/router' }
  ],
  publicPath: '/stencil/build/',
  serviceWorker: {
    // swDest: 'stencil/',
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
