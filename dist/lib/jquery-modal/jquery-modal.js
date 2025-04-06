"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function ($) {
  /**
   * モーダル機能を初期化するコンストラクタ
   * @param {HTMLElement} element モーダルを適用するDOM要素
   * @param {Object} options モーダルの設定オプション
   */
  function Modal(element, options) {
    this.element = element; // モーダルの基となる要素を設定
    this.settings = $.extend({}, Modal.defaults, options); // デフォルト設定とユーザー設定をマージ
    this.eventListenersMap = new Map(); // イベントリスナーを管理するためのMapオブジェクト
    this.currentOpenTrigger = null; // 現在モーダルを開いているトリガーを保持
    this.isTransitioning = false; // トランジション中かどうかの状態

    // 初期化メソッドを呼び出し
    this.init();
  }
  Modal.defaults = {
    // デフォルトオプションをここに追加
  };
  Modal.prototype = {
    /**
     * 初期化
     */
    init: function init() {
      var modal = this.element;

      // モーダルを開くトリガーと閉じるトリガーを取得
      var openTriggers = $("[data-modal-open=\"".concat(modal.id, "\"]"));
      var closeTriggers = $(modal).find("[data-modal-close]");

      // 開くトリガーにイベントリスナーを追加
      openTriggers.on("click", function (event) {
        this.handleOpenTriggerClick(event, modal, event.currentTarget);
      }.bind(this));
      openTriggers.on("mousedown keydown", this.handleTriggerFocus);

      // 閉じるトリガーにイベントリスナーを追加
      closeTriggers.on("click", function (event) {
        this.handleCloseTriggerClick(event, modal);
      }.bind(this));

      // data-modal-dialog-default-open属性を持つ場合、ページ読み込み時にモーダルを開く
      if ($(modal).is("[data-modal-dialog-default-open]") && !$("[data-modal-dialog-default-open]:visible").length) {
        this.openModal(modal);
      }
    },
    /**
     * モーダルのアニメーションが完了するのを待つ
     * @param {HTMLElement} modal モーダルダイアログ要素
     * @returns Promiseの配列が解決された後の結果を返す
     */
    waitModalAnimation: function waitModalAnimation(modal) {
      // モーダル内のアニメーションがない場合、すぐに解決されたPromiseを返す
      // if ($(modal).find(":animated").length === 0 && !$(modal).is(":hidden")){
      if (modal.getAnimations().length === 0) {
        console.log("no animation");
        return Promise.resolve([]);
      }

      // モーダル内の全てのアニメーションが完了するのを待つ
      return Promise.allSettled(_toConsumableArray(modal.getAnimations()).map(function (animation) {
        return animation.finished;
      }));
    },
    /**
     * モーダルのイベントリスナーを管理。
     * @param {HTMLElement} modal イベントリスナーを追加または削除するモーダル要素
     * @param {boolean} add trueの場合はイベントリスナーを追加し、falseの場合は削除します
     */
    manageEventListeners: function manageEventListeners(modal, add) {
      // バックドロップクリックリスナーを作成
      var backdropClickListener = function (event) {
        this.handleBackdropClick(event, modal);
      }.bind(this);

      // キーダウンリスナーを作成
      var keyDownListener = function (event) {
        this.handleKeyDown(event, modal);
      }.bind(this);
      if (add) {
        // イベントリスナーをモーダルとウィンドウに追加
        $(modal).on("click", backdropClickListener);
        $(window).on("keydown", keyDownListener);
        // イベントリスナーマップにリスナーを追加
        this.eventListenersMap.set(modal, {
          backdropClickListener: backdropClickListener,
          keyDownListener: keyDownListener
        });
      } else {
        // イベントリスナーをモーダルとウィンドウから削除
        var listeners = this.eventListenersMap.get(modal);
        if (listeners) {
          $(modal).off("click", listeners.backdropClickListener);
          $(window).off("keydown", listeners.keyDownListener);
          // イベントリスナーマップからリスナーを削除
          this.eventListenersMap["delete"](modal);
        }
      }
    },
    /**
     * トリガーをクリックした際にモーダルを開く処理を行います。
     * @param {Event} event イベントオブジェクト
     * @param {HTMLElement} modal 開くモーダルの要素
     * @param {HTMLElement} trigger トリガーとなる要素
     */
    handleOpenTriggerClick: function handleOpenTriggerClick(event, modal, trigger) {
      // デフォルトのイベントをキャンセル
      event.preventDefault();
      // 現在開いているトリガーを設定
      this.currentOpenTrigger = trigger;
      // モーダルを開く
      this.openModal(modal);
    },
    /**
     * トリガーをクリックした際にモーダルを閉じる処理を行います。
     * @param {Event} event イベントオブジェクト
     * @param {HTMLElement} modal 閉じるモーダルの要素
     */
    handleCloseTriggerClick: function handleCloseTriggerClick(event, modal) {
      // デフォルトのイベントをキャンセル
      event.preventDefault();
      // モーダルを閉じる
      this.closeModal(modal);
    },
    /**
     * モーダルを開く
     */
    open: function open() {
      this.openModal(this.element);
    },
    /**
     * モーダルを閉じる
     */
    close: function close() {
      this.closeModal(this.element);
    },
    /**
     * トリガーがフォーカスされた際のイベントを処理します。
     * @param {Event} event - マウスダウンまたはキーダウンイベントオブジェクト
     */
    handleTriggerFocus: function handleTriggerFocus(event) {
      // マウスダウンイベントが発生した場合、HTML要素に属性を設定
      if (event.type === "mousedown") {
        $("html").attr("data-mousedown", "true");
      }
      // キーダウンイベントが発生した場合、HTML要素から属性を削除
      if (event.type === "keydown") {
        $("html").removeAttr("data-mousedown");
      }
    },
    /**
     * モーダルのバックドロップをクリックした際の処理。
     * @param {Event} event - イベントオブジェクト
     * @param {HTMLElement} modal - 対象のモーダル要素
     */
    handleBackdropClick: function handleBackdropClick(event, modal) {
      // クリックされた要素がモーダル自体である場合、モーダルを閉じる
      if (event.target === modal) {
        this.closeModal(modal);
      }
    },
    /**
     * キーダウンイベントが発生した際の処理を行う。
     * Escapeキーが押された場合、モーダルを閉じる。
     * @param {Event} event - イベントオブジェクト
     * @param {HTMLElement} modal - 対象のモーダル要素
     */
    handleKeyDown: function handleKeyDown(event, modal) {
      // HTML要素からマウスダウンのデータ属性を削除
      $("html").removeAttr("data-mousedown");
      // Escapeキーが押された場合の処理
      if (event.key === "Escape") {
        // デフォルトのイベントをキャンセル
        event.preventDefault();
        // モーダルを閉じる
        this.closeModal(modal);
      }
    },
    /**
     * モーダルを開く処理を行います。
     * @param {HTMLElement} modal - 対象のモーダル要素
     */
    openModal: function openModal(modal) {
      // トランジション中であれば処理を中断
      if (this.isTransitioning) return;

      // トランジション状態を開始に設定
      this.isTransitioning = true;

      // 他のモーダルを閉じる
      this.closeOtherModals(modal);
      var $modal = $(modal);

      // モーダルが開く前のイベントをトリガー
      $modal.trigger("modal.before_open");

      // モーダルを表示状態にする
      modal.showModal();
      // 背景を固定する処理を呼び出し
      this.backfaceFixed(true);
      // イベントリスナーを管理する処理を呼び出し
      this.manageEventListeners(modal, true);

      // アニメーションフレームをリクエストして非同期処理を実行
      requestAnimationFrame(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // モーダルがアクティブであることを示す属性を設定
              $modal.attr("data-modal-active", "true");
              // モーダルのアニメーション完了を待機
              _context.next = 3;
              return this.waitModalAnimation(modal);
            case 3:
              // トランジション状態を終了に設定
              this.isTransitioning = false;

              // モーダルが開いた後のイベントをトリガー
              $modal.trigger("modal.after_open");
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      })).bind(this));
    },
    /**
     * 他のモーダルを閉じる
     * @param {HTMLElement} currentModal - 現在開こうとしているモーダル要素
     */
    closeOtherModals: function closeOtherModals(currentModal) {
      $("[data-modal-dialog]").each(function () {
        var modal = $(this).data("modal");
        if (modal && this !== currentModal && $(this).attr("data-modal-active") === "true") {
          modal.close();
        }
      });
    },
    /**
     * モーダルを閉じる処理を行う。
     * トランジション中は処理を中断し、モーダルのアクティブ状態を解除後、イベントリスナーを削除し、アニメーション完了後にモーダルを閉じる。
     * @param {HTMLElement} modal - 対象のモーダル要素
     */
    closeModal: function () {
      var _closeModal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(modal) {
        var $modal;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.isTransitioning) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              // トランジション状態を開始に設定
              this.isTransitioning = true;
              $modal = $(modal); // モーダルが閉じる前のイベントをトリガー
              $modal.trigger("modal.before_close");

              // モーダルのアクティブ状態を解除
              $modal.attr("data-modal-active", "false");
              // 背景固定を解除
              this.backfaceFixed(false);
              // イベントリスナーを削除
              this.manageEventListeners(modal, false);

              // モーダルのアニメーション完了を待機
              _context2.next = 10;
              return this.waitModalAnimation(modal);
            case 10:
              // モーダルを閉じる
              modal.close();

              // 開いていたトリガーがあればフォーカスを戻す
              if (this.currentOpenTrigger) {
                $(this.currentOpenTrigger).focus();
                this.currentOpenTrigger = null;
              }

              // トランジション状態を終了に設定
              this.isTransitioning = false;

              // モーダルが閉じた後のイベントをトリガー
              $modal.trigger("modal.after_close");
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function closeModal(_x) {
        return _closeModal.apply(this, arguments);
      }
      return closeModal;
    }(),
    /**
     * HTML要素の書き込みモードが垂直かどうかを判断する関数
     * @returns {boolean} 垂直書きの場合はtrue、それ以外はfalse
     */
    isVerticalWritingMode: function isVerticalWritingMode() {
      var writingMode = $("html").css("writing-mode");
      return writingMode.includes("vertical");
    },
    /**
     * スクロールバーのサイズを取得する関数
     * 垂直書きの場合は水平スクロールバーのサイズを、それ以外の場合は垂直スクロールバーのサイズを返す。
     * @returns {number} スクロールバーのサイズ
     */
    getScrollBarSize: function getScrollBarSize() {
      // 水平スクロールバーのサイズを計算
      var scrollBarXSize = window.innerHeight - $("body").height();
      // 垂直スクロールバーのサイズを計算
      var scrollBarYSize = window.innerWidth - $("body").width();
      // 垂直書きの場合は水平スクロールバーのサイズを、それ以外の場合は垂直スクロールバーのサイズを返す
      return this.isVerticalWritingMode() ? scrollBarXSize : scrollBarYSize;
    },
    /**
     * スクロール位置を取得する関数
     * @param {boolean} fixed 固定されているかどうかの真偽値
     * @returns {number} スクロール位置の数値
     */
    getScrollPosition: function getScrollPosition(fixed) {
      // 固定されている場合
      if (fixed) {
        // 垂直書きの場合は水平スクロール位置を、それ以外の場合は垂直スクロール位置を返す
        return this.isVerticalWritingMode() ? $(document.scrollingElement).scrollLeft() : $(document.scrollingElement).scrollTop();
      }
      // 固定されていない場合はbodyのinset-block-startの値を整数で返す
      return parseInt($("body").css("inset-block-start") || "0", 10);
    },
    /**
     * スクロール位置に基づいてスタイルを適用または削除する関数
     * @param {number} scrollPosition - スクロール位置の数値
     * @param {boolean} apply - スタイルを適用するかどうかの真偽値
     */
    applyStyles: function applyStyles(scrollPosition, apply) {
      // スタイル設定オブジェクト
      var styles = {
        blockSize: "100dvb",
        // ブロックサイズ
        insetInlineStart: "0",
        // インライン開始位置
        position: "fixed",
        // 位置固定
        insetBlockStart: this.isVerticalWritingMode() // ブロック開始位置
        ? "".concat(scrollPosition, "px") : "".concat(scrollPosition * -1, "px"),
        inlineSize: "100dvi" // インラインサイズ
      };
      // スタイルを適用または削除
      Object.keys(styles).forEach(function (key) {
        $("body").css(key, apply ? styles[key] : "");
      });
    },
    /**
     * スクロール位置を元に戻す関数
     * @param {number} scrollPosition - 元に戻すスクロール位置
     */
    restorePosition: function restorePosition(scrollPosition) {
      // スクロールオプションを設定
      var options = _defineProperty({
        behavior: "instant"
      }, this.isVerticalWritingMode() ? "left" : "top", this.isVerticalWritingMode() ? scrollPosition // 垂直書きの場合は左スクロール位置を設定
      : scrollPosition * -1);
      // スクロール位置を設定したオプションで更新
      window.scrollTo(options);
    },
    /**
     * 固定された背面のスクロールバーの幅を調整し、スタイルを適用または削除します。
     * @param {boolean} fixed - 固定するかどうかの真偽値
     */
    backfaceFixed: function backfaceFixed(fixed) {
      // スクロールバーの幅を取得
      var scrollBarWidth = this.getScrollBarSize();
      // 現在のスクロール位置を取得
      var scrollPosition = this.getScrollPosition(fixed);
      // bodyのpadding-inline-endを設定（固定時はスクロールバーの幅、非固定時は0）
      $("body").css("padding-inline-end", fixed ? "".concat(scrollBarWidth, "px") : "");
      // スクロール位置に基づいてスタイルを適用または削除
      this.applyStyles(scrollPosition, fixed);
      // 固定が解除された場合、スクロール位置を元に戻す
      if (!fixed) {
        this.restorePosition(scrollPosition);
      }
    }
  };

  /**
   * jQueryプラグインとしてモーダル機能を初期化します。
   * @param {Object|string} options - モーダルの設定オプションまたはアクション文字列。
   *                                  openプロパティがtrueの場合、モーダルを自動的に開きます。
   *                                  'close'を指定した場合、モーダルを閉じます。
   */
  $.fn.modal = function (options) {
    // オプションが文字列の場合はアクションとして処理
    if (typeof options === 'string') {
      var action = options;

      // 各要素に対して処理を行います。
      return this.each(function () {
        // 現在の要素からモーダルデータを取得します。
        var modal = $(this).data("modal");

        // モーダルデータが存在する場合にのみアクションを実行
        if (modal) {
          if (action === 'close') {
            modal.close(); // モーダルを閉じる
          }
        }
      });
    }

    // デフォルトオプションを設定
    options = $.extend({
      open: false // デフォルトではモーダルを自動的に開かない
    }, options);

    // 各要素に対して処理を行います。
    return this.each(function () {
      // 現在の要素からモーダルデータを取得します。
      var modal = $(this).data("modal");

      // モーダルデータが存在しない場合、新たに作成してデータを設定します。
      if (!modal) {
        modal = new Modal(this); // 新しいモーダルインスタンスを作成
        $(this).data("modal", modal); // 作成したモーダルインスタンスを要素に紐付け
      }

      // openオプションがtrueの場合、モーダルを自動的に開きます。
      if (options.open) {
        modal.open(); // モーダルを開く
      }
    });
  };

  /**
   * モーダルダイアログを持つ要素に対してモーダル機能を適用します。
   */
  $("[data-modal-dialog]").each(function () {
    // 各要素にモーダル機能を適用
    $(this).modal();
  });
})(jQuery);
//# sourceMappingURL=jquery-modal.js.map
