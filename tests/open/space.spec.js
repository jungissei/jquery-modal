import { test, expect } from '@playwright/test';
import { assertModalOpen } from '../helpers';

test("Enterキーでモーダルを開く", async ({ page }) => {
  await page.goto('http://localhost:3001/basic/index.html');

  await page.locator('body').press('Tab');
  await page.getByRole('button', { name: 'モーダルデモを開く' }).press('Space');

  // 共通の検証ロジックを呼び出し
  await assertModalOpen(page);
});
