import { expect } from '@playwright/test';

export async function assertModalOpen(page) {
  // --------------------------------------
  // モーダルを開くテスト
  // --------------------------------------
  const dialog = page.getByRole('dialog');
  await expect(dialog).toHaveAttribute('data-modal-active', 'true');

  // --------------------------------------
  // body要素のスクロール固定テスト
  // --------------------------------------
  const body = page.locator('body');

  const actualBlockSize = await body.evaluate((el) => {
    const vh = window.innerHeight;
    return `${vh}px`;
  });
  await expect(body).toHaveCSS('block-size', actualBlockSize);

  const actualInlineSize = await body.evaluate((el) => {
    const width = window.innerWidth;
    console.log('Body inline-size:', width + 'px');
    return width + 'px';
  });
  await expect(body).toHaveCSS('inline-size', actualInlineSize);

  await expect(body).toHaveCSS('inset-block-start', '0px');
  await expect(body).toHaveCSS('inset-inline-start', '0px');
  await expect(body).toHaveCSS('position', 'fixed');
}
