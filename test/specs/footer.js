import Login from '../classes/pages/login.page';
import Footer from '../classes/elements/footer.elem';

describe('Elements-displayed', () => {

    before(() => {
        Login.openPage()
    })

    it('Footer', () => {
        Footer.checkElement()
    })

    it('Language-toggle', () => {
        Footer.checkLangToggle()
    })

    it('Copyright', () => {
        Footer.checkCopyright()
    })

    it('Version-label', () => {
        Footer.checkVersionLabel()
    })

    it('Version-number', () => {
        Footer.checkVersionNumber()
    })

    it('Developer-prepend', () => {
        Footer.checkDevPrepend()
    })

    it('Developer-link', () => {
        Footer.checkDevLink()
    })

})

describe('Elements-values', () => {

    it('Language-toggle', () => {
        Footer.checkLangToggleValue()
    })

    it('Copyright', () => {
        Footer.checkCopyrightValue()
    })

    it('Version-label', () => {
        Footer.checkVersionValue()
    })

    it('Developer-prepend', () => {
        Footer.checkDevPrependValue()
    })

    it('Developer-link', () => {
        Footer.checkDevLinkValue()
    })

})