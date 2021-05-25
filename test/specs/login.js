import Login from '../classes/pages/login.page';

describe('Elements-displayed', () => {

    before(() => {
        Login.openLoginPage()
    })

    it('Logo', () => {
        expect($('#logo')).toBeDisplayed()
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
        browser.url('/')
        $('#btn-forgot').click();
        expect(browser).toHaveUrl('http://qa.intgames.org/forgot');
    })

    it('Forgot-page-displayed', () => {
        $('#forgot-page').waitForDisplayed()
    })

    it('Error-for-both-fields-empty', () => {
        browser.url('/');
        $('#btn-login').click();
        expect($('#error-text')).toHaveText('Please specify email and password')
    })

    it('Error-for-empty-login', () => {
        browser.url('/');
        $('#pass').setValue('value')
        $('#btn-login').click();
        expect($('#error-text')).toHaveText('Please specify email and password')
    })

    it('Error-disappears-on-input-in-email', () => {
        $('#username').setValue('value')
        $('#error-text').waitForDisplayed({ reverse: true })
    })

    it('Error-for-empty-password', () => {
        browser.url('/');
        $('#username').setValue('value')
        $('#btn-login').click();
        expect($('#error-text')).toHaveText('Please specify email and password')
    })

    it('Error-disappears-on-input-in-password', () => {
        $('#pass').setValue('value')
        $('#error-text').waitForDisplayed({ reverse: true })
    })

    it('Error-for-incorrect-email', () => {
        browser.url('/');
        $('#username').setValue('value')
        $('#pass').setValue('value')
        $('#btn-login').click();
        expect($('#error-text')).toHaveText('User with this email does not exist')
    })

    it('Error-for-incorrect-password', () => {
        browser.url('/');
        $('#username').setValue('info@techstart.dev')
        $('#pass').setValue('value')
        $('#btn-login').click();
        expect($('#error-text')).toHaveText('Password is incorrect')
    })

})