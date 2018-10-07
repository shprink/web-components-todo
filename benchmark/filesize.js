const fs = require("fs");
const zlib = require('zlib');
const chart = require('ascii-horizontal-barchart')

const filesize = () => projects.reduce((previous, project) => {
    previous[project.name] = project.paths.reduce((previous, current) => {
        const exists = fs.existsSync(`dist/${current}`);
        if (!exists) return undefined;
        return previous + fs.statSync(`/dist/${current}`).size
    }, 0);
    return previous;
}, {})


// console.log(stats)
// console.log(chart(filesize(), true, 30))


// Gzipped
// const filesizeGzipped = (list) => list.reduce((previous, project) => {
//     previous[project.name] = project.paths.reduce((previous, current) => {
//         const exists = fs.existsSync(`dist/${current}`);
//         if (!exists) return undefined;
//         const fileContents = fs.readFileSync(`dist/${current}`)
//         const zippedContent = zlib.gzipSync(fileContents.toString());
//         fs.writeFileSync(`dist/${current}.gzip`, zippedContent)
//         return previous + fs.statSync(`dist/${current}.gzip`).size
//     }, 0);
//     return previous;
// }, {});

const filesizeGzipped = (list) => list.map(project => ({
    ...project,
    size: project.paths.reduce((previous, current) => {
        const exists = fs.existsSync(`dist/${current}`);
        if (!exists) return undefined;
        const fileContents = fs.readFileSync(`dist/${current}`)
        const zippedContent = zlib.gzipSync(fileContents.toString());
        fs.writeFileSync(`dist/${current}.gzip`, zippedContent)
        return previous + fs.statSync(`dist/${current}.gzip`).size
    }, 0),
})).sort((a, b) => a.size - b.size);


// console.log(filesizeGzipped())
// console.log(chart(filesizeGzipped(), true, 30))

module.exports = {
    filesize,
    filesizeGzipped
}