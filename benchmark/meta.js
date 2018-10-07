
const stencilInfo = require("../dist/stencil/build/app/app.registry.json");
const reactInfo = require("../dist/react/asset-manifest.json");

module.exports = [{
    name: 'Lit-Element',
    slug: 'lit-element',
    paths: ['lit-element/dist/main.js'],
    docs: 'https://github.com/Polymer/lit-element',
    demo: './lit-element',
    wc: true,
}, {
    name: 'Native Web Components',
    slug: 'native',
    paths: ['native/dist/main.js'],
    docs: 'https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements',
    demo: './native',
    wc: true,
}, {
    name: 'Polymer 3',
    slug: 'polymer3',
    paths: ['polymer3/src/index.js'],
    docs: 'https://www.polymer-project.org/3.0/docs/about_30',
    demo: './polymer3',
    wc: true,
}, {
    name: 'SkateJS & lit-html',
    slug: 'skatejs-lit-htmlt',
    paths: ['skatejs-lit-html/dist/main.js'],
    docs: 'https://github.com/skatejs/skatejs',
    demo: './skatejs-lit-html',
    wc: true,
}, {
    name: 'SkateJS & Preact',
    slug: 'skatejs-preact',
    paths: ['skatejs-preact/dist/main.js'],
    docs: 'https://github.com/skatejs/skatejs',
    demo: './skatejs-preact',
    wc: true,
}, {
    name: 'SlimJS',
    slug: 'slimjs',
    paths: ['slimjs/main.js'],
    docs: 'http://slimjs.com',
    demo: './slimjs/',
    wc: true,
}, {
    name: 'Stencil',
    slug: 'stencil',
    paths: [`stencil/build/app/${stencilInfo.core}`, `stencil/build/app/${stencilInfo.components['my-todo'].bundleIds.$}.js`],
    docs: 'https://stenciljs.com',
    demo: './stencil',
    wc: true,
}, {
    name: 'Svelte',
    slug: 'svelte',
    paths: ['svelte/bundle.js'],
    docs: 'https://svelte.technology/',
    demo: './svelte',
    wc: true,
}, {
    name: 'Atomico',
    slug: 'atomico',
    paths: ['atomico/atomico.umd.js', 'atomico/atom-todo.iife.js'],
    docs: 'https://github.com/uppercod/atomico',
    demo: './atomico',
    wc: true,
}, {
    name: 'Angular',
    slug: 'angular',
    paths: ['angular/main.7a34ad3d218688b46c3b.js'],
    docs: '',
    demo: './angular',
    wc: false,
}, {
    name: 'React',
    slug: 'react',
    paths: [`react/${reactInfo['main.js']}`],
    docs: '',
    demo: './react',
    wc: false,
}, {
    name: 'VueJS',
    slug: 'vue',
    paths: ['vue/js/app.45be5753.js', 'vue/js/chunk-vendors.9501e9f3.js'],
    docs: '',
    demo: './vue',
    wc: false,
}];