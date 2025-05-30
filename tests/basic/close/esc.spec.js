import { test, expect } from '@playwright/test';
import { assertModalOpen, assertModalClose } from '../../helpers';

test("クリックでモーダルを開く", async ({ page }) => {
  await page.goto('http://localhost:3001/basic/index.html');

  await page.getByRole('button', { name: 'モーダルデモを開く' }).click();

  // 共通の検証ロジックを呼び出し
  await assertModalOpen(page);

  await page.keyboard.press('Escape');

  // 共通の検証ロジックを呼び出し
  await assertModalClose(page);

  // モーダルを閉じた後、トリガーボタンにフォーカスが戻っているか確認
  await expect(page.getByRole('button', { name: 'モーダルデモを開く' })).toBeFocused();
});
