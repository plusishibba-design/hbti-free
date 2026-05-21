# HBTI — Hook-Bait Type Indicator

MBTI 風 16 タイプで診断する、釣り適性パーソナリティテスト。

- **URL**: https://hbti-free.vercel.app/(予定)
- **タイプ数**: 16(15 通常 + 1 Super Angler 特殊枠)
- **質問数**: 20 問(一般 8 + 直接 8 + 投影型 4)
- **所要時間**: 約 3〜5 分
- **構成**: React 19 + Vite 8、ブラウザ完結(サーバー不要)、localStorage 保存

## 4 軸

| 軸 | 対立 | 略号 |
|---|---|---|
| 水域 | 海(Saltwater)/ 淡水(Freshwater) | S / F |
| 流派 | ルアー(Lure)/ エサ(Bait) | L / B |
| 規模 | 近場(Near)/ 遠征(Remote) | N / R |
| 動機 | 引き(Game)/ 食(Feast) | G / F |

## ローカル開発

```sh
npm install
npm run dev      # 開発サーバー
npm run build    # 本番ビルド
npm run preview  # 本番ビルドのプレビュー
```

## デプロイ

main ブランチに push すると Vercel が自動デプロイ。
コミット作者は `plusishibba-design <plus.ishi.bba@gmail.com>` 名義必須。

## 関連

Studio T. Ishi の姉妹サイト群の一員:

- [Image Tools](https://www.imagetools-free.com/)
- [PDF Tools](https://www.pdftools-free.com/)
- [Calc Tools](https://www.calctools-free.info/)
- [Career Tools](https://www.careertools-free.info/)
- [Debt Tools](https://debttools-free.vercel.app/)

## 設計書

Obsidian Vault: `副業/Webツール/18_HBTI.md`
