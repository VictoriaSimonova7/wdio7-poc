import Base from '../base.class';

class Login extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            //expected results for this page
        }
    }

    //element selectors
    get page() { return $('#login-page') }

    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

}

export default new Login;