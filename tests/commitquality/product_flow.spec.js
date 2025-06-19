const { test, expect } = require('@playwright/test');

test('CommitQuality Product Flow', async ({ page }) => {
  // Navigate to the site
  await page.goto('https://commitquality.com/');

  // Go to login
  await page.click('text=Login');

  // Enter username and password
  await page.fill('input[type="text"]', 'test');
  await page.fill('input[type="password"]', 'test');
  await page.click('button:has-text("Login")');

  // Add a product
  await page.click('text=Add Product');
  await page.fill('input[name="name"]', 'test adat');
  await page.fill('input[name="price"]', '123');
  await page.fill('input[name="dateStocked"]', '2024-06-01');
  await page.click('button:has-text("Submit")');

  // Go to products page
  await page.click('text=Products');

  // Verify the added product
  const productRow = await page.locator('tr', { hasText: 'test adat' });
  await expect(productRow).toContainText('test adat');
  await expect(productRow).toContainText('123');
  await expect(productRow).toContainText('2024-06-01');

  // Take screenshot of the product row
  await productRow.screenshot({ path: 'test_adat_product.png' });

  // Logout
  await page.click('text=Logout');
});
