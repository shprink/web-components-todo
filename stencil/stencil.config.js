exports.config = {
  bundles: [
    { components: ['my-todo', 'todo-input', 'todo-item'] },
    // { components: ['app-profile'] }
  ],
  // collections: [
  //   { name: '@stencil/router' }
  // ]
  publicPath: '/stencil/www/build'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
