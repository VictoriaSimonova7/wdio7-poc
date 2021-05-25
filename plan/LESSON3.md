## 3. Framework approach. Page Object Model.
1. Create `classes` folder in the `test` directory.
2. Create `pages` and `elements` folders in the `classes` directory.
3. Create `base.class.js` in the `classes` directory and paste the following code into the created file:
```
class Base {

    constructor() {
        
    }

    //methods

}

export default Base;
```
4. Create `login.page.js` in `pages` directory and paste the following code into the created file:
```
import Base from '../base.class';

class Login extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            //expected results for this page
        }
    }

    //element selectors
    get page() { return $('#login-page') }

    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

}

export default new Login;
```
5. Repeat step #4 for `forgot.page.js` in the `pages` directory as well as `header.elem.js` and `footer.elem.js` in the `elements` directory.
6. Create three (3) more spec files:
- `browser.js`
- `header.js`
- `footer.js`
7. Move all Page Level tests from `login.js` to `browser.js`.
8. Move all Header and Footer tests from `login.js` and `forgot.js` specs to `header.js` and `footer.js` respectively.
9. Now make sure you open the `baseUrl` in all specs before testing. Add `before()` hook to the first describe:
```
before(() => {
    browser.url('/');
})
```


### Homework 3
- import selectors and expected results in all specs.
- replace hardcoded values by data from the imported files in all specs.