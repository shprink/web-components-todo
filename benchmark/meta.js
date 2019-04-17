
const stencil011Info = require("../dist/stencil-0.11/build/app/app.registry.json");
const stencil016Info = require("../dist/stencil-0.16/build/app/app.registry.json");

const reactInfo = require("../dist/react/asset-manifest.json");

console.log(`stencil-0.16/build/app/${stencil016Info.core}`, `stencil/build/app/${stencil016Info.components['my-todo'].bundleIds.$}.entry.js`)
console.log(`stencil-0.11/build/app/${stencil011Info.core}`, `stencil-0.11/build/app/${stencil011Info.components['my-todo'].bundleIds.$}.entry.js`)

module.exports = {
    latest: [{
        name: 'functional-element',
        slug: 'functional-element',
        paths: ['functional-element/bundle.js'],
        docs: 'https://github.com/lastmjs/functional-element',
        demo: './functional-element',
        wc: true,
        new: true,
    }, {
        name: 'Solid Components',
        slug: 'solid',
        paths: ['solid/bundle.js'],
        docs: 'https://github.com/ryansolid/solid-components',
        demo: './solid',
        wc: true,
        new: true,
    }, {
        name: 'Lit-Element v2.1',
        slug: 'lit-element-2.1',
        paths: ['lit-element-2.1/dist/main.js'],
        docs: 'https://github.com/Polymer/lit-element',
        demo: './lit-element-2.1',
        group: 'lit-element',
        wc: true,
        new: true,
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
        name: 'Stencil v0.16',
        slug: 'stencil',
        paths: [`stencil-0.16/build/app/${stencil016Info.core}`, `stencil-0.16/build/app/${stencil016Info.components['my-todo'].bundleIds.$}.entry.js`],
        docs: 'https://stenciljs.com',
        demo: './stencil-0.16',
        group: 'stencil',
        wc: true,
        new: true,
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
    }],
    legacy: {
        'lit-element': [{
            name: 'Lit-Element v0.6',
            slug: 'lit-element-0.6',
            paths: ['lit-element-0.6/dist/main.js'],
            docs: 'https://github.com/Polymer/lit-element',
            demo: './lit-element-0.6',
            group: 'lit-element',
            wc: true,
        }],
        stencil: [{
            name: 'Stencil v0.11',
            slug: 'stencil',
            paths: [`stencil-0.11/build/app/${stencil011Info.core}`, `stencil-0.11/build/app/${stencil011Info.components['my-todo'].bundleIds.$}.js`],
            docs: 'https://stenciljs.com',
            demo: './stencil-0.11',
            wc: true,
            new: true,
        }
        ]
    }
};