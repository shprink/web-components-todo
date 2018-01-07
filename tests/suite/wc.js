const path = require('path');
const url = `file:///${path.join(__dirname, '../..')}/native/index.html`;

const pause = 200;
const wait = 5000;

module.exports = {
    '@tags': ['wc'],
    'Todo sequence': browser =>
        browser.url(url)
            .waitForElementVisible('#new-todo', wait)
            .waitForElementVisible('todo-item[text="my initial todo"]', wait)
            .addItem('first added todo', wait)
            .pause(pause)
            .addItem('second added todo', wait)
            .pause(pause)
            .checkItem('first added todo', wait)
            .pause(pause)
            .uncheckItem('first added todo', wait)
            .pause(pause)
            .removeItem('first added todo', wait)
            .pause(pause)
            .removeItem('second added todo', wait)
            .pause(pause)
            .removeItem('Learn about Web Components', wait)
            .pause(pause)
            .removeItem('my initial todo', wait)
            .pause(pause)
            .end(),
};
