import Login from '../classes/pages/login.page';
import Forgot from '../classes/pages/forgot.page';

describe('Elements-displayed', () => {

    before(() => {
        Login.openPage()
    })

    it('Logo', () => {
        Login.checkLogo()
    })

    it('Email-field', () => {
        Login.checkEmail()
    })

    it('Password-field', () => {
        Login.checkPass()
    })

    it('Login-button', () => {
        Login.checkLoginBtn()
    })

    it('Remind-button', () => {
        Login.checkRemindBtn()
    })

})

describe('Elements-values', () => {

    it('Email-placeholder', () => {
        Login.checkEmailPlaceholder()
    })

    it('Password-placeholder', () => {
        Login.checkPassPlaceholder()
    })

    it('Login-button', () => {
        Login.checkLoginText()
    })

    it('Remind-button', () => {
        Login.checkRemindText()
    })

})

describe('Functionality', () => {

    it('Remind-password-button-redirect', () => {
        Login.remindPassClick()
        Forgot.checkUrl()
    })

    it('Forgot-page-displayed', () => {
        Forgot.checkPage()
    })

    it('Error-for-both-fields-empty', () => {
        Login.openPage()
        Login.loginClick()
        Login.checkErrorMessageText('Please specify email and password')
    })

    it('Error-for-empty-login', () => {
        Login.openPage()
        Login.enterToPass('something')
        Login.loginClick()
        Login.checkErrorMessageText('Please specify email and password')
    })

    it('Error-disappears-on-input-in-email', () => {
        Login.enterToEmail('something')
        Login.checkErrorDisappears()
    })

    it('Error-for-empty-password', () => {
        Login.openPage()
        Login.enterToEmail('something')
        Login.loginClick()
        Login.checkErrorMessageText('Please specify email and password')
    })

    it('Error-disappears-on-input-in-password', () => {
        Login.enterToPass('something')
        Login.checkErrorDisappears()
    })

    it('Error-for-incorrect-email', () => {
        Login.openPage()
        Login.enterToEmail('something')
        Login.enterToPass('something')
        Login.loginClick()
        Login.checkErrorMessageText('User with this email does not exist')
    })

    it('Error-for-incorrect-password', () => {
        Login.openPage()
        Login.enterToEmail('info@techstart.dev')
        Login.enterToPass('something')
        Login.loginClick()
        Login.checkErrorMessageText('Password is incorrect')
    })

})