const { test, expect } = require('@playwright/test');

test.skip('Test1', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
})

test.skip('Test2', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');
    await expect(page).toHaveTitle('Your Store');
})


test.skip('Test3', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store');
})



