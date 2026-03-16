import { test, expect } from '@playwright/test';

test.describe('Portfolio Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load home page', async ({ page }) => {
    await expect(page).toHaveTitle(/React App/);
    await expect(page.locator('text=Eric Thomson')).toBeVisible();
    await expect(page.locator('text=Full Stack Software Engineer')).toBeVisible();
  });

  test('should navigate to About page', async ({ page }) => {
    await page.click('text=About');
    await page.waitForURL('**/about');
    expect(page.url()).toContain('/about');
  });

  test('should navigate to Projects page', async ({ page }) => {
    await page.click('text=Projects');
    await page.waitForURL('**/projects');
    expect(page.url()).toContain('/projects');
  });

  test.skip('should navigate to Blog page', async ({ page }) => {
    await page.locator('text=Blog').scrollIntoViewIfNeeded();
    await page.click('text=Blog');
    await page.waitForURL('**/blog');
    expect(page.url()).toContain('/blog');
  });

  test.skip('should navigate to Photography page', async ({ page }) => {
    await page.locator('text=Photography').scrollIntoViewIfNeeded();
    await page.click('text=Photography');
    await page.waitForURL('**/photography');
    expect(page.url()).toContain('/photography');
  });

  test.skip('should navigate to Contact Me page', async ({ page }) => {
    await page.locator('text=Contact Me').scrollIntoViewIfNeeded();
    await page.click('text=Contact Me');
    await page.waitForURL('**/contact-me');
    expect(page.url()).toContain('/contact-me');
  });

  test('should navigate back to Home from other pages', async ({ page }) => {
    // Go to About page first
    await page.click('text=About');
    await page.waitForURL('**/about');

    // Navigate back to Home
    await page.click('text=Home');
    await page.waitForURL('**/');
    expect(page.url()).toBe('http://localhost:3000/');
  });

  test('should display navigation menu on all pages', async ({ page }) => {
    const navLinks = ['Home', 'About', 'Projects', 'Blog', 'Photography', 'Contact Me'];

    for (const linkText of navLinks) {
      await expect(page.getByRole('link', { name: linkText })).toBeVisible();
    }
  });

  test('should display social icons', async ({ page }) => {
    // Check for LinkedIn and Instagram social icons
    await expect(page.locator('[href*="linkedin"]')).toBeVisible();
    await expect(page.locator('[href*="instagram"]')).toBeVisible();
  });
});