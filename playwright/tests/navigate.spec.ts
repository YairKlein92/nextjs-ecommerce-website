import { expect, test } from '@playwright/test';

// E2E: Checkout flow
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

  // Checkout flow
  await page.getByRole('button', { name: 'Checkout' }).click();
  await expect(page).toHaveURL('http://localhost:3000/cart/checkout');

  // Thank you
  await page.getByRole('button', { name: 'Confirm Order' }).click();
  await expect(page).toHaveURL('http://localhost:3000/cart/checkout/thankyou');
});

test('Add to cart, change quantity buttons', async ({ page }) => {
  // add to cart button - visibility
  await page.goto('http://localhost:3000/comedians/2');
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();

  // add a ticket, remove a ticket, add to cart buttons - functionality
  await expect(
    page.getByRole('button', { name: 'Add a ticket' }),
  ).toBeVisible();
  await page
    .getByRole('button', { name: 'Add to cart' }) // change quantity
    .click({ clickCount: 1 });
  await page
    .getByRole('button', { name: 'Add a ticket' }) // change quantity
    .click({ clickCount: 2 });
  await page
    .getByRole('button', { name: 'Remove a ticket' }) // change quantity
    .click({ clickCount: 1 });
  await page.goto('http://localhost:3000/cart');
  await expect(page.locator('[data-test-id="ticket-number-id-2"]')).toHaveText(
    '2',
  );

  // remove from cart button
  await page.getByRole('link', { name: 'Cart' }).click();
  await expect(page).toHaveURL('http://localhost:3000/cart');
  await expect(
    page.getByRole('button', { name: 'Remove from cart' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Remove from cart' }).click();
  await expect(
    page.getByRole('button', { name: 'Remove from cart' }),
  ).toBeHidden();
  await expect(page.locator('[data-test-id="ticket-number-id-2"]')).toHaveText(
    '0',
  );
});
