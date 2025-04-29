import { test as base } from '@playwright/test';

export const test = base.extend({
  // カスタムフィクスチャを定義
  page: async ({ page }, use) => {
    // 各テストの前に実行される共通処理
    await page.goto('http://localhost:3001/basic/index.html');
    await use(page);
  },
});

// testオブジェクトをそのまま再エクスポート
export { expect } from '@playwright/test';
