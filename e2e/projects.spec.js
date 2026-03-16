import { test, expect } from '@playwright/test';

test.describe('Projects Page', () => {
  test('should display projects page content', async ({ page }) => {
    await page.goto('/projects');

    // Check for the main projects page content
    await expect(page.locator('text=Projects Page')).toBeVisible();

    // Verify we're on the projects page
    expect(page.url()).toContain('/projects');
  });

  test('should display navigation menu', async ({ page }) => {
    await page.goto('/projects');

    // Check that all navigation links are present
    const navLinks = ['Home', 'About', 'Projects', 'Blog', 'Photography', 'Contact Me'];
    for (const linkText of navLinks) {
      await expect(page.getByRole('link', { name: linkText })).toBeVisible();
    }
  });

  test('should navigate back to home', async ({ page }) => {
    await page.goto('/projects');

    // Click the Home link
    await page.getByRole('link', { name: 'Home' }).click();

    // Should navigate back to home
    await page.waitForURL('**/');
    expect(page.url()).toBe('http://localhost:3000/');
  });
});