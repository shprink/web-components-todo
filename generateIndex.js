const fs = require('fs');
const ejs = require('ejs');
const benchmark = require('./benchmark/filesize.js');
const { legacy, latest } = require('./benchmark/meta');

const latestWithBytes = benchmark.filesizeGzipped(latest);
const metasWithKb = latestWithBytes.map((project) => ({
    ...project,
    size: project.size / 1000,
    group: project.group ? benchmark.filesizeGzipped(legacy[project.group]).map((project) => ({
        ...project,
        size: project.size / 1000,
    })) : null,
}));

console.log('metasWithKb', metasWithKb)
const maxSize = Math.max(...metasWithKb.map(project => project.size));
const WCprojects = metasWithKb.filter(project => project.wc);
const NonWCprojects = metasWithKb.filter(project => !project.wc);

ejs.renderFile('./templates/index.ejs', {
    WCprojects,
    NonWCprojects,
    maxSize,
}, {}, function (err, str) {
    fs.writeFile('dist/index.html', str, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});