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
    get remindPasswordBtn() { return $('#btn-forgot') }
    get loginBtn() { return $('#btn-login') }
    get logo() { return $('#logo') }

    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

    remindPassClick() {
        this.remindPasswordBtn.click();
    }

    loginClick() {
        this.loginBtn.click();
    }

    checkLogo() {
        expect(this.logo).toBeDisplayed()
    }

}

export default new Login;