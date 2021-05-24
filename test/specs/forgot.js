describe('Elements-displayed', () => {

    before(() => {
        browser.url('/forgot');
    })

    it('Header', () => {
        expect($('#header')).toBeDisplayed()
    })

    it('Back-button', () => {
        expect($('#btn-login')).toBeDisplayed()
    })

    it('Ratings-button', () => {
        expect($('#btn-all')).toBeDisplayed()
    })

    it('Public-game-button', () => {
        expect($('#btn-game')).toBeDisplayed()
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

    it('Footer', () => {
        expect($('#footer')).toBeDisplayed()
    })

    it('Language-toggle', () => {
        expect($('#RU-lang-toggle')).toBeDisplayed()
    })

    it('Copyright', () => {
        expect($('#copyright-text')).toBeDisplayed()
    })

    it('Version-label', () => {
        expect($('#version-label')).toBeDisplayed()
    })

    it('Version-number', () => {
        expect($('#version-value')).toBeDisplayed()
    })

    it('Developer-prepend', () => {
        expect($('#deeveloper-prepend')).toBeDisplayed()
    })

    it('Developer-link', () => {
        expect($('#developer-link')).toBeDisplayed()
    })

})

describe('Elements-values', () => {

    it('Email-placeholder', () => {
        expect($('input[type="email"]')).toHaveAttribute('placeholder', 'Email *')
    })

    it('Remind-button', () => {
        expect($('#btn-remind')).toHaveText('Remind Password')
    })

    it('Language-toggle', () => {
        expect($('#RU-lang-toggle')).toHaveText('RU')
    })

    it('Copyright', () => {
        expect($('#copyright-text')).toHaveText('© Mafia Club Portal')
    })

    it('Version-label', () => {
        expect($('#version-label')).toHaveText('Version')
    })

    it('Developer-prepend', () => {
        expect($('#deeveloper-prepend')).toHaveText('Website by')
    })

    it('Developer-link', () => {
        expect($('#developer-link')).toHaveText('React Smart Development')
    })

})

describe('Functionality', () => {

    it('Back-to-login-is-displayed', () => {
        $('#header #btn-login').waitForDisplayed()
    })

    it('Back-to-login-button-redirect', () => {
        $('#header #btn-login').click();
        expect(browser).toHaveUrl('http://qa.intgames.org/');
    })

    it('Login-page-displayed', () => {
        $('#login-page').waitForDisplayed()
    })

    it('Error-for-email-empty', () => {
        browser.url('/forgot');
        $('#btn-remind').click();
        expect($('#error-text')).toHaveText('Please specify email')
    })

    it('Error-for-incorrect-email', () => {
        browser.url('/forgot');
        $('#email').setValue('value')
        $('#btn-remind').click();
        expect($('#error-text')).toHaveText('User with this email does not exist')
    })

    it('Error-disappears-on-input-in-email', () => {
        $('#email').setValue('value')
        $('#error-text').waitForDisplayed({ reverse: true })
    })

    it('Success-for-correct-email', () => {
        browser.url('/forgot');
        $('#email').setValue('info@techstart.dev')
        $('#btn-remind').click();
        expect($('#error-text')).toHaveText('Password reminder sent')
    })

    it('User-is-redirected-to-login', () => {
        expect(browser).toHaveUrl('http://qa.intgames.org/', { wait: 4000 })
    })

})