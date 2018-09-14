const fs = require("fs");
const chart = require('ascii-horizontal-barchart')
const stencilInfo = require("../dist/stencil/build/app/app.registry.json");

const projects = [{
    name: 'lit-element',
    paths: ['lit-element/dist/main.js']
}, {
    name: 'native',
    paths: ['native/dist/main.js']
}, {
    name: 'polymer3',
    paths: ['polymer3/src/index.js']
}, {
    name: 'skatejs-lit-html',
    paths: ['skatejs-lit-html/dist/main.js']
}, {
    name: 'skatejs-preact',
    paths: ['skatejs-preact/dist/main.js']
}, {
    name: 'slimjs',
    paths: ['slimjs/main.js']
}, {
    name: 'stencil',
    paths: [`stencil/build/app/${stencilInfo.core}`, `stencil/build/app/${stencilInfo.components['my-todo'].bundleIds.$}.js`]
}, {
    name: 'svelte',
    paths: ['svelte/bundle.js']
}];

const stats = projects.reduce((previous, project) => {
    previous[project.name] = project.paths.reduce((previous, current) => {
        return previous + fs.statSync(`../dist/${current}`).size
    }, 0);
    return previous;
}, {})


console.log(stats)
console.log(chart(stats, true, 30))

