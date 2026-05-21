import React from 'react';

const EMAIL = 'aamujou1@gmail.com';

function ContactPage() {
  return (
    <article className="static-page">
      <header className="static-page-header">
        <p className="eyebrow">CONTACT</p>
        <h2>お問い合わせ</h2>
      </header>

      <section className="prose">
        <p>HBTI に関するご質問・ご要望・不具合のご報告は、下記までお寄せください。</p>
        <p className="contact-email">
          <a href={`mailto:${EMAIL}?subject=%5BHBTI%5D%20`}>{EMAIL}</a>
        </p>
        <p>
          件名に <code>[HBTI]</code> を含めていただけると、対応がスムーズです。
        </p>
      </section>

      <section className="prose">
        <h3>よくあるお問い合わせ</h3>
        <ul>
          <li>診断結果が前回と違う → 質問への解釈が回によって変わるためです。何度か試してみてください。</li>
          <li>該当する釣り種類が見つからない → タイプ説明の「さらに、」をご覧ください。各タイプ内で複数ジャンルを案内しています。</li>
          <li>結果を消したい → ブラウザのローカルストレージを削除してください。</li>
        </ul>
      </section>
    </article>
  );
}

export default ContactPage;
