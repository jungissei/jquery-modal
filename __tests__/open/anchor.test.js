// モーダルを開くテスト
const $ = require('jquery');
// モーダルプラグインを読み込む（パスを修正）
require('../../dist/lib/jquery-modal/jquery-modal.js');

describe('Modal Open Tests', () => {
  beforeEach(() => {
    // requestAnimationFrameのモック
    global.requestAnimationFrame = (callback) => setTimeout(callback, 0);

    // アニメーションAPIのモック
    HTMLElement.prototype.getAnimations = function() {
      return [];
    };

    // showModalメソッドをモック
    HTMLDialogElement.prototype.showModal = function() {
      this.setAttribute('open', 'open');
    };

    // closeメソッドをモック
    HTMLDialogElement.prototype.close = function() {
      this.removeAttribute('open');
    };

    document.body.innerHTML = `
      <button type="button" class="demo_btn" data-modal-open="modal_demo">
        モーダルデモを開く
      </button>
      <dialog id="modal_demo" class="modal_dialog" data-modal-dialog>
        <div class="dialog_content">
          <button class="dialog_close" data-modal-close>閉じる</button>
        </div>
      </dialog>
    `;
  });

  // プラグインが読み込まれているか確認
  test('jQueryプラグインが正しく読み込まれている', () => {
    expect(typeof $.fn.modal).toBe('function');
    // プラグインの読み込みをより詳細に確認
    console.log('jQuery plugin check:', {
      jquery: $.fn.jquery,
      modalPlugin: $.fn.modal,
      modalExists: typeof $.fn.modal === 'function'
    });
  });

  test('モーダルが正しく開く', async () => {
    // モーダルを初期化
    $('[data-modal-dialog]').modal();

    // 初期状態を確認
    console.log('Initial state:', {
      modalElement: $('#modal_demo').length > 0,
      modalData: $('#modal_demo').data('modal'),
      initialActive: $('#modal_demo').attr('data-modal-active')
    });

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
    console.log('After click:', modalState);

    // 状態を検証
    expect(modalState.active).toBe('true');
    expect(modalState.open).toBe('open');
  });

  // イベントのテストも追加
  test('モーダルのイベントが正しく発火する', async () => {
    let beforeOpenFired = false;
    let afterOpenFired = false;

    $('[data-modal-dialog]').modal();

    $('#modal_demo')
      .on('modal.before_open', () => {
        beforeOpenFired = true;
        console.log('before_open event fired');
      })
      .on('modal.after_open', () => {
        afterOpenFired = true;
        console.log('after_open event fired');
      });

    $('[data-modal-open="modal_demo"]').trigger('click');

    // イベントの完了を待つ
    await new Promise(resolve => setTimeout(resolve, 0));
    await new Promise(resolve => requestAnimationFrame(resolve));

    expect(beforeOpenFired).toBe(true);
    expect(afterOpenFired).toBe(true);
  });
});
