import Footer from '../classes/elements/footer.elem';

describe('Elements-displayed', () => {

    before(() => {
        Footer.openLoginPage()
    })

    it('Footer', () => {
        Footer.checkElement()
    })

    it('Language-toggle', () => {
        Footer.checkLangToggle()
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
        Footer.checkLangToggleValue()
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