
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const _find = require('lodash/find');
const _set = require('lodash/set');
const fs = require('fs');
const path = require('path');
const express = require('express')


const PACKAGE_ROOT = path.join(__dirname, '..');
const DIST_FOLDER = path.join(PACKAGE_ROOT, 'dist');
// const CLIENT_NAME = process.argv[2] || 'http://localhost:3000';

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
const flags = {
  chromeFlags: ['--headless']
};

async function run() {
  const app = express()
  app.use(express.static(DIST_FOLDER));
  const server = app.listen(8080);

  // get all folders within DIST_FOLDER
  const folders = fs.readdirSync(DIST_FOLDER)
    .filter(f => fs.statSync(path.join(DIST_FOLDER, f)).isDirectory());
  const results = {};
  const tryNumber = 3;


  let promises = Promise.resolve();
  for (let i = 0; i < folders.length; i++) {
    const endpoint = folders[i];
    results[endpoint] = {
      performance: [],
      fmp: [],
      fcp: [],
    }

    for (let j = 0; j < tryNumber; j++) {
      promises = promises.then(() => {
        console.log(`running: http://localhost:8080/${endpoint}`);
        return launchChromeAndRunLighthouse(`http://localhost:8080/${endpoint}`, flags, config);
      }).then(({ categories, audits }) => {
        console.log('categories.performance', categories.performance.score)
        console.log('audits["first-meaningful-paint"]', audits["first-meaningful-paint"].rawValue)
        console.log('audits["first-contentful-paint"]', audits["first-contentful-paint"].rawValue)
        // console.log('results', endpoint, results)
        results[endpoint].performance.push(categories.performance.score);
        results[endpoint].fmp.push(audits["first-meaningful-paint"].rawValue);
        results[endpoint].fcp.push(audits["first-contentful-paint"].rawValue);
      });
    }
  };
  promises.then(() => {
    Object.keys(results).forEach(endpoint => {
      const { performance, fmp, fcp } = results[endpoint];
      const perf = parseFloat(performance.reduce(accumulate, 0) / tryNumber).toFixed(2);
      const fmpResult = Math.round(fmp.reduce(accumulate, 0) / tryNumber);
      const fcpResult = Math.round(fcp.reduce(accumulate, 0) / tryNumber);
      console.log(`-----${endpoint}-----`)
      console.log('performance note', perf)
      console.log('first-contentful-paint', fcpResult + ' ms')
      console.log('first-meaningful-paint', fmpResult + ' ms')
    });
    server.close();
  });
}

run();

function accumulate(previous, current) {
  return previous + current;
}

function launchChromeAndRunLighthouse(url, flags = {}, config = null) {
  return chromeLauncher.launch(flags).then(chrome => {
    flags.port = chrome.port;
    return lighthouse(url, flags, config).then(results =>
      chrome.kill().then(() => results.lhr));
  });
}