import Login from '../classes/pages/login.page';

describe('Page-level-tests', () => {

    before(() => {
        Login.openPage()
    })

    it('Page-title', () => {
        Login.checkTabTitle()
    })

    it('Page-URL', () => {
        Login.checkUrl()
    })

})