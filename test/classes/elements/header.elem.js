import Base from '../base.class';

class Header extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            //expected results for this page
        }
    }

    //element selectors
    get page() { return $('#header') }
    get ratingsBtn() { return $('#btn-all') }
    get publicGameBtn() { return $('#btn-game') }
    get backToLoginBtn() { return $('#header #btn-login') }
    get gameBtn() { return $('#btn-game') }

    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

    checkRatingsBtn() {
        expect(this.ratingsBtn).toBeDisplayed()
    }

    checkPublicGameBtn() {
        expect(this.publicGameBtn).toBeDisplayed()
    }

    checkBackToLoginBtn() {
        expect(this.backToLoginBtn).toBeDisplayed()
    }

    checkBackToLoginBtnMissing() {
        this.backToLoginBtn.waitForDisplayed({ reverse: true })
    }

    ratingsBtnClick() {
        this.ratingsBtn.click()
    }

    gameBtnClick() {
        this.gameBtn.click();
    }

    backToLoginBtnClick() {
        this.backToLoginBtn.click()
    }

}

export default new Header;