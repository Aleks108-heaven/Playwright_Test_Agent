import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { requireEnv } from './helpers/env';

dotenv.config();

test.describe('Login fails with incorrect password', () => {
  test('Login fails with wrong password', async ({ page }) => {
    const _email = requireEnv('_email');
    const _password = requireEnv('_password');
    
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
    
    // Verify a login error is visible.
    await expect(page.locator('text=/invalid email or password|invalid|incorrect/i').first()).toBeVisible({ timeout: 10000 });
    
    // Verify login fails by checking user remains on login page
    expect(page.url()).toContain('/auth/login');
  });
  });