describe('Page-level-tests', () => {

    before(() => {
        browser.url('/');
    })

    it('Page-title', () => {
        expect(browser).toHaveTitle('Mafia Club Portal')
    })
    
    it('Page-URL', () => {
        expect(browser).toHaveUrl('http://qa.intgames.org/')
    })

})

describe('Elements-displayed', () => {

    it('Header', () => {
        expect($('#header')).toBeDisplayed()
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

    it('Password-placeholder', () => {
        expect($('input[type="password"]')).toHaveAttribute('placeholder', 'Password *')
    })

    it('Login-button', () => {
        expect($('#btn-login')).toHaveText('Login')
    })

    it('Remind-button', () => {
        expect($('#btn-forgot')).toHaveText('Remind Password')
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

    it('Back-to-login-missing', () => {
        $('#header #btn-login').waitForDisplayed({ reverse: true })
    })

    it('Ratings-button-redirect', () => {
        $('#btn-all').click();
        expect(browser).toHaveUrl('http://qa.intgames.org/users');
    })

    it('Ratings-page-displayed', () => {
        $('#ratings').waitForDisplayed()
    })

    it('Public-game-button-redirect', () => {
        $('#btn-game').click();
        expect(browser).toHaveUrl('http://qa.intgames.org/public-game');
    })

    it('Public-game-page-displayed', () => {
        $('#public-game').waitForDisplayed()
    })

    it('Remind-password-button-redirect', () => {
        browser.url('/')
        $('#btn-forgot').click();
        expect(browser).toHaveUrl('http://qa.intgames.org/forgot');
    })

    it('Public-game-page-displayed', () => {
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