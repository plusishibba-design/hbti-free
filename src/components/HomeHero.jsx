import React from 'react';

function HomeHero({ onStart, onTypeList }) {
  return (
    <section className="home-hero">
      <p className="home-eyebrow">🎣 釣り人 16 タイプ性格診断</p>
      <h2 className="home-title">
        あなたは
        <em>どの釣り人</em>?
      </h2>
      <p className="home-lede">
        20 問の質問に答えるだけ。
        <br />
        あなたの釣りの嗜好を 16 タイプに診断します。
      </p>
      <div className="home-cta-group">
        <button className="cta-primary" onClick={onStart}>テストをはじめる →</button>
        <button className="cta-ghost" onClick={onTypeList}>16 タイプを見る</button>
      </div>
      <p className="home-sub-note">
        所要時間 約 3 分 / 無料 / 登録不要
      </p>
    </section>
  );
}

export default HomeHero;
