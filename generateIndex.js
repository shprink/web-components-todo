const fs = require('fs');
const ejs = require('ejs');
const benchmark = require('./benchmark/filesize.js');
const projectsMetas = require('./benchmark/meta');

const metasWithBytes = benchmark.filesizeGzipped(projectsMetas);
const metasWithKb = metasWithBytes.map((project) => ({
    ...project,
    size: project.size / 1000,
}));
const maxSize = Math.max(...metasWithKb.map(project => project.size));
const WCprojects = metasWithKb.filter(project => project.wc);
const NonWCprojects = metasWithKb.filter(project => !project.wc);

ejs.renderFile('./index.ejs', {
    WCprojects,
    NonWCprojects,
    maxSize,
}, {}, function (err, str) {
    fs.writeFile('dist/index.html', str, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});