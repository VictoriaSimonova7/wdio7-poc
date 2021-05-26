import Base from '../base.class';

class PublicGame extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            url: 'http://qa.intgames.org/public-game'
        }
    }

    //element selectors
    get page() { return $('#public-game') }

    //methods
    openPage() {
        browser.url('/public-game')
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

}

export default new PublicGame;