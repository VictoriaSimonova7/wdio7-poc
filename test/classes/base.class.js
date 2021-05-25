class Base {

    constructor() {
        this.baseExp = {
            title: 'Mafia Club Portal',
            url: 'http://qa.intgames.org/'
        }
    }

    get errorMessage() { return $('#error-text') }

    //methods
    openLoginPage() {
        browser.url('/');
    }

    openForgotPage() {
        browser.url('/forgot');
    }

    checkTabTitle() {
        expect(browser).toHaveTitle(this.baseExp.title)
    }

    checkBaseUrl() {
        expect(browser).toHaveUrl(this.baseExp.url)
    }

    checkErrorMessage(text) {
        expect(this.errorMessage).toHaveText(text)
    }

}

export default Base;