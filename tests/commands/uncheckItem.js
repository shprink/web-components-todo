exports.command = function (text, wait) {
    return this
        .assert.cssClassPresent(`todo-item[text="${text}"] > li`, 'completed')
        .click(`todo-item[text="${text}"] input[type="checkbox"]`)
        .assert.cssClassNotPresent(`todo-item[text="${text}"] > li`, 'completed')
};
