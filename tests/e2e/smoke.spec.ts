import { expect, test } from '@playwright/test';

test('public product catalog renders', async ({ page }) => {
  await page.goto('/products');
  await expect(page.getByText('상품 탐색')).toBeVisible();
  await expect(page.getByText('Glow Fit Cushion')).toBeVisible();
});
