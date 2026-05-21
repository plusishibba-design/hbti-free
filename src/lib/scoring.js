// HBTI 採点ロジック

/**
 * 回答配列からスコアを集計する
 * @param {Array<{question: object, optionIndex: number}>} answers
 * @returns {{habitat: number, method: number, scale: number, reward: number}}
 */
export function calculateScores(answers) {
  const scores = { habitat: 0, method: 0, scale: 0, reward: 0 };
  for (const { question, optionIndex } of answers) {
    if (optionIndex == null) continue;
    const option = question.options[optionIndex];
    if (!option || !option.scores) continue;
    for (const [axis, value] of Object.entries(option.scores)) {
      scores[axis] = (scores[axis] || 0) + value;
    }
  }
  return scores;
}

/**
 * スコアから 4 文字タイプコードを判定する
 * 軸 1 < 0 → S, ≥ 0 → F
 * 軸 2 < 0 → L, ≥ 0 → B
 * 軸 3 < 0 → N, ≥ 0 → R
 * 軸 4 < 0 → G, ≥ 0 → F
 * @param {object} scores
 * @returns {string} 4 文字タイプコード (例: "SLNG", "SBNF")
 */
export function determineType(scores) {
  const h = scores.habitat < 0 ? 'S' : 'F';
  const m = scores.method < 0 ? 'L' : 'B';
  const s = scores.scale < 0 ? 'N' : 'R';
  const r = scores.reward < 0 ? 'G' : 'F';
  return h + m + s + r;
}

/**
 * 軸ごとのスコアと判定文字を組み合わせて返す(結果ページの可視化用)
 */
export function analyzeScores(scores) {
  return {
    habitat: { score: scores.habitat, letter: scores.habitat < 0 ? 'S' : 'F', label: scores.habitat < 0 ? '海' : '淡水' },
    method:  { score: scores.method,  letter: scores.method < 0 ? 'L' : 'B', label: scores.method < 0 ? 'ルアー' : 'エサ' },
    scale:   { score: scores.scale,   letter: scores.scale < 0 ? 'N' : 'R', label: scores.scale < 0 ? '近場' : '遠征' },
    reward:  { score: scores.reward,  letter: scores.reward < 0 ? 'G' : 'F', label: scores.reward < 0 ? '引き' : '食' },
  };
}

/**
 * スコアが 0 に近いボーダー判定(±1 以内なら border = true)
 */
export function isBorder(scores) {
  return Object.values(scores).some((v) => Math.abs(v) <= 1);
}
