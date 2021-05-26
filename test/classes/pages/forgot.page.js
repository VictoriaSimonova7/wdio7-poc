import Base from '../base.class';

class Forgot extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            url: 'http://qa.intgames.org/forgot',
            emailPlaceholder: 'Email *',
            remindBtn: 'Remind Password'
        }
    }

    //element selectors
    get page() { return $('#forgot-page') }
    get logo() { return $('#logo') }
    get email() { return $('#email') }
    get remindBtn() { return $('#btn-remind') }

    //methods
    openPage() {
        browser.url('/forgot')
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

    checkLogo() {
        expect(this.logo).toBeDisplayed()
    }

    checkEmail() {
        expect(this.email).toBeDisplayed()
    }

    checkEmailPlaceholder() {
        expect(this.email).toHaveAttribute('placeholder', this.exp.emailPlaceholder)
    }

    checkRemindBtn() {
        expect(this.remindBtn).toBeDisplayed()
    }

    checkRemindBtnValue() {
        expect(this.remindBtn).toHaveText(this.exp.remindBtn)
    }

    remindBtnClick() {
        this.remindBtn.click();
    }

    enterToEmail(value) {
        this.email.setValue(value)
    }

}

export default new Forgot;