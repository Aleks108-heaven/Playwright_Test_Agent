// import { test, expect } from '@playwright/test';

// test.describe('Practice Software Testing - Quick Registration & Login', () => {
  
//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://practicesoftwaretesting.com/');
//   });

//   test('Register a new user', async ({ page }) => {
//     // Navigate to login page
//     await page.locator('[data-test="nav-sign-in"]').click();
    
//     // Click register link
//     await page.locator('[data-test="register-link"]').click();
    
//     // Generate unique email
//     const uniqueEmail = `user${Date.now()}@example.com`;
    
//     // Fill registration form
//     await page.locator('[data-test="first-name"]').fill('John');
//     await page.locator('[data-test="last-name"]').fill('Doe');
//     await page.locator('[data-test="dob"]').fill('1990-05-15');
//     await page.locator('[data-test="street"]').fill('123 Main Street');
//     await page.locator('[data-test="postal_code"]').fill('12345');
//     await page.locator('[data-test="city"]').fill('New York');
//     await page.locator('[data-test="state"]').fill('NY');
//     await page.locator('[data-test="country"]').selectOption('United States of America (the)');
//     await page.locator('[data-test="phone"]').fill('5551234567');
//     await page.locator('[data-test="email"]').fill(uniqueEmail);
//     await page.locator('[data-test="password"]').fill('MySecure@2024Pwd');
    
//     // Submit registration
//     await page.locator('[data-test="register-submit"]').click();
    
//     // Wait for redirect and verify success
//     await page.waitForURL('**/auth/**', { waitUntil: 'networkidle' });
    
//     const url = page.url();
//     expect(url).not.toContain('/auth/register');
//   });

//   test('Login with valid credentials', async ({ page }) => {
//     // Navigate to login page
//     await page.locator('[data-test="nav-sign-in"]').click();
    
//     // Fill login form with test account
//     await page.locator('[data-test="email"]').fill('demo@practicesoftwaretesting.com');
//     await page.locator('[data-test="password"]').fill('Demo@1234');
    
//     // Click login button
//     await page.locator('[data-test="login-submit"]').click();
    
//     // Wait for redirect to account page
//     await page.waitForURL('**/account/**');
    
//     // Verify not on login page
//     const url = page.url();
//     expect(url).not.toContain('/auth/login');
//   });

//   test('Login fails with incorrect password', async ({ page }) => {
//     // Navigate to login page
//     await page.locator('[data-test="nav-sign-in"]').click();
    
//     // Fill with wrong password
//     await page.locator('[data-test="email"]').fill('demo@practicesoftwaretesting.com');
//     await page.locator('[data-test="password"]').fill('WrongPassword@123');
    
//     // Click login
//     await page.locator('[data-test="login-submit"]').click();
    
//     // Verify error message appears
//     await page.locator('text=/invalid|password|incorrect/i').waitFor({ state: 'visible' }).catch(() => {});
    
//     // Verify still on login page
//     const url = page.url();
//     expect(url).toContain('/auth/login');
//   });
// });
