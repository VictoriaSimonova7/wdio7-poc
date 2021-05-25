import Login from '../classes/pages/login.page';

describe('Page-level-tests', () => {

    before(() => {
        Login.openLoginPage()
    })

    it('Page-title', () => {
        expect(browser).toHaveTitle('Mafia Club Portal')
    })

    it('Page-URL', () => {
        expect(browser).toHaveUrl('http://qa.intgames.org/')
    })

})