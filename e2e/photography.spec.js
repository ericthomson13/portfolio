import { test, expect } from '@playwright/test';

test.describe('Photography Page', () => {
  test('should display photography page content', async ({ page }) => {
    await page.goto('/photography');

    // Check for the main photography page content
    await expect(page.locator('text=Photography Page')).toBeVisible();

    // Verify we're on the photography page
    expect(page.url()).toContain('/photography');
  });

  test('should display navigation menu', async ({ page }) => {
    await page.goto('/photography');

    // Check that all navigation links are present
    const navLinks = ['Home', 'About', 'Projects', 'Blog', 'Photography', 'Contact Me'];
    for (const linkText of navLinks) {
      await expect(page.getByRole('link', { name: linkText })).toBeVisible();
    }
  });

  test('should navigate back to home', async ({ page }) => {
    await page.goto('/photography');

    // Click the Home link
    await page.getByRole('link', { name: 'Home' }).click();

    // Should navigate back to home
    await page.waitForURL('**/');
    expect(page.url()).toBe('http://localhost:3000/');
  });
});