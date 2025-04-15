// モーダルを開くテスト
const $ = require('jquery');
// モーダルプラグインを読み込む（パスを修正）
require('../../dist/lib/jquery-modal/jquery-modal.js');

// モーダルのセットアップをインポート
const setupModalDom = require('../testSetup/modalSetup');

const {
  initModal,
  openModal,
  waitForAnimationFrame,
  getModalState
} = require('../testSetup/modalHelpers');

describe('Modal Open Tests', () => {
  beforeEach(() => {
    setupModalDom();
  });

  test('モーダルが正しく開く', async () => {
    initModal();
    openModal('modal_demo');
    await waitForAnimationFrame();

    const modalState = getModalState('modal_demo');
    expect(modalState.active).toBe('true');
    expect(modalState.open).toBe('open');
  });
});
