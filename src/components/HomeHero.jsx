import React from 'react';

function HomeHero({ onStart, onAboutClick, onTypeList }) {
  return (
    <section className="home-hero">
      <p className="home-eyebrow">HOOK-BAIT TYPE INDICATOR</p>
      <h2 className="home-title">
        あなたに最適な
        <br />
        <em>釣りのタイプ</em>を、診断する。
      </h2>
      <p className="home-lede">
        20 問の質問に答えると、釣りの嗜好を 4 軸で測り、
        <br />
        16 タイプのうちあなたの 1 つを導き出します。
      </p>
      <div className="home-cta-group">
        <button className="cta-primary" onClick={onStart}>テストを始める</button>
        <button className="cta-ghost" onClick={onTypeList}>16 タイプを先に見る</button>
      </div>

      <section className="home-section">
        <p className="eyebrow">DIAGNOSIS</p>
        <h3 className="section-title">釣りを 4 つの軸で読み解く。</h3>
        <div className="axes-grid">
          <article className="axis-card">
            <p className="axis-letter">S / F</p>
            <h4>水域</h4>
            <p>海(Saltwater)か淡水(Freshwater)か。釣りの根幹を決める最初の軸。</p>
          </article>
          <article className="axis-card">
            <p className="axis-letter">L / B</p>
            <h4>流派</h4>
            <p>ルアー(Lure)か伝統エサ(Bait)か。技巧と王道の境界線。</p>
          </article>
          <article className="axis-card">
            <p className="axis-letter">N / R</p>
            <h4>規模</h4>
            <p>近場(Near)か遠征(Remote)か。釣りに払う覚悟の量。</p>
          </article>
          <article className="axis-card">
            <p className="axis-letter">G / F</p>
            <h4>動機</h4>
            <p>引き(Game)か食(Feast)か。あなたが釣りに求めるもの。</p>
          </article>
        </div>
      </section>

      <section className="home-section">
        <p className="eyebrow">HOW IT WORKS</p>
        <h3 className="section-title">3 ステップで完了。</h3>
        <ol className="how-steps">
          <li>
            <span className="step-num">01</span>
            <div>
              <h4>20 問の質問に答える</h4>
              <p>釣りの直接質問だけでなく、一般的な性格傾向や、複数軸を測る投影型問題もあります。所要時間およそ 3 〜 5 分。</p>
            </div>
          </li>
          <li>
            <span className="step-num">02</span>
            <div>
              <h4>4 軸スコアから 16 タイプを判定</h4>
              <p>あなたの答えが各軸に蓄積され、4 文字の略号(例: SBRG 荒磯の僧)が決まります。</p>
            </div>
          </li>
          <li>
            <span className="step-num">03</span>
            <div>
              <h4>あなただけの結果ページが表示される</h4>
              <p>キャラクター解説 + 推奨魚種 + タックル + 釣り場 + 料理 + さらに深めるための分岐ガイド。</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="home-section home-section--center">
        <button className="cta-primary" onClick={onStart}>テストを始める →</button>
        <p className="home-sub-note">
          サインアップ不要。すべての処理はあなたのブラウザ内で完結します。
        </p>
      </section>
    </section>
  );
}

export default HomeHero;
