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