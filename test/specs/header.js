import Header from '../classes/elements/header.elem';

describe('Elements-displayed', () => {

    before(() => {
        Header.openLoginPage()
    })

    it('Header', () => {
        expect($('#header')).toBeDisplayed()
    })

    it('Ratings-button', () => {
        expect($('#btn-all')).toBeDisplayed()
    })

    it('Public-game-button', () => {
        expect($('#btn-game')).toBeDisplayed()
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

})