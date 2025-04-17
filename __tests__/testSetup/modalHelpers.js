// __tests__/testSetup/modalHelpers.js

const $ = require('jquery');

/**
 * モーダルを初期化する
 */
function initModal() {
  $('[data-modal-dialog]').modal();
}

/**
 * モーダルを開くボタンをクリックシミュレート
 * @param {string} modalId - モーダルID
 */
function openModal(modalId) {
  $(`[data-modal-open="${modalId}"]`).trigger('click');
}

/**
 * アニメーションフレームとマイクロタスクの完了を待つ
 */
async function waitForAnimationFrame() {
  await new Promise(resolve => setTimeout(resolve, 0));
  await new Promise(resolve => requestAnimationFrame(resolve));
}

/**
 * モーダルの状態を取得
 * @param {string} modalId - モーダルID
 * @returns {object}
 */
function getModalState(modalId) {
  return {
    active: $(`#${modalId}`).attr('data-modal-active'),
    open: $(`#${modalId}`).attr('open'),
    html: $(`#${modalId}`).prop('outerHTML')
  };
}

/**
 * モーダルのDOMをセットアップ
 * @returns {void}
 */
function setupModalDom() {
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

  require('../../dist/lib/jquery-modal/jquery-modal.js');
}

module.exports = {
  setupModalDom,
  initModal,
  openModal,
  waitForAnimationFrame,
  getModalState
};
