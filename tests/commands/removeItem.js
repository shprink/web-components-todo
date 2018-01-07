exports.command = function (text, wait) {
    return this
        .assert.elementPresent(`todo-item[text="${text}"] button`)
        .click(`todo-item[text="${text}"] button`, () => console.log('eee'))
        .waitForElementNotPresent(`todo-item[text="${text}"]`, wait)
        .assert.elementNotPresent(`todo-item[text="${text}"]`)
};
