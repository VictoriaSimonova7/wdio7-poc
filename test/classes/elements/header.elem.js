import Base from '../base.class';

class Header extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            //expected results for this page
        }
    }

    //element selectors
    get page() { return $('#header') }

    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

}

export default new Header;