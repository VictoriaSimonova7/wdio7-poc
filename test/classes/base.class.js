class Base {

    constructor() {

    }

    //methods
    openLoginPage() {
        browser.url('/');
    }

    openForgotPage() {
        browser.url('/forgot');
    }

}

export default Base;