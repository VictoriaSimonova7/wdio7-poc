describe('Elements-displayed', () => {

    before(() => {
        browser.url('/');
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



})