## 1. WebDriverIO. Installation and initial configuration. Babel setup. Allure reporter. First tests.
1. Initialize Node.js project:
````
npm init -y
````
2. Install WDIO CLI:
````
npm install @wdio/cli
````
3. Launch initial configuration guide:
````
npx wdio config
````
and select/specify the following options:
- select `On my local machine`
- select `mocha`
- select `sync`
- select `Babel`
- type `./test/specs/*.js`
- type `N`
- select `spec` and `allure`
- select `chromedriver`
- type `http://qa.intgames.org`

Wait till the end of the installation.

4. Install Babel modules:
````
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
````

5. Create `babel.config.js` file and paste the following code into it:
````
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: '12'
            }
        }]
    ]
}
````

6. Create `test` folder, then `specs` folder inside of it and finally `test.js` file in `specs` folder. Paste the following code into the file:
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

7. Run your firts test:
````
npx wdio run ./wdio.conf.js
````

8. Replace `test` script in `package.json` by:
````
 "test": "npx wdio run ./wdio.conf.js"
````
Now you can trigger the test by running `npm run test` or `npm test` or `npm t`.

9. Install Allure commandline:
````
npm install -g allure-commandline
````

10. Generate Allure report from results:
````
allure generate
````

11. Open Allure report:
````
allure open
````

12. Add `report` script to `package.json`:
````
    "report": "allure generate && allure open"
````

13. Create `.gitignore` file with the following code:
````
node_modules
allure-report
allure-results
temp
````

14. Use [WebDriverIO API reference](https://webdriver.io/docs/api) to add more tests, `expect` validation, and cover the Login page by tests.

### Homework 1
- Finish `Elements-displayed` suite
- Finish `Elements-values` suite
- Rename `test.js` to `login.js`
- Create `forgot.js` file in `specs`
- Create and cover by tests the same suites as for Login page

Few commands to use:
````
browser.url('url')
expect(browser).toHaveUrl('expected-url')
expect(element).toBeDisplayed()
expect(element).toHaveAttribute('attributeName', 'value')
expect(element).toHaveText('expected-value')
expect(element).toHaveTextContaining('expected-value')
````