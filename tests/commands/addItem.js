exports.command = function (text, wait) {
    return this.setValue('#new-todo', text)
        .sendKeys('#new-todo', this.Keys.ENTER)
        .waitForElementVisible(`todo-item[text="${text}"]`, wait)
        .assert.cssClassNotPresent(`todo-item[text="${text}"]`, 'completed');
};
