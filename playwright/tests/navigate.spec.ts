import { expect, test } from '@playwright/test';

// E2E: Add to cart, change quantity and remove from cart
// E2E: Checkout flow, payment page, thank you page
// Unit: Test functions for adding and removing info from cookie
// Unit: Test function for updating quantity in item of cookie (eg. adding an item to the cart that already exists)
// Unit: Test cart sum function
// Set up GitHub Actions to automatically test your code

test('cart test', async ({ page }) => {
  // Homepage
  await page.goto('http://localhost:3000');

  await expect(
    page.getByRole('heading', { name: 'About our comedy club' }),
  ).toBeVisible();
  // Cart
  await page.getByRole('link', { name: 'Cart' }).click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // Checkout
  await page.getByRole('button', { name: 'Checkout' }).click();
  await expect(page).toHaveURL('http://localhost:3000/cart/checkout');

  // Thank you
  await page.getByRole('button', { name: 'Confirm Order' }).click();
  await expect(page).toHaveURL('http://localhost:3000/cart/checkout/thankyou');
});

test('Add to cart, change quantity buttons', async ({ page }) => {
  // add to cart button
  await page.goto('http://localhost:3000/comedians/2');
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();

  // add one ticket button
  await expect(
    page.getByRole('button', { name: 'Add a ticket' }),
  ).toBeVisible();
  await page
    .getByRole('button', { name: 'Add a ticket' })
    .click({ clickCount: 3 });
  await page.goto('http://localhost:3000/cart');
  await expect(page.locator('[data-test-id="ticket-number-id-2"]')).toHaveText(
    '3',
  );

  // remove from cart button
  await page.getByRole('link', { name: 'Cart' }).click();
  await expect(page).toHaveURL('http://localhost:3000/cart');
  await expect(
    page.getByRole('button', { name: 'Remove from cart' }).nth(1),
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Remove from cart' }),
  ).toHaveCount(6);
});
// data-test-id="ticket-number"
