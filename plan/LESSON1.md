## 1. WebDriverIO. Installation and initial configuration. Babel setup. Allure reporter. First tests.
1. Create a folder for storing the Automation project and open it with VS Code:
- `File => Open` on Mac
- `File => Open Folder` on Windows

2. Open Terminal:
- `Terminal => New Terminal`
3. Initialize Node.js project:
````
npm init -y
````
4. Install WDIO CLI:
````
npm install @wdio/cli
````
5. Launch initial configuration guide:
````
npx wdio config
````
and select/specify the following options:
- select `On my local machine`
- select `mocha`
- select `Babel`
- type `./test/specs/*.js`
- type `N`
- select `spec` and `allure`
- select `chromedriver`
- type `http://qa.intgames.org`

Wait till the end of the installation.

6. Install Sync WDIO module:
```
npm i @wdio/sync
```

7. Create `test` folder, then `specs` folder inside of it and finally `test.js` file in `specs` folder. Paste the following code into the file:
````
describe('Elements', () => {

    it('Page-title-is-correct', () => {
        browser.url('/');
        const title = browser.getTitle();
        console.log('Title is: ' + title);
    })

    it('Page-URL-is-correct', () => {
        const URL = browser.getUrl();
        console.log('URL is: ' + URL);
    })

})
````

8. Run your firts test:
````
npx wdio run ./wdio.conf.js
````

9. Replace `test` script in `package.json` by:
````
"test": "npx wdio run ./wdio.conf.js"
````
Now you can trigger the test by running `npm run test` or `npm test` or `npm t`.

10. Install Allure commandline:
````
npm install -g allure-commandline
````

11. Generate Allure report from results:
````
allure generate
````

12. Open Allure report:
````
allure open
````

13. Add `report` script to `package.json`:
````
"report": "allure generate && allure open"
````

14. Create `.gitignore` file with the following code:
````
node_modules
allure-report
allure-results
temp
````

15. Use [WebDriverIO API reference](https://webdriver.io/docs/api) to add more method and `expect` validations.

16. Use [Jest's Expect library](https://jestjs.io/docs/expect) to add more `expect` validarions.

17. Use [CSS Selectors guide](https://dev.to/neutrino2211/using-css-selectors-in-javascript-3hlm) to find elements on a page.

18. Few common WebDriverIO commands to use:
````
browser.url('url')
$('selector').click()
$('selector').setValue('value')
$('selector').waitForDisplayed({ reverse: true })
expect(browser).toHaveUrl('expected-url')
expect(browser).toHaveTitle('expected-title')
expect($('selector')).toBeDisplayed()
expect($('selector')).toHaveAttribute('attributeName', 'value')
expect($('selector')).toHaveText('expected-value')
expect($('selector')).toHaveTextContaining('expected-value')
expect(value).toEqual(expected)
````

### Homework 1
- Finish `Elements-displayed` suite
- Finish `Elements-values` suite
- Rename `test.js` to `login.js`
- Create `forgot.js` file in `specs`
- Create and cover by tests the same suites as for Login page