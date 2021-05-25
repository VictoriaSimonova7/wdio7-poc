describe('Page-level-tests', () => {

    before(() => {
        browser.url('/');
    })

    it('Page-title', () => {
        expect(browser).toHaveTitle('Mafia Club Portal')
    })

    it('Page-URL', () => {
        expect(browser).toHaveUrl('http://qa.intgames.org/')
    })

})