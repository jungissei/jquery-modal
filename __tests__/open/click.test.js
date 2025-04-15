// モーダルを開くテスト
const $ = require('jquery');
// モーダルプラグインを読み込む（パスを修正）
require('../../dist/lib/jquery-modal/jquery-modal.js');

// モーダルのセットアップをインポート
const setupModalDom = require('../testSetup/modalSetup');

describe('Modal Open Tests', () => {
  beforeEach(() => {
    setupModalDom();
  });

  test('モーダルが正しく開く', async () => {

    // モーダルを初期化
    $('[data-modal-dialog]').modal();

    // クリックイベントをシミュレート
    $('[data-modal-open="modal_demo"]').trigger('click');

    // アニメーションフレームとマイクロタスクの完了を待つ
    await new Promise(resolve => setTimeout(resolve, 0));
    await new Promise(resolve => requestAnimationFrame(resolve));

    // クリック後の状態を確認
    const modalState = {
      active: $('#modal_demo').attr('data-modal-active'),
      open: $('#modal_demo').attr('open'),
      html: $('#modal_demo').prop('outerHTML')
    };

    // 状態を検証
    expect(modalState.active).toBe('true');
    expect(modalState.open).toBe('open');
  });
});
