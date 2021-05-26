import Base from '../base.class';

class Ratings extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            url: 'http://qa.intgames.org/users'
        }
    }

    //element selectors
    get page() { return $('#ratings') }

    //methods
    openPage() {
        browser.url('/users')
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

}

export default new Ratings;