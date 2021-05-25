import Base from '../base.class';

class Forgot extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            url: 'http://qa.intgames.org/forgot'
        }
    }

    //element selectors
    get page() { return $('#forgot-page') }

    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

}

export default new Forgot;