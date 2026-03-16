import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display home page content', async ({ page }) => {
    await page.goto('/');

    // Check for the main home page content
    await expect(page.locator('text=Home Page')).toBeVisible();

    // Verify we're on the home page
    expect(page.url()).toBe('http://localhost:3000/');
  });

  test('should display header with name and title', async ({ page }) => {
    await page.goto('/');

    // Check for the header content
    await expect(page.locator('text=Eric Thomson')).toBeVisible();
    await expect(page.locator('text=Full Stack Software Engineer')).toBeVisible();
  });

  test('should display navigation menu', async ({ page }) => {
    await page.goto('/');

    // Check that all navigation links are present
    const navLinks = ['Home', 'About', 'Projects', 'Blog', 'Photography', 'Contact Me'];
    for (const linkText of navLinks) {
      await expect(page.getByRole('link', { name: linkText })).toBeVisible();
    }
  });

  test('should display social media icons', async ({ page }) => {
    await page.goto('/');

    // Check for social media links
    await expect(page.locator('[href*="linkedin"]')).toBeVisible();
    await expect(page.locator('[href*="instagram"]')).toBeVisible();
  });
});