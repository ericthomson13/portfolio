import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test('should display about page content', async ({ page }) => {
    await page.goto('/about');

    // Check for the main about page content
    await expect(page.locator('text=About Me')).toBeVisible();

    // Verify we're on the about page
    expect(page.url()).toContain('/about');
  });

  test('should have centered content styling', async ({ page }) => {
    await page.goto('/about');

    // Check that the content has the expected CSS classes
    const contentDiv = page.locator('.content-center');
    await expect(contentDiv).toBeVisible();
    await expect(contentDiv).toHaveClass(/content-center/);
  });

  test('should display navigation menu', async ({ page }) => {
    await page.goto('/about');

    // Check that all navigation links are present
    const navLinks = ['Home', 'About', 'Projects', 'Blog', 'Photography', 'Contact Me'];
    for (const linkText of navLinks) {
      await expect(page.getByRole('link', { name: linkText })).toBeVisible();
    }
  });

  test('should navigate back to home', async ({ page }) => {
    await page.goto('/about');

    // Click the Home link
    await page.getByRole('link', { name: 'Home' }).click();

    // Should navigate back to home
    await page.waitForURL('**/');
    expect(page.url()).toBe('http://localhost:3000/');
  });
});