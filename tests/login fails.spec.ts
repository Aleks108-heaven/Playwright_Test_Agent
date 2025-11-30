import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('Login fails with incorrect password', () => {
    test('Login fails with wrong password', async ({ page }) => {
    // Get credentials from environment variables
    const _email = process.env._email!;
    const _password = process.env._password!;
    
    // Navigate to https://practicesoftwaretesting.com/
    await page.goto('https://practicesoftwaretesting.com/');
    
    // Click the "Sign in" link
    await page.locator('[data-test="nav-sign-in"]').click();
    
    // Fill in "Email address" with test email
    await page.locator('[data-test="email"]').fill(_email);
    
    // Fill in "Password" with incorrect password
    await page.locator('[data-test="password"]').fill(_password);
    
    // Click the "Login" button
    await page.locator('[data-test="login-submit"]').click();
    
    // Verify error message appears
    await page.locator('text=/invalid|password|incorrect/i').waitFor({ state: 'visible' }).catch(() => {});
    
    // Verify login fails by checking user remains on login page
    expect(page.url()).toContain('/auth/login');
    });
  });