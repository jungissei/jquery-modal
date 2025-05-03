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

  const browserName = page.context().browser()?.browserType().name();

  const actualBlockSize = await body.evaluate(
    (el, browserName) => {
      const h = el.getBoundingClientRect().height;
      if (browserName === 'webkit') {
        // WebKitはそのまま
        return `${h}px`;
      } else {
        // 他は小数点第4位で四捨五入
        return `${Math.round(h * 10000) / 10000}px`;
      }
    },
    browserName // 2番目の引数で渡す
  );
  await expect(body).toHaveCSS('block-size', actualBlockSize);

  const actualInlineSize = await body.evaluate(
    (el, browserName) => {
      const w = el.getBoundingClientRect().width;
      if (browserName === 'webkit') {
        return `${w}px`;
      } else {
        return `${Math.round(w * 10000) / 10000}px`;
      }
    },
    browserName
  );
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

  const browserName = page.context().browser()?.browserType().name();

  const actualBlockSize = await body.evaluate(
    (el, browserName) => {
      const h = el.getBoundingClientRect().height;
      if (browserName === 'webkit') {
        // WebKitはそのまま
        return `${h}px`;
      } else {
        // 他は小数点第4位で四捨五入
        return `${Math.round(h * 10000) / 10000}px`;
      }
    },
    browserName // 2番目の引数で渡す
  );
  await expect(body).toHaveCSS('block-size', actualBlockSize);

  const actualInlineSize = await body.evaluate(
    (el, browserName) => {
      const w = el.getBoundingClientRect().width;
      if (browserName === 'webkit') {
        return `${w}px`;
      } else {
        return `${Math.round(w * 10000) / 10000}px`;
      }
    },
    browserName
  );
  await expect(body).toHaveCSS('inline-size', actualInlineSize);

  await expect(body).toHaveCSS('inset-block-start', 'auto');
  await expect(body).toHaveCSS('inset-inline-start', 'auto');
  await expect(body).toHaveCSS('position', 'static');
}
