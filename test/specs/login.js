import Login from '../classes/pages/login.page';
import Forgot from '../classes/pages/forgot.page';

describe('Elements-displayed', () => {

    before(() => {
        Login.openLoginPage()
    })

    it('Logo', () => {
        Login.checkLogo()
    })

    it('Email-field', () => {
        expect($('#username')).toBeDisplayed()
    })

    it('Password-field', () => {
        expect($('#pass')).toBeDisplayed()
    })

    it('Login-button', () => {
        expect($('#btn-login')).toBeDisplayed()
    })

    it('Remind-button', () => {
        expect($('#btn-forgot')).toBeDisplayed()
    })

})

describe('Elements-values', () => {

    it('Email-placeholder', () => {
        expect($('input[type="email"]')).toHaveAttribute('placeholder', 'Email *')
    })

    it('Password-placeholder', () => {
        expect($('input[type="password"]')).toHaveAttribute('placeholder', 'Password *')
    })

    it('Login-button', () => {
        expect($('#btn-login')).toHaveText('Login')
    })

    it('Remind-button', () => {
        expect($('#btn-forgot')).toHaveText('Remind Password')
    })

})

describe('Functionality', () => {

    it('Remind-password-button-redirect', () => {
        Login.remindPassClick();
        Forgot.checkUrl()
    })

    it('Forgot-page-displayed', () => {
        Forgot.checkPage()
    })

    it('Error-for-both-fields-empty', () => {
        Login.openLoginPage()
        Login.loginClick()
        Login.checkErrorMessage('Please specify email and password')
    })

    it('Error-for-empty-login', () => {
        Login.openLoginPage()
        $('#pass').setValue('value')
        $('#btn-login').click();
        Login.checkErrorMessage('Please specify email and password')
    })

    it('Error-disappears-on-input-in-email', () => {
        $('#username').setValue('value')
        $('#error-text').waitForDisplayed({ reverse: true })
    })

    it('Error-for-empty-password', () => {
        Login.openLoginPage()
        $('#username').setValue('value')
        $('#btn-login').click();

    })

    it('Error-disappears-on-input-in-password', () => {
        $('#pass').setValue('value')
        $('#error-text').waitForDisplayed({ reverse: true })
    })

    it('Error-for-incorrect-email', () => {
        Login.openLoginPage()
        $('#username').setValue('value')
        $('#pass').setValue('value')
        $('#btn-login').click();
        expect($('#error-text')).toHaveText('User with this email does not exist')
    })

    it('Error-for-incorrect-password', () => {
        Login.openLoginPage()
        $('#username').setValue('info@techstart.dev')
        $('#pass').setValue('value')
        $('#btn-login').click();
        expect($('#error-text')).toHaveText('Password is incorrect')
    })

})