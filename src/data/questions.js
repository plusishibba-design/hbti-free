// HBTI 質問 20 問
// 軸 1 = habitat (S/F = 海/淡水): スコア負 → S、正 → F
// 軸 2 = method (L/B = ルアー/エサ): スコア負 → L、正 → B
// 軸 3 = scale (N/R = 近場/遠征): スコア負 → N、正 → R
// 軸 4 = reward (G/F = 引き/食): スコア負 → G、正 → F
//
// 前半 Q1〜Q8: 一般質問(±1)
// 中盤 Q9〜Q16: 直接質問(±2)
// 後半 Q17〜Q20: 投影型(複数軸を同時に動かす)

export const QUESTIONS = [
  // ───── 前半: 一般質問 8 問(±1)─────
  {
    id: 1,
    section: 'general',
    axis: 'habitat',
    question: '旅行で訪れたい場所は?',
    options: [
      { label: '海辺の街(湘南・沖縄・南紀)', scores: { habitat: -1 } },
      { label: '山あいの宿(信州・東北の山里)', scores: { habitat: +1 } },
    ],
  },
  {
    id: 2,
    section: 'general',
    axis: 'habitat',
    question: '子供の頃の "水" の記憶は?',
    options: [
      { label: '海水浴・砂浜', scores: { habitat: -1 } },
      { label: '川遊び・釣り堀・池', scores: { habitat: +1 } },
    ],
  },
  {
    id: 3,
    section: 'general',
    axis: 'method',
    question: '料理を作るとき、楽しいのは?',
    options: [
      { label: '新しいレシピで未知の味に挑戦', scores: { method: -1 } },
      { label: '定番料理を完璧に仕上げる', scores: { method: +1 } },
    ],
  },
  {
    id: 4,
    section: 'general',
    axis: 'method',
    question: 'ファッションは?',
    options: [
      { label: 'シーズンごとの新トレンドを取り入れる', scores: { method: -1 } },
      { label: '長く着られる定番アイテムを大切に', scores: { method: +1 } },
    ],
  },
  {
    id: 5,
    section: 'general',
    axis: 'scale',
    question: '理想の休日のはじまり方は?',
    options: [
      { label: '朝寝坊して 11 時に近所のカフェ', scores: { scale: -1 } },
      { label: '5 時起きで遠出', scores: { scale: +1 } },
    ],
  },
  {
    id: 6,
    section: 'general',
    axis: 'scale',
    question: '未踏の道と既知の道、惹かれるのは?',
    options: [
      { label: '知っている道で安心したい', scores: { scale: -1 } },
      { label: '知らない道で発見したい', scores: { scale: +1 } },
    ],
  },
  {
    id: 7,
    section: 'general',
    axis: 'reward',
    question: '旅行で最高の瞬間は?',
    options: [
      { label: '絶景を見た瞬間の感動', scores: { reward: -1 } },
      { label: 'その夜の宿で食べる地元料理', scores: { reward: +1 } },
    ],
  },
  {
    id: 8,
    section: 'general',
    axis: 'reward',
    question: 'ゲームをするとき、楽しいのは?',
    options: [
      { label: '難関ボスを倒した瞬間', scores: { reward: -1 } },
      { label: 'クリア後の特典・収集品', scores: { reward: +1 } },
    ],
  },

  // ───── 中盤: 直接質問 8 問(±2)─────
  {
    id: 9,
    section: 'direct',
    axis: 'habitat',
    question: '行きつけの釣り場として惹かれるのは?',
    options: [
      { label: '海(港・磯・船)', scores: { habitat: -2 } },
      { label: '淡水(湖・川・池)', scores: { habitat: +2 } },
    ],
  },
  {
    id: 10,
    section: 'direct',
    axis: 'habitat',
    question: '釣り上げた魚を持ち帰ったとき、食卓のイメージは?',
    options: [
      { label: '刺身・煮付け・干物', scores: { habitat: -2 } },
      { label: '塩焼き・天ぷら・甘露煮', scores: { habitat: +2 } },
    ],
  },
  {
    id: 11,
    section: 'direct',
    axis: 'method',
    question: '道具を準備する朝、心が躍るのは?',
    options: [
      { label: '新しいルアーをパッケージから出す瞬間', scores: { method: -2 } },
      { label: '餌箱に氷を敷いて、活きエサを並べる瞬間', scores: { method: +2 } },
    ],
  },
  {
    id: 12,
    section: 'direct',
    axis: 'method',
    question: '釣り中の楽しみとして強く感じるのは?',
    options: [
      { label: 'ロッドアクションでルアーを操作する', scores: { method: -2 } },
      { label: 'ウキやアタリを観察して魚を待つ', scores: { method: +2 } },
    ],
  },
  {
    id: 13,
    section: 'direct',
    axis: 'scale',
    question: '釣りに行ける時間が手に入った。どこに直行?',
    options: [
      { label: '車で 15 分の近場の堤防・小川', scores: { scale: -2 } },
      { label: '始発で出る遠征釣行', scores: { scale: +2 } },
    ],
  },
  {
    id: 14,
    section: 'direct',
    axis: 'scale',
    question: '釣り場の写真で胸が高鳴るのは?',
    options: [
      { label: '港の朝もや、近所の川辺', scores: { scale: -2 } },
      { label: '外海の水平線、源流の渓谷', scores: { scale: +2 } },
    ],
  },
  {
    id: 15,
    section: 'direct',
    axis: 'reward',
    question: '釣り上げた瞬間に頭をよぎるのは?',
    options: [
      { label: '"うわ、すげえ引き!"', scores: { reward: -2 } },
      { label: '"今夜の刺身、決まりだな"', scores: { reward: +2 } },
    ],
  },
  {
    id: 16,
    section: 'direct',
    axis: 'reward',
    question: '釣果報告で自慢したいのは?',
    options: [
      { label: 'ファイトの様子・引きの強さ', scores: { reward: -2 } },
      { label: '釣った魚の料理・味', scores: { reward: +2 } },
    ],
  },

  // ───── 後半: 投影型 4 問(複数軸)─────
  {
    id: 17,
    section: 'projective',
    axis: 'habitat',
    question: '海辺の宿で目覚めた朝、まずすることは?',
    options: [
      { label: '浜辺をジョギング', scores: { habitat: -1, reward: -1, scale: -1 } },
      { label: '朝食前に近くの魚市場をのぞきに行く', scores: { habitat: -1, reward: +1, scale: -1 } },
      { label: '漁師の船に同乗できないか頼みに行く', scores: { habitat: -2, scale: +1, reward: -1 } },
      { label: '部屋でゆっくり過ごす', scores: { habitat: -1, scale: -1, reward: +1 } },
      { label: '内陸へ向かい川沿いを散歩する', scores: { habitat: +2 } },
    ],
  },
  {
    id: 18,
    section: 'projective',
    axis: 'method',
    question: '釣り具屋で買い物カゴに最初に入れるのは?',
    options: [
      { label: '新作ルアー数種', scores: { method: -2, reward: -1 } },
      { label: '活きエサ + コマセ・練り餌', scores: { method: +2, reward: +1 } },
      { label: '高級リール', scores: { method: -1, scale: +1, reward: -1 } },
      { label: '折りたたみ椅子と保温ボトル', scores: { scale: -1, reward: +2 } },
      { label: '釣り雑誌と地図', scores: { scale: +1 } },
    ],
  },
  {
    id: 19,
    section: 'projective',
    axis: 'scale',
    question: '魚が有名な街に着いたら、まず探すのは?',
    options: [
      { label: '港か漁港', scores: { habitat: -2, scale: -1 } },
      { label: '川か湖', scores: { habitat: +2 } },
      { label: '鮮魚を扱う市場', scores: { habitat: -1, reward: +2, scale: -1 } },
      { label: '街中の釣具屋', scores: { method: -1, scale: -1 } },
      { label: '高台の景色のいいスポット', scores: { scale: +2, reward: -1 } },
    ],
  },
  {
    id: 20,
    section: 'projective',
    axis: 'reward',
    question: '釣れた魚 1 匹を見たとき、最初に湧く感情は?',
    options: [
      { label: '"やった、引きを楽しめた!"', scores: { reward: -2 } },
      { label: '"今夜の食事が決まった"', scores: { reward: +2 } },
      { label: '"もっと大物を狙いたい、次は遠征だ"', scores: { scale: +1, reward: -1 } },
      { label: '"写真を撮って、丁寧にリリース"', scores: { reward: -2, scale: +1 } },
      { label: '"今夜は何の料理にしよう、捌き方を考え始める"', scores: { reward: +2, scale: -1 } },
    ],
  },
];

export const TOTAL_QUESTIONS = QUESTIONS.length;
