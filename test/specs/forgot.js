import Forgot from '../classes/pages/forgot.page';
import Login from '../classes/pages/login.page';

describe('Elements-displayed', () => {

    before(() => {
        Forgot.openPage()
    })

    it('Logo', () => {
        Forgot.checkLogo()
    })

    it('Email-field', () => {
        Forgot.checkEmail()
    })

    it('Remind-button', () => {
        Forgot.checkRemindBtn()
    })

})

describe('Elements-values', () => {

    it('Email-placeholder', () => {
        Forgot.checkEmailPlaceholder()
    })

    it('Remind-button', () => {
        Forgot.checkRemindBtnValue()
    })

})

describe('Functionality', () => {

    it('Error-for-email-empty', () => {
        Forgot.openPage()
        Forgot.remindBtnClick()
        Forgot.checkErrorMessageText('Please specify email');
    })

    it('Error-for-incorrect-email', () => {
        Forgot.openPage()
        Forgot.enterToEmail('something')
        Forgot.remindBtnClick()
        Forgot.checkErrorMessageText('User with this email does not exist');
    })

    it('Error-disappears-on-input-in-email', () => {
        Forgot.enterToEmail('something')
        Forgot.checkErrorDisappears()
    })

    it('Success-for-correct-email', () => {
        Forgot.openPage()
        Forgot.enterToEmail('info@techstart.dev')
        Forgot.remindBtnClick()
        Forgot.checkErrorMessageText('Password reminder sent')
    })

    it('User-is-redirected-to-login', () => {
        Login.checkUrlWithDelay(4000)
    })

})