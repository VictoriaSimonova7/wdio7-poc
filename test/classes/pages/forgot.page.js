import Base from '../base.class';

class Forgot extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            //expected results for this page
        }
    }

    //element selectors
    get page() { return $('#forgot-page') }

    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

}

export default new Forgot;