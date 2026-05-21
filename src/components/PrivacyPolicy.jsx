import React from 'react';

function PrivacyPolicy() {
  return (
    <article className="static-page">
      <header className="static-page-header">
        <h2>Privacy</h2>
      </header>

      <section className="prose">
        <p>診断の結果はあなたのブラウザに保存されるだけです。サーバーには送られません。</p>
        <p>サイト全体のアクセス数の把握に Google Analytics を、運営費の足しに広告を使うことがあります。</p>
      </section>
    </article>
  );
}

export default PrivacyPolicy;
