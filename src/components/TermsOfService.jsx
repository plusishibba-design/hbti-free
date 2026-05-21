import React from 'react';

function TermsOfService() {
  return (
    <article className="static-page">
      <header className="static-page-header">
        <p className="eyebrow">TERMS OF SERVICE</p>
        <h2>利用規約</h2>
        <p className="last-updated">最終更新日: 2026 年 5 月 22 日</p>
      </header>

      <section className="prose">
        <p>
          本利用規約は、Studio T. Ishi が運営する HBTI(Hook-Bait Type Indicator、以下「本サービス」)の利用条件を定めるものです。
          本サービスをご利用いただくことで、本規約に同意いただいたものとみなします。
        </p>

        <h3>1. 本サービスの内容</h3>
        <p>
          本サービスは、釣りに関する 16 タイプ性格診断を無料で提供するエンターテインメントサービスです。
          診断結果はあくまで娯楽目的のものであり、医学的・心理学的な診断ではありません。
        </p>

        <h3>2. 免責事項</h3>
        <p>
          本サービスの利用により生じたいかなる損害・損失について、Studio T. Ishi は責任を負いません。
          推奨される釣り具・釣り場・料理等の情報は、参考情報として提供するものであり、
          実際の釣行・調理に際してはご自身の判断と責任のもとで行ってください。
        </p>

        <h3>3. 知的財産</h3>
        <p>
          本サービスのコンテンツ(キャラクター解説・タイプ称号・質問文・デザイン等)の著作権は
          Studio T. Ishi に帰属します。無断での複製・転載を禁じます。
          診断結果を SNS でシェアすることは歓迎します。
        </p>

        <h3>4. MBTI 商標について</h3>
        <p>
          MBTI® は日本 MBTI 協会の登録商標です。HBTI は MBTI とは別の独自サービスで、
          16 タイプ性格診断の手法にインスパイアされたパロディ作品です。
        </p>

        <h3>5. 規約の変更</h3>
        <p>
          本規約は予告なく変更される場合があります。最新版は本ページに掲載されます。
        </p>

        <h3>6. 準拠法</h3>
        <p>
          本規約は日本法に準拠し、本サービスに関する紛争は東京地方裁判所を専属的合意管轄とします。
        </p>
      </section>
    </article>
  );
}

export default TermsOfService;
