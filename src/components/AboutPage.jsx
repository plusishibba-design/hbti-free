import React from 'react';

function AboutPage() {
  return (
    <article className="static-page">
      <header className="static-page-header">
        <p className="eyebrow">ABOUT</p>
        <h2>HBTI について</h2>
      </header>

      <section className="prose">
        <p>
          <strong>HBTI (Hook-Bait Type Indicator)</strong> は、
          MBTI 風の 16 タイプ性格診断にインスパイアされた、
          釣りの嗜好を診断する Web ツールです。
        </p>
        <p>
          4 つの軸 — <strong>水域(海 / 淡水)</strong>、
          <strong>流派(ルアー / エサ)</strong>、
          <strong>規模(近場 / 遠征)</strong>、
          <strong>動機(引き / 食)</strong>
          —で、あなたの釣りに対する関わり方を 16 タイプに分類します。
        </p>
        <p>
          そして、釣りに全く興味がない人のための特殊枠
          <strong>🛒 Super Angler</strong>
          も用意しました。「アングラーを超越した境地 = スーパーマーケットの鮮魚コーナー」というオチが、この診断の隠し玉です。
        </p>
      </section>

      <section className="prose">
        <h3>軸の定義</h3>
        <ul>
          <li><strong>軸 1 水域(S / F)</strong>: Saltwater 海 / Freshwater 淡水</li>
          <li><strong>軸 2 流派(L / B)</strong>: Lure ルアー / Bait エサ</li>
          <li><strong>軸 3 規模(N / R)</strong>: Near 近場 / Remote 遠征</li>
          <li><strong>軸 4 動機(G / F)</strong>: Game 引き / Feast 食</li>
        </ul>
        <p>
          4 軸の組み合わせで 2⁴ = 16 タイプ。
          そのうち「すべての軸が釣りに向かない人」の組み合わせ(SBNF)が
          Super Angler に振り分けられます。
        </p>
      </section>

      <section className="prose">
        <h3>このサイトについて</h3>
        <p>
          HBTI は <strong>Studio T. Ishi</strong> が運営する複数の Web ツール
          (Image Tools / PDF Tools / Calc Tools / Career Tools / Debt Tools) の
          姉妹サイトです。すべて <strong>ブラウザ完結・サインアップ不要・無料</strong>
          をポリシーとしています。
        </p>
        <p>
          診断結果は localStorage に保存され、サーバーには一切送信されません。
        </p>
      </section>

      <section className="prose">
        <h3>注意</h3>
        <p>
          MBTI® は日本 MBTI 協会の登録商標であり、HBTI は MBTI とは無関係です。
          16 タイプ性格診断の手法にインスパイアされた、釣り文化のためのパロディサービスです。
        </p>
      </section>
    </article>
  );
}

export default AboutPage;
