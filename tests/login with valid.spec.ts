import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('Login with valid credentials', () => {
  test('Login succeeds with correct credentials', async ({ page }) => {
    // Get credentials from environment variables
    const uniqueEmail = process.env.uniqueEmail!;
    const password = process.env.password!;
    
    // Navigate to https://practicesoftwaretesting.com/
    await page.goto('https://practicesoftwaretesting.com/');
    
    // Click the "Sign in" link
    await page.locator('[data-test="nav-sign-in"]').click();
    
    // Fill in "Email address" with the unique email from .env
    await page.locator('[data-test="email"]').fill(uniqueEmail);
    
    // Fill in "Password" with password from .env
    await page.locator('[data-test="password"]').fill(password);
    
    // Click the "Login" button
    await page.locator('[data-test="login-submit"]').click();
  });
});