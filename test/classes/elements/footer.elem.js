import Base from '../base.class';

class Footer extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            ruLangToggle: 'RU',
            copyright: '© Mafia Club Portal',
            version: 'Version',
            devPrepend: 'Website by',
            devLink: 'React Smart Development'
        }
    }

    //element selectors
    get elem() { return $('#footer') }
    get langToggle() { return $('#RU-lang-toggle') }
    get copyright() { return $('#copyright-text') }
    get versionLabel() { return $('#version-label') }
    get versionValue() { return $('#version-value') }
    get devPrepend() { return $('#deeveloper-prepend') }
    get devLink() { return $('#developer-link') }

    //methods
    checkElement() {
        this.elem.waitForDisplayed();
    }

    checkLangToggle() {
        expect(this.langToggle).toBeDisplayed()
    }

    checkLangToggleValue() {
        expect(this.langToggle).toHaveText(this.exp.ruLangToggle)
    }

    checkCopyright() {
        expect(this.copyright).toBeDisplayed()
    }

    checkCopyrightValue() {
        expect(this.copyright).toHaveText(this.exp.copyright)
    }

    checkVersionLabel() {
        expect(this.versionLabel).toBeDisplayed()
    }

    checkVersionValue() {
        expect(this.versionLabel).toHaveText(this.exp.version)
    }

    checkVersionNumber() {
        expect(this.versionValue).toBeDisplayed()
    }

    checkDevPrepend() {
        expect(this.devPrepend).toBeDisplayed()
    }

    checkDevPrependValue() {
        expect(this.devPrepend).toHaveText(this.exp.devPrepend)
    }

    checkDevLink() {
        expect(this.devLink).toBeDisplayed()
    }

    checkDevLinkValue() {
        expect(this.devLink).toHaveText(this.exp.devLink)
    }

}

export default new Footer;