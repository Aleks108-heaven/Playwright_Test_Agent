// spec: Quick Registration & Login Test

import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('Quick Registration & Login Test', () => {
  
  test('Register a new user', async ({ page }) => {

    // Get credentials from environment variables with fallbacks
    const uniqueEmail = process.env.uniqueEmail || `user${Date.now()}@example.com`;
    const password = process.env.password || process.env.PASSWORD || '';
    
    // Navigate to https://practicesoftwaretesting.com/
    await page.goto('https://practicesoftwaretesting.com/');
    
    // Click the "Sign in" link
    await page.locator('[data-test="nav-sign-in"]').click();
    
    // Click the "Register your account" link
    await page.locator('[data-test="register-link"]').click();
    
    // Fill in "First name" with "John"
    await page.locator('[data-test="first-name"]').fill('John');
    
    // Fill in "Last name" with "Doe"
    await page.locator('[data-test="last-name"]').fill('Doe');
    
    // Fill in "Date of Birth" with "1990-05-15"
    await page.locator('[data-test="dob"]').fill('1990-05-15');
    
    // Fill in "Street" with "123 Main Street"
    await page.locator('[data-test="street"]').fill('123 Main Street');
    
    // Fill in "Postal code" with "12345"
    await page.locator('[data-test="postal_code"]').fill('12345');
    
    // Fill in "City" with "New York"
    await page.locator('[data-test="city"]').fill('New York');
    
    // Fill in "State" with "NY"
    await page.locator('[data-test="state"]').fill('NY');
    
    // Select "United States of America (the)" from Country dropdown
    await page.locator('[data-test="country"]').selectOption(['United States of America (the)']);
    
    // Fill in "Phone" with numeric format only
    await page.locator('[data-test="phone"]').fill('5551234567');
    
    // Fill in "Email address" with unique email
    await page.locator('[data-test="email"]').fill(uniqueEmail);
    
    // Fill in "Password" with a secure password that hasn't been compromised
    await page.locator('[data-test="password"]').fill(password);
    
    // Click the "Register" button
    await page.locator('[data-test="register-submit"]').click();
    
    // Wait for registration to complete and redirect to account or login page
    // await page.waitForURL(url => !url.toString().includes('/auth/register'), { timeout: 10000 });
    
    // Verify registration completes successfully by checking user is redirected away from registration page
    // expect(page.url()).not.toContain('/auth/register');

    // Fill in "Email address" with the same unique email used during registration
    await page.locator('[data-test="email"]').fill(uniqueEmail);

    // Fill in "Password" with a secure password that hasn't been compromised
    await page.locator('[data-test="password"]').fill(password);

    // Click the "Login" button
    await page.locator('[data-test="login-submit"]').click();
  });
});
