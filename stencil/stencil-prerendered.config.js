exports.config = {
  collections: [
    // { name: '@stencil/router' }
  ],
  publicPath: '/stencil-prerendered/build/',
  serviceWorker: {
    // swDest: 'stencil/',
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
