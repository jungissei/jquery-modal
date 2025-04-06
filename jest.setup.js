const $ = require('jquery');
global.$ = global.jQuery = $;

// requestAnimationFrameのグローバル設定
global.requestAnimationFrame = (callback) => setTimeout(callback, 0);

// アニメーションAPIのモック
global.HTMLElement.prototype.getAnimations = function() {
  return [];
};
