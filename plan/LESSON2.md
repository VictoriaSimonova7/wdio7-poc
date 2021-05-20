## 2. Framework configuration. Temp folder. Reporter Configuration. Hooks. Screenshots.
1. Create `temp` folder in the root project directory.
2. In `wdio.conf.js` make the following changes:
````
    logLevel: 'silent',

    waitforTimeout: 40000,

    reporters: ['spec', ['allure', { outputDir: 'temp/allure-results' }]],

    before: function (capabilities, specs) {
        browser.maximizeWindow();
    },    

    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            let fullName = `${test.parent}.${test.title}`;
            browser.saveScreenshot(`./temp/screenshots/${fullName}.png`);
        }
    },
````
3. In `package.json` add new scripts and make the following changes:
````
    "clean": "rm -rf temp"
    "temp-win": "mkdir temp\\screenshots"
    "temp-mac": "mkdir temp temp/screenshots"
````
Also, create scripts for running the test:
````
    "smoke-win": "npm run clean && npm run temp-win && npm t"
    "smoke-mac": "npm run clean && npm run temp-mac && npm t"
````
Replace the old `reeport` script by the two new scripts:
````
    "report-generate": "allure generate ./temp/allure-results -o ./temp/allure-report"
    "report-open": "allure open ./temp/allure-report"
````
4. Create one more `describe()` in both `login.js` and `forgot.js` for functional tests.
````
describe('Functionality', () => {

    it('First-test', () => {
       
    })

})
````
### Homework 2
Write functional tests for `login.js` and `forgot.js`:

Login:
- Back to Login button is NOT displayed in Header
- Clicking Ratings button redirects to `http://qa.intgames.org/users`
- Rating page is displayed
- Clicking Public Game redirects to `http://qa.intgames.org/public-game`
- Public game page is displayed
- Remind Password redirecs to `http://qa.intgames.org/forgot`
- Remind Password page is displayed
- Error message appears if both fields are empty and click Login: `Please specify email and password`
- Error message disapears on input in Email field
- Error message appears if only Password field is empty and click Login: `Please specify email and password`
- Error message disapears on input in Password field
- Error message appears if only Email field is empty and click Login: `Please specify email and password`
- Error message appears if Email is incorrect: `User with this email does not exist`
- Error message appears if Email is correct (use `info@techstart.dev`) but Password is not: `Password is incorrect`

Forgot:
- Back to Login button is displayed in Header
- Clicking Back to Login button redirects to `http://qa.intgames.org/`
- Error message appears if only Email field is empty and click Remind Password: `Please specify email`
- Error message disapears on input in Email field
- Error message appears if Email is incorrect: `User with this email does not exist`
- Success message appears if Email is correct (use `info@techstart.dev`): `Password reminder sent`
- User is redirected to `http://qa.intgames.org/` in 4 sec after the password reminder was sent.

Few commands to use:
````
browser.url('url')
$('selector').click()
$('selector').setValue('value')
$('selector').waitForDisplayed()
$('selector').waitForDisplayed({ reverse: true }) //reverse means waitForNotDisplayed()
expect(browser).toHaveUrl('expected-url')
expect($('selector')).toHaveText('expected')
expect($('selector')).toBeDisplayed()
expect(browser).toHaveUrl('expected-url', { wait: 4000 })
````