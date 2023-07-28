# ポートフォリオ03

## 1. サイトの概要

ポートフォリオ03は、HTML、CSS、JavaScriptで構築された静的なWebサイトです。
このリポジトリでは、DIGSMILE INC.という架空のデザイン会社のポートフォリオを作成しています。

このポートフォリオは[PENGINさんが配布しているデザインカンプ](https://pengi-n.co.jp/blog/coding-practice3/) を実装したものです。

GitHub Pagesで公開中:[https://sim10play.github.io/portfolio02/](https://sim10play.github.io/portfolio03/)

## 2. ファイル構成

### HTML
   - `index.html`: サイトのメインページ
   - `about-page.html`: 企業情報に関するページ
   - `contact-page.html`: 問い合わせページ
   - `header.html`: header部分（jQueryのloadメソッドを使用して各ページへ書き込み）
   - `footer.html`: footer部分（jQueryのloadメソッドを使用して各ページへ書き込み）
### CSS
   - `css/style.css`: モバイル向けのスタイルを定義
   - `css/tablet-style.css`: タブレット向けのスタイルを定義
   - `css/pc-style.css`: PC向けのスタイルを定義
### jQuery・その他
   - `js/main.js`: サイトの動的な振る舞いを制御
   - `img/`: サイトで使用される画像ファイルを格納

## 3. 主な機能
   ### 3.1 ナビゲーション
   - サイト内の異なるセクションへのリンクを提供する。
   - メインメニューとしてヘッダーに表示される。
   - レスポンシブ対応としてハンバーガーメニューに変化する。

   ### 3.3 ABOUTセクション
   - 「READ MORE」ボタンでabout-page.htmlに遷移する。

   ### 3.3 CONTACTセクション
   - 「READ MORE」ボタンでcontact-page.htmlに遷移する。

   ### 3.4 レスポンシブデザイン
   - 768px, 1100pxをブレイクポイントとして要素の配置やデザインが変化する。

## 4. 使用言語とツール
   - HTML (バージョン: HTML5)
   - CSS (バージョン: CSS3)
   - jQuery (バージョン： 3.6.0)
   - Google Fonts: 'Montserrat', 'Noto Sans JP', 'Yu Gothic'
   - リセットCSS: ress.min.css

以上がポートフォリオ03の基本情報です。詳細な実装や設定については、各ファイルのコメントやソースコードを参照してください。
