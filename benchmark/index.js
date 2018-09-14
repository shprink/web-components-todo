
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const _find = require('lodash/find');
const _set = require('lodash/set');

const config = {
    "extends": "lighthouse:default",
    "settings": {
        "onlyCategories": ["performance"]
    },
    "categories": {
        "performance": {
            "weight": 1
        }
    }
};

function launchChromeAndRunLighthouse(url, flags = {}, config = null) {
    return chromeLauncher.launch(flags).then(chrome => {
        flags.port = chrome.port;
        return lighthouse(url, flags, config).then(results =>
            chrome.kill().then(() => results));
    });
}

const flags = {
    chromeFlags: ['--headless']
};

const endpoints = ['native', 'stencil', 'stencil-prerendered', 'lit-element', 'polymer2', 'polymer3', 'angular-elements', 'vue', 'skatejs-lit-html', 'skatejs-preact', 'svelte', 'slimjs'];
const results = {};
const tryNumber = 5;

let promises = Promise.resolve();
for (let i = 0; i < endpoints.length; i++) {
    const endpoint = endpoints[i];
    _set(results, `[${endpoint}].performance`, []);
    _set(results, `[${endpoint}].fmp`, []);

    for (let j = 0; j < tryNumber; j++) {
        promises = promises.then(() => {
            console.log(`running: https://wc-todo.firebaseapp.com/${endpoint}`);
            return launchChromeAndRunLighthouse(`https://wc-todo.firebaseapp.com/${endpoint}`, flags, config);
        }).then(r => {
            const perf = r.reportCategories[0].score;
            const fmp = _find(r.reportCategories[0].audits, { "id": "first-meaningful-paint" }).result.rawValue;
            console.log(perf, fmp)
            results[endpoint].performance.push(perf);
            results[endpoint].fmp.push(fmp);
        });
    }
};
promises.then(() => {
    Object.keys(results).forEach(endpoint => {
        const { performance, fmp } = results[endpoint];
        const perf = Math.round(performance.reduce((previous, current) => {
            return previous + current;
        }, 0) / tryNumber);
        const firstMeaningfull = Math.round(fmp.reduce((previous, current) => {
            return previous + current;
        }, 0) / tryNumber);
        console.log(`-----${endpoint}-----`)
        console.log('performance note', perf)
        console.log('first-meaningful-paint', firstMeaningfull + ' ms')
    });
})