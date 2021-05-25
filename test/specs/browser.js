import Login from '../classes/pages/login.page';

describe('Page-level-tests', () => {

    before(() => {
        Login.openLoginPage()
    })

    it('Page-title', () => {
        Login.checkTabTitle()
    })

    it('Page-URL', () => {
        Login.checkBaseUrl()
    })

})