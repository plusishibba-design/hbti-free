import React from 'react';
import { TYPES, TYPES_ORDERED } from '../data/types';

function TypeListPage({ onSelect, onStart }) {
  const saltTypes = TYPES_ORDERED.slice(0, 8).map((c) => TYPES[c]);
  const freshTypes = TYPES_ORDERED.slice(8, 16).map((c) => TYPES[c]);

  return (
    <section className="type-list-page">
      <header className="type-list-header">
        <p className="eyebrow">16 TYPES</p>
        <h2>HBTI 全 16 タイプ</h2>
        <p className="type-list-lede">
          海 8 タイプ + 淡水 8 タイプ。あなたがどれに当てはまるかは、テストで判定されます。
        </p>
        <button className="cta-primary" onClick={onStart}>診断テストを始める</button>
      </header>

      <section className="type-group">
        <p className="eyebrow">SALTWATER</p>
        <h3>海(Saltwater)8 タイプ</h3>
        <div className="type-grid">
          {saltTypes.map((type) => (
            <TypeCard key={type.code} type={type} onSelect={() => onSelect(type.code)} />
          ))}
        </div>
      </section>

      <section className="type-group">
        <p className="eyebrow">FRESHWATER</p>
        <h3>淡水(Freshwater)8 タイプ</h3>
        <div className="type-grid">
          {freshTypes.map((type) => (
            <TypeCard key={type.code} type={type} onSelect={() => onSelect(type.code)} />
          ))}
        </div>
      </section>
    </section>
  );
}

function TypeCard({ type, onSelect }) {
  return (
    <button
      className={`type-card ${type.isSuperAngler ? 'type-card--super' : ''}`}
      onClick={onSelect}
    >
      <p className="type-card-code">{type.code}</p>
      <h4 className="type-card-title">
        {type.isSuperAngler && '🛒 '}
        {type.title}
      </h4>
      <p className="type-card-axes">{type.axes.join(' / ')}</p>
      <span className="type-card-arrow" aria-hidden="true">→</span>
    </button>
  );
}

export default TypeListPage;
