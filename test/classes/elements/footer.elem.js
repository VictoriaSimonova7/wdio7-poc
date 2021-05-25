import Base from '../base.class';

class Footer extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            ruLangToggle: 'RU'
        }
    }

    //element selectors
    get elem() { return $('#footer') }
    get langToggle() { return $('#RU-lang-toggle') }

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

}

export default new Footer;