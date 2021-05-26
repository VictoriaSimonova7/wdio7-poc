import Base from '../base.class';

class Login extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            url: 'http://qa.intgames.org/',
            emailPlaceholder: 'Email *',
            passPlaceholder: 'Password *',
            loginBtn: 'Login',
            remindBtn: 'Remind Password'
        }
    }

    //element selectors
    get page() { return $('#login-page') }
    get logo() { return $('#logo') }
    get email() { return $('#username') }
    get pass() { return $('#pass') }
    get remindBtn() { return $('#btn-forgot') }
    get loginBtn() { return $('#btn-login') }

    //methods
    openPage() {
        browser.url('/')
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

    checkUrlWithDelay(delay) {
        expect(browser).toHaveUrl(this.exp.url, { wait: delay })
    }   

    remindPassClick() {
        this.remindBtn.click();
    }

    loginClick() {
        this.loginBtn.click();
    }

    checkLogo() {
        expect(this.logo).toBeDisplayed()
    }

    checkEmail() {
        expect(this.email).toBeDisplayed()
    }

    checkPass() {
        expect(this.pass).toBeDisplayed()
    }

    checkLoginBtn() {
        expect(this.loginBtn).toBeDisplayed()
    }

    checkRemindBtn() {
        expect(this.remindBtn).toBeDisplayed()
    }

    checkEmailPlaceholder() {
        expect(this.email).toHaveAttribute('placeholder', this.exp.emailPlaceholder)
    }

    checkPassPlaceholder() {
        expect(this.pass).toHaveAttribute('placeholder', this.exp.passPlaceholder)
    }

    checkLoginText() {
        expect(this.loginBtn).toHaveText(this.exp.loginBtn)
    }

    checkRemindText() {
        expect(this.remindBtn).toHaveText(this.exp.remindBtn)
    }

    enterToEmail(value) {
        this.email.setValue(value)
    }

    enterToPass(value) {
        this.pass.setValue(value)
    }

}

export default new Login;