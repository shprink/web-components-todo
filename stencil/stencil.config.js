exports.config = {
  bundles: [
    { components: ['my-todo', 'todo-input', 'todo-item'] },
    // { components: ['app-profile'] }
  ],
  // collections: [
  //   { name: '@stencil/router' }
  // ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
