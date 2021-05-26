import Login from '../classes/pages/login.page'
import Header from '../classes/elements/header.elem'
import Forgot from '../classes/pages/forgot.page'
import Ratings from '../classes/pages/users.page'
import PublicGame from '../classes/pages/public-game.page'

describe('Elements-displayed', () => {

    before(() => {
        Login.openPage()
    })

    it('Header', () => {
        Header.checkPage()
    })

    it('Ratings-button', () => {
        Header.checkRatingsBtn()
    })

    it('Public-game-button', () => {
        Header.checkPublicGameBtn()
    })

    it('Back-button', () => {
        Forgot.openPage()
        Header.checkBackToLoginBtn()
    })

})

describe('Functionality', () => {

    before(() => {
        Login.openPage()
    })

    it('Back-to-login-missing', () => {
        Header.checkBackToLoginBtnMissing()
    })

    it('Ratings-button-redirect', () => {
        Header.ratingsBtnClick()
        Ratings.checkUrl()
    })

    it('Ratings-page-displayed', () => {
        Ratings.checkPage()
    })

    it('Public-game-button-redirect', () => {
        Header.gameBtnClick()
        PublicGame.checkUrl()
    })

    it('Public-game-page-displayed', () => {
        PublicGame.checkPage()
    })

    it('Back-to-login-is-displayed', () => {
        Header.checkBackToLoginBtn()
    })

    it('Back-to-login-button-redirect', () => {
        Header.backToLoginBtnClick()
        Login.checkUrl()
    })

    it('Login-page-displayed', () => {
       Login.checkPage()
    })

})