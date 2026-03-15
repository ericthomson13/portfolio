import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
  test('should display blog page content', async ({ page }) => {
    await page.goto('/blog');

    // Check for the main blog page content
    await expect(page.locator('text=Blog Page')).toBeVisible();

    // Verify we're on the blog page
    expect(page.url()).toContain('/blog');
  });

  test('should display navigation menu', async ({ page }) => {
    await page.goto('/blog');

    // Check that all navigation links are present
    const navLinks = ['Home', 'About', 'Projects', 'Blog', 'Photography', 'Contact Me'];
    for (const linkText of navLinks) {
      await expect(page.getByRole('link', { name: linkText })).toBeVisible();
    }
  });

  test('should navigate back to home', async ({ page }) => {
    await page.goto('/blog');

    // Click the Home link
    await page.getByRole('link', { name: 'Home' }).click();

    // Should navigate back to home
    await page.waitForURL('**/');
    expect(page.url()).toBe('http://localhost:3000/');
  });
});