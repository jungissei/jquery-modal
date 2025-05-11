# jQuery.Modal

## 依存関係
| パッケージ名 | 用途 |
| --- | --- |
| [scss-mixin-utilities](https://github.com/jungissei/scss-mixin-utilities) | scssのmixin共通関数として利用 |


## 開発
```shell
$ npm run dev
```

## Playwright

## Axe-core
```shell
# 全体テスト
$ npx playwright test

# 個別ファイルテスト
$ npx playwright test tests/open/click.spec.js

# ブラウザ指定テスト
$ npx playwright test tests/open/click.spec.js --project="chromium"
```

## Markuplint
```shell
# ローカル開発環境のURLからHTML取得
$ node markuplint/markuplint.mjs --dev
```

### Storybook
```shell
# Storybook起動
$ npm run storybook

# 開発ファイル更新
$ npm run dist-storybook

# 静的サイト生成
$ npm run build-storybook
```
