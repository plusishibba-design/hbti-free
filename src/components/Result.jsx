import React, { useEffect, useState } from 'react';
import { TYPES } from '../data/types';
import { calculateScores, determineType, analyzeScores } from '../lib/scoring';

const STORAGE_KEY = 'hbti-answers';

function Result({ onRetake, onTypeList, onHome }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setData({ error: 'まだ診断が完了していません。' });
        return;
      }
      const answers = JSON.parse(raw);
      const scores = calculateScores(answers);
      const code = determineType(scores);
      const type = TYPES[code];
      const analysis = analyzeScores(scores);
      setData({ scores, code, type, analysis });
    } catch (e) {
      setData({ error: '結果の読み込みに失敗しました。' });
    }
  }, []);

  if (!data) {
    return <div className="result-loading">読み込み中…</div>;
  }

  if (data.error) {
    return (
      <section className="result-empty">
        <p>{data.error}</p>
        <button className="cta-primary" onClick={onRetake}>テストを始める</button>
      </section>
    );
  }

  const { type, code, analysis } = data;
  const isSuper = type.isSuperAngler;

  return (
    <section className={`result ${isSuper ? 'result--super' : ''}`}>
      <header className="result-header">
        <p className="result-eyebrow">あなたのタイプは</p>
        <p className="result-code">{code}</p>
        <h2 className="result-title">
          {isSuper && '🛒 '}
          {type.title}
        </h2>
        <p className="result-axes">
          {type.axes.join(' / ')}
        </p>
      </header>

      <article className="result-character">
        {type.character.map((para, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
        ))}
      </article>

      <section className="result-block">
        <p className="eyebrow">SCORES</p>
        <h3>4 軸の集計</h3>
        <div className="result-scores">
          {Object.entries(analysis).map(([axis, info]) => (
            <div key={axis} className="result-score-row">
              <span className="result-score-label">
                {axis === 'habitat' && '軸 1 水域'}
                {axis === 'method' && '軸 2 流派'}
                {axis === 'scale' && '軸 3 規模'}
                {axis === 'reward' && '軸 4 動機'}
              </span>
              <span className="result-score-value">
                <strong>{info.letter}</strong>({info.label}) {info.score >= 0 ? '+' : ''}{info.score}
              </span>
            </div>
          ))}
        </div>
      </section>

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
        <button className="cta-primary" onClick={onRetake}>もう一度テストする</button>
        <button className="cta-ghost" onClick={onTypeList}>他のタイプを見る</button>
        <button className="cta-ghost" onClick={onHome}>トップへ</button>
      </div>
    </section>
  );
}

export default Result;
