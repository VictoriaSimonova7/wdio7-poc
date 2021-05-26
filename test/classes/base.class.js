class Base {

    constructor() {
        this.baseExp = {
            title: 'Mafia Club Portal',
            url: 'http://qa.intgames.org/'
        }
    }

    get errorMessage() { return $('#error-text') }

    //methods

    checkTabTitle() {
        expect(browser).toHaveTitle(this.baseExp.title)
    }

    checkErrorMessageText(text) {
        expect(this.errorMessage).toHaveText(text)
    }

    checkErrorAppears() {
        this.errorMessage.waitForDisplayed()
    }

    checkErrorDisappears() {
        this.errorMessage.waitForDisplayed({ reverse: true })
    }

}

export default Base;