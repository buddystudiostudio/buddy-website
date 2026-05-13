import React from "react";

export default function PlansPage() {
  const lineUrl = "https://lin.ee/t4d7Mdw";
  const buddyLogo = "/buddy-logo.png";
  const instagramUrl = "https://www.instagram.com/buddyenglishstudio/";

  const plans = [
    {
      name: "初回体験・診断セッション",
      price: "¥3,500",
      sub: "50分",
      badge: "はじめての方へ",
      description:
        "事前アンケートをもとに、現在地・目標・弱点を50分で整理します。30〜90日間の学習ロードマップとおすすめプランをご提案します。初回体験のみのご利用も可能です。",
      points: [
        "現在の英語力・目的・悩みを整理",
        "30〜90日間の学習ロードマップを作成",
        "最適な継続プランをご提案",
        "無理な勧誘なし",
      ],
    },
    {
      name: "スタートプラン",
      price: "¥28,000 / 月",
      sub: "月4pt利用可",
      badge: "基礎から整える",
      description:
        "英語学習を再スタートしたい方向け。最初の3か月で、目標・弱点・学習リズムを整理します。",
      points: [
        "目安：月2回の1対1セッション",
        "英語の学び直し・基礎整理におすすめ",
        "無理なく続ける学習リズムを作る",
      ],
    },
    {
      name: "スタンダードプラン",
      price: "¥44,000 / 月",
      sub: "月8pt利用可 + Blueprint",
      badge: "迷ったらこちら",
      recommended: true,
      description:
        "継続して伸ばしたい社会人向け。レッスン内で進捗を確認しながら、次にやることを明確にして進めます。",
      points: [
        "目安：週1回ペースの1対1セッション",
        "TOEIC対策・英会話・ビジネス英語に対応",
        "Buddy Blueprintで学習方針を見える化",
      ],
    },
    {
      name: "ビジネス実践プラン",
      price: "¥54,000 / 月",
      sub: "月8pt利用可",
      badge: "実務で使う方向け",
      description:
        "会議・メール・面接・プレゼン・英文資料など、実務に合わせて使える英語をサポートします。",
      points: [
        "英文メール・会議・プレゼン対策",
        "英語面接や転職準備にも対応",
        "実際の業務資料や回答レビューにも活用可能",
      ],
    },
    {
      name: "短期集中プラン",
      price: "¥74,000 / 月",
      sub: "月12pt利用可",
      badge: "集中して進めたい方へ",
      description:
        "TOEIC、英語面接、プレゼン、転職準備など、明確な目標日から逆算して集中的に進めます。",
      points: [
        "目安：週1〜2回ペースで集中的に対策",
        "期限があるTOEIC・面接・プレゼン対策におすすめ",
        "短期間で優先順位を絞って進める",
      ],
    },
  ];

  const choiceGuide = [
    {
      title: "まず相談したい方",
      plan: "初回体験・診断セッション",
      text: "現在地・目的・弱点を整理し、合う進め方を一緒に確認します。",
    },
    {
      title: "英語学習を再スタートしたい方",
      plan: "スタートプラン",
      text: "基礎整理や学習リズム作りから、無理なく始めたい方向けです。",
    },
    {
      title: "迷ったら基本はこちら",
      plan: "スタンダードプラン",
      text: "週1回ペースで進捗を確認しながら、継続して伸ばしたい方向けです。",
    },
    {
      title: "仕事で英語を使う方",
      plan: "ビジネス実践プラン",
      text: "会議・メール・面接・プレゼンなど、実務に合わせて練習します。",
    },
    {
      title: "期限がある方",
      plan: "短期集中プラン",
      text: "TOEIC、英語面接、プレゼンなど、目標日から逆算して進めます。",
    },
  ];
  
  const pointUses = [
    {
      title: "1対1セッション",
      point: "2pt",
      text: "TOEIC対策、英会話、ビジネス英語、学習相談などに利用できます。",
    },
    {
      title: "英文レビュー",
      point: "1pt〜",
      text: "英文メール、面接回答、プレゼン資料、英文資料チェックなどに利用できます。",
    },
    {
      title: "Buddy Vault",
      point: "学習管理",
      text: "目標・進め方・復習内容を整理し、次に取り組むことを見える化します。",
    },
  ];

  const trialPlan = plans.find(
    (plan) => plan.name === "初回体験・診断セッション"
  );

  const monthlyPlans = plans.filter((plan) =>
    ["スタートプラン", "スタンダードプラン", "ビジネス実践プラン"].includes(
      plan.name
    )
  );

  const sprintPlan = plans.find((plan) => plan.name === "短期集中プラン");
  
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src={buddyLogo}
              alt="Buddy English Studio logo"
              className="h-12 w-auto object-contain"
            />
          </a>

          <a
            href="/"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            トップへ戻る
          </a>
        </div>
      </header>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
            PRICE / PLANS
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
            料金・プラン詳細
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            目的や学習ペースに合わせて選べるプランを、わかりやすく整理しています。
            迷った場合は、初回体験・診断セッションで現在地と目標を確認したうえで、
            最適な進め方をご提案します。
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
              HOW TO CHOOSE
            </p>

            <h2 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
              迷ったら、この選び方がおすすめです
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
              プラン選びで迷うのは自然なことです。目的や状況に合わせて、
              まずは近いものから確認してみてください。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {choiceGuide.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-xs font-black text-blue-600">
                  {item.title}
                </p>

                <h3 className="mt-3 text-base font-black leading-6 text-slate-900">
                  {item.plan}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-[1.5rem] bg-blue-50 p-5 text-center ring-1 ring-blue-100">
            <p className="text-sm font-bold leading-7 text-blue-800">
              プランは目的や学習状況に合わせて見直し可能です。
              どれが合うかわからない場合は、初回体験・診断セッションで一緒に整理します。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-5">
          {/* Entry plan */}
          <div className="mb-10">
            <div className="mb-5 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
                FIRST STEP
              </p>

              <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                まずは現在地を整理したい方へ
              </h2>
            </div>

            {trialPlan && (
              <div className="rounded-[2rem] bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm ring-1 ring-blue-100 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <span className="mb-4 inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-black text-white">
                      {trialPlan.badge}
                    </span>

                    <h3 className="text-2xl font-black text-slate-900">
                      {trialPlan.name}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p className="text-3xl font-black text-slate-900">
                        {trialPlan.price}
                      </p>
                      <p className="text-sm font-bold text-slate-600">
                        {trialPlan.sub}
                      </p>
                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                      現在地・目的・弱点を整理し、30〜90日間の進め方とおすすめプランをご提案します。
                      初回体験のみのご利用も可能です。
                    </p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {trialPlan.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm font-bold leading-6 text-slate-700"
                        >
                          <span className="text-blue-600">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-full bg-blue-600 px-7 py-4 text-center font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
                  >
                    初回体験をLINEで相談する
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Monthly plans */}
          <div className="mt-12">
            <div className="mb-8 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
                MONTHLY PLANS
              </p>

              <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                継続プラン
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm font-bold leading-7 text-slate-600">
                多くの方には、週1回ペースで進められるスタンダードプランをおすすめしています。
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {monthlyPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col justify-between rounded-[2rem] p-6 shadow-sm ring-1 sm:p-7 ${
                    plan.recommended
                      ? "bg-slate-900 text-white ring-slate-900 lg:-mt-3"
                      : "bg-slate-50 text-slate-900 ring-slate-200"
                  }`}
                >
                  <div>
                    <span
                      className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-black ${
                        plan.recommended
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {plan.badge}
                    </span>

                    <h3 className="text-xl font-black">{plan.name}</h3>

                    <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p className="text-3xl font-black">{plan.price}</p>
                      <p
                        className={`text-sm font-bold ${
                          plan.recommended ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {plan.sub}
                      </p>
                    </div>

                    <p
                      className={`mt-4 text-sm leading-7 ${
                        plan.recommended ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {plan.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {plan.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm font-bold leading-6"
                        >
                          <span className="text-blue-500">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-7 inline-block rounded-full px-6 py-3.5 text-center text-sm font-black shadow-lg transition hover:-translate-y-1 ${
                      plan.recommended
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    このプランをLINEで相談する
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Sprint plan */}
          {sprintPlan && (
            <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-orange-700">
                    期限がある方向け
                  </span>

                  <h3 className="text-2xl font-black text-slate-900">
                    {sprintPlan.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <p className="text-3xl font-black text-slate-900">
                      {sprintPlan.price}
                    </p>
                    <p className="text-sm font-bold text-slate-600">
                      {sprintPlan.sub}
                    </p>
                  </div>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                    {sprintPlan.description}
                  </p>
                </div>

                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-slate-900 px-7 py-4 text-center font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-slate-800"
                >
                  短期集中について相談する
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
              POINT SYSTEM
            </p>

            <h2 className="text-3xl font-black text-slate-900">
              目的に合わせて使えるポイント制
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
              毎月のポイントは、1対1セッションだけでなく、英文レビューや面接回答レビューにも使えます。
              その月の目的に合わせて、必要なサポートを柔軟に組み合わせられます。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pointUses.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] bg-slate-50 p-6 ring-1 ring-slate-200"
              >
                <p className="mb-3 text-sm font-black text-blue-600">
                  {item.point}
                </p>
                <h3 className="text-lg font-black text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] bg-blue-50 p-6 text-sm leading-7 text-blue-800 ring-1 ring-blue-100 sm:p-7">
            <p className="font-bold">
              現在、キャンペーンとして入会金は無料です。支払い方法、キャンセル・日程変更、
              ポイントの具体的な使い方は、初回体験・診断セッションまたはLINEでわかりやすくご案内します。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-14 text-white lg:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-300">
            CONSULTATION
          </p>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            どのプランが合うか迷ったら、まずはLINEでご相談ください
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-200">
            「初回体験希望」または「相談したい」と送るだけで大丈夫です。
            目的や現在のレベルがはっきりしていなくても、一緒に整理します。
          </p>

          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-blue-600 px-9 py-5 text-lg font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
          >
            LINEで料金・プランを相談する
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 Buddy English Studio. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-slate-500">
            <a href="/" className="transition hover:text-blue-600">
              トップ
            </a>

            <a href="/blog" className="transition hover:text-blue-600">
              ブログ
            </a>

            <a href="/faq" className="transition hover:text-blue-600">
              よくある質問
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-600"
            >
              Instagram
            </a>

            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-600"
            >
              LINE相談
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
