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

module.exports = {
  initModal,
  openModal,
  waitForAnimationFrame,
  getModalState
};
