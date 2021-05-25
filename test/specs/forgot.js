import Forgot from '../classes/pages/forgot.page';

describe('Elements-displayed', () => {

    before(() => {
        Forgot.openForgotPage()
    })

    it('Logo', () => {
        expect($('#logo')).toBeDisplayed()
    })

    it('Email-field', () => {
        expect($('#email')).toBeDisplayed()
    })

    it('Remind-button', () => {
        expect($('#btn-remind')).toBeDisplayed()
    })

})

describe('Elements-values', () => {

    it('Email-placeholder', () => {
        expect($('input[type="email"]')).toHaveAttribute('placeholder', 'Email *')
    })

    it('Remind-button', () => {
        expect($('#btn-remind')).toHaveText('Remind Password')
    })

})

describe('Functionality', () => {

    it('Error-for-email-empty', () => {
        Forgot.openForgotPage()
        $('#btn-remind').click();
        Forgot.checkErrorMessage('Please specify email');
    })

    it('Error-for-incorrect-email', () => {
        Forgot.openForgotPage()
        $('#email').setValue('value')
        $('#btn-remind').click();
        expect($('#error-text')).toHaveText('User with this email does not exist')
    })

    it('Error-disappears-on-input-in-email', () => {
        $('#email').setValue('value')
        $('#error-text').waitForDisplayed({ reverse: true })
    })

    it('Success-for-correct-email', () => {
        Forgot.openForgotPage()
        $('#email').setValue('info@techstart.dev')
        $('#btn-remind').click();
        expect($('#error-text')).toHaveText('Password reminder sent')
    })

    it('User-is-redirected-to-login', () => {
        expect(browser).toHaveUrl('http://qa.intgames.org/', { wait: 4000 })
    })

})