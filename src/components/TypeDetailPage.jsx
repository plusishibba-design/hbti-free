import React from 'react';
import { TYPES } from '../data/types';

function TypeDetailPage({ code, onBack, onStart }) {
  const type = TYPES[code];

  if (!type) {
    return (
      <section className="type-detail-page">
        <p>このタイプは見つかりませんでした。</p>
        <button className="cta-ghost" onClick={onBack}>← 一覧へ戻る</button>
      </section>
    );
  }

  const isSuper = type.isSuperAngler;

  return (
    <section className={`type-detail-page ${isSuper ? 'type-detail-page--super' : ''}`}>
      <button className="back-link" onClick={onBack}>← 16 タイプ一覧へ戻る</button>

      <header className="type-detail-header">
        <p className="type-detail-code">{type.code}</p>
        <h2 className="type-detail-title">
          {isSuper && '🛒 '}
          {type.title}
        </h2>
        <p className="type-detail-axes">{type.axes.join(' / ')}</p>
      </header>

      <article className="type-detail-character">
        {type.character.map((para, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
        ))}
      </article>

      <section className="result-block">
        <p className="eyebrow">推奨魚種</p>
        <ul className="result-fishes">
          {type.fishes.map((fish, i) => (
            <li key={i}>{fish}</li>
          ))}
        </ul>
      </section>

      <section className="result-block">
        <p className="eyebrow">推奨タックル</p>
        <p>{type.tackle}</p>
      </section>

      <section className="result-block">
        <p className="eyebrow">推奨釣り場</p>
        <p>{type.locations}</p>
      </section>

      <section className="result-block">
        <p className="eyebrow">推奨料理</p>
        <ul className="result-cuisine">
          {type.cuisine.map((dish, i) => (
            <li key={i}>{dish}</li>
          ))}
        </ul>
      </section>

      <section className="result-block result-more">
        <p className="eyebrow">さらに、</p>
        <ul className="result-more-list">
          {type.more.map((item, i) => (
            <li key={i}>
              <strong>{item.condition}</strong> → {item.recommendation}
            </li>
          ))}
        </ul>
      </section>

      <section className="result-block result-oneline">
        <blockquote>{type.oneLine}</blockquote>
      </section>

      <div className="result-actions">
        <button className="cta-primary" onClick={onStart}>自分のタイプを診断する</button>
        <button className="cta-ghost" onClick={onBack}>← 一覧へ戻る</button>
      </div>
    </section>
  );
}

export default TypeDetailPage;
