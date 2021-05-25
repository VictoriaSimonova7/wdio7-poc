import Base from '../base.class';

class Footer extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            //expected results for this page
        }
    }

    //element selectors
    get page() { return $('#footer') }

    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

}

export default new Footer;