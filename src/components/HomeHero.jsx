import React from 'react';

function HomeHero({ onStart }) {
  return (
    <section className="home-hero">
      <p className="home-eyebrow">🎣 釣り人性格診断</p>
      <h2 className="home-title">
        あなたは
        <em>どの釣り人</em>?
      </h2>
      <div className="home-cta-group">
        <button className="cta-primary" onClick={onStart}>テストをはじめる →</button>
      </div>
    </section>
  );
}

export default HomeHero;
