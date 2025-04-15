// __tests__/testSetup/modalSetup.js

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
}

module.exports = setupModalDom;
