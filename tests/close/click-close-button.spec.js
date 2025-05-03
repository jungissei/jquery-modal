import { test } from '@playwright/test';
import { assertModalOpen, assertModalClose } from '../helpers';

test("クリックでモーダルを開く", async ({ page }) => {
  await page.goto('http://localhost:3001/basic/index.html');

  await page.getByRole('button', { name: 'モーダルデモを開く' }).click();

  // 共通の検証ロジックを呼び出し
  await assertModalOpen(page);

  await page.getByRole('button', { name: 'モーダルを閉じる' }).click();

  // 共通の検証ロジックを呼び出し
  await assertModalClose(page);
});
