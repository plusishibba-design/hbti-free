import React from 'react';

function PrivacyPolicy() {
  return (
    <article className="static-page">
      <header className="static-page-header">
        <p className="eyebrow">PRIVACY POLICY</p>
        <h2>プライバシーポリシー</h2>
        <p className="last-updated">最終更新日: 2026 年 5 月 22 日</p>
      </header>

      <section className="prose">
        <p>
          HBTI(Hook-Bait Type Indicator、以下「本サービス」)は、
          Studio T. Ishi が運営する Web ツールです。
          本ポリシーは、本サービスにおける情報の取り扱いについて説明します。
        </p>

        <h3>1. 取得する情報</h3>
        <p>
          本サービスは、診断テストの回答を <strong>お客様のブラウザの localStorage</strong> にのみ保存します。
          いかなる情報も、当社サーバーや外部サーバーには送信されません。
        </p>
        <p>
          ただし、サイト全体のアクセス統計のために、Google Analytics を利用する場合があります。
          この場合、IP アドレス、ブラウザ種別、訪問ページ、参照元等の匿名統計データが収集されます。
        </p>

        <h3>2. Cookie とローカルストレージ</h3>
        <p>
          診断結果の保持に localStorage を使用します。
          ブラウザのデータ消去でいつでも削除できます。
          Google Analytics による Cookie 利用は、ブラウザの Cookie 設定で無効化可能です。
        </p>

        <h3>3. 広告について</h3>
        <p>
          本サービスでは、運営費用の一部を Google AdSense による広告で賄う場合があります。
          AdSense は Cookie を利用してパーソナライズ広告を配信することがあります。
          Google による広告の詳細は <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">こちら</a>。
        </p>

        <h3>4. 第三者サービス</h3>
        <p>
          本サービスは Vercel(ホスティング)、Google Fonts、Google Analytics、Google AdSense 等の
          第三者サービスを利用しています。各サービスのプライバシーポリシーに従ってデータが処理されます。
        </p>

        <h3>5. お問い合わせ</h3>
        <p>
          本ポリシーに関するご質問は、お問い合わせページよりお寄せください。
        </p>
      </section>
    </article>
  );
}

export default PrivacyPolicy;
