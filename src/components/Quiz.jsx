import React, { useState } from 'react';
import { QUESTIONS, TOTAL_QUESTIONS } from '../data/questions';

const STORAGE_KEY = 'hbti-answers';

function Quiz({ onComplete, onCancel }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(() => Array(TOTAL_QUESTIONS).fill(null));

  const question = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / TOTAL_QUESTIONS) * 100;
  const isProjective = question.section === 'projective';

  const handleSelect = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);

    if (currentIndex < TOTAL_QUESTIONS - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 200);
    } else {
      const payload = QUESTIONS.map((q, i) => ({
        question: q,
        optionIndex: newAnswers[i],
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setTimeout(() => onComplete(), 200);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    else onCancel();
  };

  const sectionLabel = {
    general: '一般 質問',
    direct: '直接 質問',
    projective: '投影型 質問',
  }[question.section];

  return (
    <section className="quiz">
      <div className="quiz-header">
        <button className="quiz-back" onClick={handleBack}>
          {currentIndex === 0 ? '← トップへ戻る' : '← 前の質問'}
        </button>
        <div className="quiz-progress">
          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <p className="quiz-progress-text">
            <span className="quiz-progress-num">{currentIndex + 1}</span>
            <span className="quiz-progress-sep">/</span>
            <span className="quiz-progress-total">{TOTAL_QUESTIONS}</span>
            <span className="quiz-section-label">{sectionLabel}</span>
          </p>
        </div>
      </div>

      <article className="quiz-card">
        <p className="quiz-question-num">QUESTION {String(currentIndex + 1).padStart(2, '0')}</p>
        <h2 className="quiz-question-text">{question.question}</h2>

        <div className={`quiz-options ${isProjective ? 'quiz-options--projective' : ''}`}>
          {question.options.map((option, i) => (
            <button
              key={i}
              className={`quiz-option ${answers[currentIndex] === i ? 'quiz-option--selected' : ''}`}
              onClick={() => handleSelect(i)}
            >
              <span className="quiz-option-letter">{String.fromCharCode(65 + i)}</span>
              <span className="quiz-option-label">{option.label}</span>
            </button>
          ))}
        </div>

        {isProjective && (
          <p className="quiz-note">
            ※ この質問は複数の軸に同時に影響します。直感的に最も近いものをお選びください。
          </p>
        )}
      </article>
    </section>
  );
}

export default Quiz;
