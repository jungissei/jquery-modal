import { expect } from '@playwright/test';

export async function assertModalOpen(page) {
  // --------------------------------------
  // モーダルが開くまで待機
  // --------------------------------------
  const dialog = page.getByRole('dialog');

  // モーダルが表示され、アクティブになるまで待機
  await expect(dialog).toHaveCSS('opacity', '1');


 // --------------------------------------
  // モーダルが開くテスト
  // --------------------------------------
  await expect(dialog).toHaveAttribute('data-modal-active', 'true');

  // --------------------------------------
  // body要素のスクロール固定テスト
  // --------------------------------------
  const body = page.locator('body');

  const actualBlockSize = await body.evaluate((el) => {
    const h = el.getBoundingClientRect().height;
    // 小数点第4位までで四捨五入
    return `${Math.round(h * 10000) / 10000}px`;
  });
  await expect(body).toHaveCSS('block-size', actualBlockSize);

  const actualInlineSize = await body.evaluate((el) => {
    const w = el.getBoundingClientRect().width;
    return `${Math.round(w * 10000) / 10000}px`;
  });
  await expect(body).toHaveCSS('inline-size', actualInlineSize);
  await expect(body).toHaveCSS('inset-block-start', '0px');
  await expect(body).toHaveCSS('inset-inline-start', '0px');
  await expect(body).toHaveCSS('position', 'fixed');
}



export async function assertModalClose(page) {
  // --------------------------------------
  // モーダルが閉じるまで待機
  // --------------------------------------
  const dialog = page.getByRole('dialog');

  // モーダルが表示され、アクティブになるまで待機
  await dialog.waitFor({ state: 'visible' });
  await dialog.waitFor({ state: 'attached' });

 // --------------------------------------
  // モーダルが閉じるテスト
  // --------------------------------------
  await expect(dialog).toHaveAttribute('data-modal-active', 'false');

  // --------------------------------------
  // body要素のスクロール固定テスト
  // --------------------------------------
  const body = page.locator('body');

  const actualBlockSize = await body.evaluate((el) => {
    const h = el.getBoundingClientRect().height;
    // 小数点第4位までで四捨五入
    return `${Math.round(h * 10000) / 10000}px`;
  });
  await expect(body).toHaveCSS('block-size', actualBlockSize);

  const actualInlineSize = await body.evaluate((el) => {
    const w = el.getBoundingClientRect().width;
    return `${Math.round(w * 10000) / 10000}px`;
  });
  await expect(body).toHaveCSS('inline-size', actualInlineSize);

  await expect(body).toHaveCSS('inset-block-start', 'auto');
  await expect(body).toHaveCSS('inset-inline-start', 'auto');
  await expect(body).toHaveCSS('position', 'static');
}
