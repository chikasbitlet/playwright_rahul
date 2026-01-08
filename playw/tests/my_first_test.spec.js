const {test, expect} = require('@playwright/test');
//const {func1, func2}= require('./demo/hello');

//console.log (func1());

test ('my first test', async ({page}) => {

    await page.goto('https://demoqa.com')
    await expect(page).toHaveTitle('DEMOQA')
})