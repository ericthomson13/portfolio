import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test('should display contact page content', async ({ page }) => {
    await page.goto('/contact-me');

    // Check for the main contact page content (not the navigation link)
    await expect(page.locator('div').filter({ hasText: /^Contact Me$/ })).toBeVisible();

    // Verify we're on the contact page
    expect(page.url()).toContain('/contact-me');
  });

  test('should display navigation menu', async ({ page }) => {
    await page.goto('/contact-me');

    // Check that all navigation links are present
    const navLinks = ['Home', 'About', 'Projects', 'Blog', 'Photography', 'Contact Me'];
    for (const linkText of navLinks) {
      await expect(page.getByRole('link', { name: linkText })).toBeVisible();
    }
  });

  test('should navigate back to home', async ({ page }) => {
    await page.goto('/contact-me');

    // Click the Home link
    await page.getByRole('link', { name: 'Home' }).click();

    // Should navigate back to home
    await page.waitForURL('**/');
    expect(page.url()).toBe('http://localhost:3000/');
  });
});