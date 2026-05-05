import React, { useState } from "react";

export default function BuddyEnglishStudioWebsite() {
  const [portraitLoaded, setPortraitLoaded] = useState(true);

  const trustStack = [
    {
      title: "TOEIC 990点満点",
      description: "TOEIC満点の知見を活かし、現在の英語力と伸ばす順番をわかりやすく整理します。",
      icon: "🏆",
    },
    {
      title: "米国勤務・留学経験",
      description: "教科書だけでは学びにくい、実際の会話・仕事・異文化コミュニケーションもサポートします。",
      icon: "🌎",
    },
    {
      title: "IT・外資系企業で15年以上",
      description: "営業・パートナー営業・マネジメントの現場経験を活かし、仕事で使う英語にも対応します。",
      icon: "💼",
    },
  ];

  const comparisonData = [
    { feature: "講師の特徴", buddy: "TOEIC 990点満点講師が設計・監修", others: "スクールにより講師経験や専門領域はばらばら" },
    { feature: "レッスン内容", buddy: "目的に合わせた個別設計・実務にも対応", others: "固定カリキュラムを中心に進行" },
    { feature: "サポート", buddy: "1対1で目的整理から学習方針まで伴走", others: "レッスン時間内の学習が中心" },
    { feature: "相談しやすさ", buddy: "LINE・メールで気軽に相談可能", others: "問い合わせ方法や手続きがサービスにより異なる" },
  ];

  const services = [
    {
      title: "ビジネス英語・キャリア",
      text: "英文メール、外資系面接、会議、プレゼンなど、実際の仕事で使う英語を場面別に練習します。",
      tag: "Popular",
    },
    {
      title: "TOEIC® L&R 対策",
      text: "目標スコアから逆算し、弱点分析・学習計画・実践演習まで、効率的に進めます。",
      tag: "Score Up",
    },
    {
      title: "大人の学び直し・英会話",
      text: "基礎文法を整理しながら、知っている英語を実際に使える英語へ変えていきます。",
      tag: "Beginner OK",
    },
  ];

  const serviceExamples = [
    "英文メール添削",
    "英語面接対策",
    "プレゼン練習",
    "旅行英語",
    "接客英語",
    "発音・会話練習",
    "受験・学生英語",
    "留学・海外準備",
  ];

  const lessonFlow = [
    {
      step: "01",
      title: "LINEで無料相談",
      text: "『体験希望です』だけでも大丈夫です。目的や現在のお悩みが決まっていなくても問題ありません。",
    },
    {
      step: "02",
      title: "体験レッスン",
      text: "40分で現在の英語力、伸ばしたい場面、苦手ポイントを一緒に整理します。",
    },
    {
      step: "03",
      title: "学習方針を提案",
      text: "TOEIC、英会話、ビジネス英語など、目標から逆算して取り組む順番を明確にします。",
    },
    {
      step: "04",
      title: "継続するか判断",
      text: "体験後にゆっくり検討できます。無理な勧誘はありません。",
    },
  ];

  const buddyMethod = [
    {
      title: "目的を整理する",
      text: "英語を何のために使いたいのかを明確にし、学習の優先順位を決めます。",
      icon: "🎯",
    },
    {
      title: "現在地を見える化する",
      text: "文法・語彙・聞く力・話す力など、今つまずいているポイントを一緒に確認します。",
      icon: "🧭",
    },
    {
      title: "使う場面で練習する",
      text: "仕事、試験、旅行、面接など、実際に使うシーンに合わせて練習します。",
      icon: "💬",
    },
    {
      title: "続けやすく整える",
      text: "忙しい方でも続けられるよう、無理のない学習量と次の一歩に落とし込みます。",
      icon: "🌱",
    },
  ];

  const profileHighlights = [
    "TOEIC 990点満点",
    "神戸大学卒",
    "米国勤務・留学経験",
    "外資系IT・コンサルティング企業で15年以上",
    "沖縄の海と文化が好き",
    "海外スキューバダイビング経験",
  ];

  const recommendedFor = [
    "英語をやり直したいけど、何から始めればいいかわからない",
    "TOEICの点数を上げたいが、勉強方法が自己流になっている",
    "仕事で英文メール・会議・プレゼン・面接に対応する必要がある",
    "大手英会話スクールより、目的に合わせて個別に相談したい",
    "沖縄で対面、またはオンラインで気軽に英語を学びたい",
  ];

  const seoKeywords = [
    "沖縄 英語レッスン",
    "沖縄 英会話",
    "沖縄 TOEIC対策",
    "ビジネス英語 オンライン",
    "大人 英語 学び直し",
  ];

  const pricingPlans = [
    {
      name: "体験レッスン",
      price: "3,500",
      description: "40分のレッスン + 学習方針のミニ提案",
      features: ["現状のレベルチェック", "弱点と伸び代の整理", "今後の学習方針を提案", "無理な勧誘なし"],
      cta: "LINEで無料相談する",
      highlight: false,
    },
    {
      name: "継続プラン",
      price: "ポイント制",
      description: "ご予算・頻度に合わせて相談可能です",
      features: ["1対1の個別指導", "目的に合わせた内容設計", "英文メール・面接・資料相談も可", "オンライン・対面相談可"],
      cta: "LINEで無料相談する",
      highlight: true,
    },
  ];

  const faqs = [
    {
      q: "英語がかなり苦手でも大丈夫ですか？",
      a: "もちろん大丈夫です。最初に目的と現在地を整理し、必要なところから一緒に始めます。",
    },
    {
      q: "沖縄で対面の英語レッスンはできますか？",
      a: "はい。那覇市・沖縄市・宜野湾市周辺を中心に、対面レッスンもご相談可能です。場所によって別途費用が発生する場合があります。",
    },
    {
      q: "オンライン英語レッスンにも対応していますか？",
      a: "はい。沖縄県外の方や、お忙しい方にはオンラインでの受講も可能です。移動時間を減らして効率よく学習できます。",
    },
    {
      q: "TOEIC対策と英会話を両方見てもらえますか？",
      a: "はい。TOEIC等各種資格対策、英会話、ビジネス英語を、目的に合わせて組み合わせることができます。",
    },
    {
      q: "ビジネス英語や英文メールの相談もできますか？",
      a: "はい。英文メール、英語面接、会議、プレゼンなど、実際の仕事で使う英語にも対応可能です。",
    },
    {
      q: "体験レッスン後にすぐ申し込む必要はありますか？",
      a: "ありません。無理な勧誘はありませんので、体験後にゆっくりご検討いただけます。",
    },
    {
      q: "オンラインと対面、どちらが良いですか？",
      a: "効率重視ならオンライン、対面での相談や緊張感を重視する場合は沖縄県内での対面もご相談可能です。",
    },
    {
      q: "教材費は別途かかりますか？",
      a: "目的に応じて市販教材やご自身の資料を活用します。必要な場合は事前にご相談します。",
    },
    {
      q: "子どもや学生も対応できますか？",
      a: "はい。大人の方を中心にしていますが、学生の方やお子さまの英語学習も目的に応じて対応可能です。",
    },
    {
      q: "支払い方法はどうなりますか？",
      a: "体験レッスンや継続プランの詳細とあわせて、事前にわかりやすくご案内します。ご希望があればLINEでご相談ください。",
    },
    {
      q: "キャンセルや日程変更はできますか？",
      a: "可能です。急なご事情もあると思いますので、できるだけ早めにご連絡ください。詳細ルールはお申し込み時にご案内します。",
    },
    {
      q: "講師は代表が担当しますか？",
      a: "現在は代表が中心となって対応しています。今後、Buddy English Studioの方針を共有した講師によるレッスンも展開予定です。",
    },
    {
      q: "問い合わせ時は何を書けばいいですか？",
      a: "『体験希望です』だけでも大丈夫です。目的やレベルが決まっていなくても、お気軽にご相談ください。",
    },
  ];

  const lineUrl = "https://lin.ee/t4d7Mdw";
  const emailAddress = "buddyenglishstudio@gmail.com";
  const lineQrCode = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Flin.ee%2Ft4d7Mdw";

  // Put the portrait image file in your project at: public/instructor-portrait.png
  // In production, this will load as: /instructor-portrait.png
  const instructorPhoto = "/instructor-portrait.png";

  const InstructorFallback = () => (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 p-8 text-white">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative z-10 w-full max-w-sm rounded-[2rem] border border-white/15 bg-white/10 p-8 text-center shadow-2xl backdrop-blur">
        <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-white text-5xl shadow-xl ring-4 ring-white/20">
          👤
        </div>
        <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-200">Founder / Instructor</p>
        <h3 className="mt-5 text-4xl font-black leading-tight">Buddy<br />English Studio</h3>
        <p className="mx-auto mt-5 max-w-xs text-sm font-medium leading-7 text-blue-100">
          TOEIC 990点満点・米国勤務経験をもとに、英語を仕事と人生に活かす学びをサポートします。
        </p>
        <div className="mt-7 grid gap-3 text-sm font-bold text-blue-50">
          <p className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">TOEIC 990点満点</p>
          <p className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">米国勤務・留学経験</p>
          <p className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">神戸大学卒</p>
        </div>
      </div>
    </div>
  );

  const InstructorVisual = () => (
    portraitLoaded ? (
      <img
        src={instructorPhoto}
        alt="Buddy English Studio founder / instructor portrait"
        className="block h-full w-full object-cover object-center"
        loading="eager"
        decoding="async"
        onError={() => setPortraitLoaded(false)}
      />
    ) : (
      <InstructorFallback />
    )
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-200 selection:text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-lg font-black tracking-tight text-slate-900">BUDDY ENGLISH STUDIO</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Okinawa & Online English Support</p>
          </div>
          <nav className="hidden gap-7 text-sm font-bold text-slate-600 lg:flex">
            <a href="#why" className="hover:text-blue-600">Why Buddy</a>
            <a href="#recommended" className="hover:text-blue-600">For You</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#flow" className="hover:text-blue-600">Flow</a>
            <a href="#price" className="hover:text-blue-600">Price</a>
            <a href="#profile" className="hover:text-blue-600">Founder</a>
          </nav>
          <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
            LINEで無料相談する
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white py-16 lg:py-24" aria-labelledby="hero-heading">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full bg-gradient-to-r from-blue-50 to-orange-50 px-4 py-2 text-sm font-bold text-blue-800 ring-1 ring-blue-100">
              ⚡ 沖縄・対面・オンライン｜TOEIC 990点満点 × 米国勤務経験
            </div>
            <h1 id="hero-heading" className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
  沖縄の英語コーチング｜TOEIC990講師がマンツーマン指導<br />
  <span className="text-blue-600">英語をやり直したい方へ。何から始めるべきか一緒に整理します。</span>
</h1>
            <p className="mt-4 text-base font-semibold text-blue-600">
  「使える英語」まで、最短ルートで伴走します。
</p>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              TOEIC 990点満点、米国勤務経験、外資IT・コンサル企業での実務経験をもとに、
              あなたの目的に合わせて、英語学習の「何から・どの順番で」を一緒に整理します。
              沖縄での対面レッスン、全国対応のオンラインにも対応しています。
            </p>
<div className="mt-6 space-y-2 text-sm font-medium text-slate-700">
<p className="text-sm font-bold text-slate-800">
    こんなお悩みありませんか？
  </p>
  <p>・英語をやり直したいけど、何から始めればいいか分からない</p>
  <p>・仕事で英語が必要だけど、勉強が続かない</p>
  <p>・自分に合った勉強方法を一度整理したい</p>
</div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-600 px-8 py-4 text-center text-lg font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200">
                LINEで無料相談する
              </a>
              <a href="#flow" className="rounded-full bg-white px-8 py-4 text-center text-lg font-bold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:bg-orange-50 hover:ring-orange-200 focus:outline-none focus:ring-4 focus:ring-orange-100">
                体験までの流れを見る
              </a>
            </div>
            <div className="mt-6 space-y-2 text-sm font-medium text-slate-500">
              <p className="flex items-center gap-2"><span className="text-green-500">✓</span> 体験レッスン 3,500円 / 40分・無理な勧誘なし</p>
              <p className="flex items-center gap-2"><span className="text-green-500">✓</span> 神戸大学卒・米国勤務経験・TOEIC 990点満点</p>
              <p className="flex items-center gap-2"><span className="text-green-500">✓</span> 目的整理から学習方針までサポート</p>
              <p className="flex items-center gap-2"><span className="text-orange-500">✓</span> 1対1で丁寧に対応するため、少人数限定です</p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-950 p-10 text-white shadow-2xl lg:rotate-3">
              <div className="flex min-h-[360px] items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 text-center">
                <div>
                  <p className="text-6xl font-black tracking-tight">BUDDY</p>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-200">English Studio</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-4 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-100 sm:left-[-24px]">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Instructor Score</p>
              <p className="text-2xl font-black text-slate-900">TOEIC 990</p>
            </div>
          </div>
        </div>
      </section>

      <section id="recommended" className="bg-white py-16 lg:py-20" aria-labelledby="recommended-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Recommended For</p>
            <h2 id="recommended-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              こんな方におすすめです。
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Buddy English Studioは、ただ英語を話す練習をする場所ではありません。目的を整理し、必要な力に絞って伸ばしたい方のための、沖縄での対面・オンライン対応のコーチング型英語レッスンです。
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {seoKeywords.map((keyword) => (
                <span key={keyword} className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700 ring-1 ring-orange-100">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-slate-50 p-6 ring-1 ring-slate-200">
            <div className="grid gap-4">
              {recommendedFor.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">✓</span>
                  <p className="text-sm font-bold leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="mt-6 block rounded-full bg-blue-600 px-6 py-4 text-center text-base font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200">
              LINEで無料相談する
            </a>
          </div>
        </div>
      </section>

      <section id="why" className="bg-slate-50 py-20 lg:py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Why Buddy English Studio</p>
            <h2 id="why-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              TOEIC990点満点の知識と、<br />実務経験をかけ合わせた英語サポート。
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {trustStack.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  {item.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Features</p>
            <h2 className="text-3xl font-black text-slate-900">Buddy English Studioの特徴</h2>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-lg">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-5 font-bold">比較ポイント</th>
                  <th className="bg-blue-600 p-5 font-bold">Buddy English Studio</th>
                  <th className="p-5 font-bold">一般的なスクールで多い形</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50">
                    <td className="p-5 font-bold text-slate-700">{row.feature}</td>
                    <td className="bg-blue-50/40 p-5 font-bold text-blue-700">{row.buddy}</td>
                    <td className="p-5 text-slate-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="method" className="bg-white py-20 lg:py-24" aria-labelledby="method-heading">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Buddy Method</p>
            <h2 id="method-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              目的から逆算して、使える英語へ。
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              資格対策も英会話も、最初に大切なのは「何を、どの順番で伸ばすか」。Buddy English Studioでは、学習を感覚ではなく整理されたステップで進めます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {buddyMethod.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl ring-1 ring-orange-100">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-lg font-black text-slate-900">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="bg-blue-50/50 py-20 lg:py-24" aria-labelledby="lesson-flow-heading">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Lesson Flow</p>
            <h2 id="lesson-flow-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              体験レッスンまでの流れ
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              初めての方でも迷わないように、相談から体験、継続判断までシンプルに進めます。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {lessonFlow.map((item) => (
              <div key={item.step} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-blue-100 transition hover:-translate-y-1 hover:shadow-xl">
                <p className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-sm font-black text-white shadow-lg">
                  {item.step}
                </p>
                <h3 className="mb-3 text-lg font-black text-slate-900">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
              LINEで無料相談する
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-900 py-20 text-white lg:py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Services</p>
              <h2 id="services-heading" className="text-3xl font-black tracking-tight sm:text-4xl">
                目的に合わせて、必要な英語に絞って学ぶ。
              </h2>
            </div>
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-200 underline-offset-4 transition hover:text-white hover:underline focus:outline-none focus:ring-4 focus:ring-blue-300/30">
              LINEで無料相談する
            </a>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="relative rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10">
                <span className="mb-6 inline-block rounded-full bg-blue-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-300">
                  {service.tag}
                </span>
                <h3 className="mb-5 text-2xl font-bold">{service.title}</h3>
                <p className="mb-8 leading-7 text-slate-300">{service.text}</p>
                <p className="text-sm font-bold text-white"><span className="text-blue-300">✓</span> 1対1の個別指導</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Other Topics</p>
            <div className="flex flex-wrap gap-3">
              {serviceExamples.map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
<section className="bg-white py-20">
  <div className="mx-auto max-w-5xl px-5 text-center">
    <h2 className="text-3xl font-black text-slate-900 mb-10">
      このレッスンで得られること
    </h2>

    <div className="grid gap-6 md:grid-cols-3 text-left">
      <div className="rounded-2xl bg-slate-50 p-6">
        <p className="font-bold text-slate-800">何から始めるか迷わなくなる</p>
        <p className="mt-2 text-sm text-slate-600">
          何から始めればいいか分からない状態から、自分に合った進め方が見えてきます。
        </p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-6">
        <p className="font-bold text-slate-800">無理なく続けられるようになる</p>
        <p className="mt-2 text-sm text-slate-600">
          無理なく続けられる方法を一緒に整理し、習慣化につなげます。
        </p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-6">
        <p className="font-bold text-slate-800">「使える英語」が身につく</p>
        <p className="mt-2 text-sm text-slate-600">
          実務経験ベースで、実際に使える英語にフォーカスします。
        </p>
      </div>
    </div>
  </div>
</section>
      <section id="price" className="bg-white py-20 lg:py-24" aria-labelledby="price-heading">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Pricing</p>
            <h2 id="price-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              まずは体験レッスンから。
            </h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`rounded-[2rem] p-8 ${plan.highlight ? "bg-slate-900 text-white shadow-2xl" : "bg-slate-50 text-slate-900 ring-1 ring-slate-200"}`}>
                <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                <div className="mb-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price === "ポイント制" ? plan.price : `¥${plan.price}`}</span>
                  {plan.price !== "ポイント制" && <span className={`text-sm font-bold ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>（税込）</span>}
                </div>
                <p className={`mb-8 text-sm leading-7 ${plan.highlight ? "text-slate-300" : "text-slate-500"}`}>{plan.description}</p>
                <ul className="mb-10 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-bold">
                      <span className={plan.highlight ? "text-blue-300" : "text-blue-600"}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <a href={lineUrl} target="_blank" rel="noopener noreferrer" className={`block w-full rounded-full py-4 text-center font-bold ${plan.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-slate-900 text-white hover:bg-slate-800"}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm font-medium text-slate-500">
            ※継続プランは目標・受講頻度・ご予算に応じて個別にご案内します。まずはご希望をお聞かせください。
          </p>
        </div>
      </section>

      <section id="profile" className="bg-slate-50 py-20 lg:py-24" aria-labelledby="profile-heading">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-900 shadow-xl ring-1 ring-slate-200">
              <InstructorVisual />
            </div>
            <div className="absolute -bottom-6 right-4 rounded-2xl bg-blue-600 p-5 text-white shadow-xl">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Experience</p>
              <p className="text-2xl font-black">15+ Years</p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Founder Profile</p>
            <h2 id="profile-heading" className="mb-8 text-3xl font-black text-slate-900 sm:text-4xl">
              英語を「教える」だけでなく、<br />「仕事で使う」経験を。
            </h2>
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                海外留学・神戸大学卒業後、米国での勤務を経て、外資系IT・コンサルティング企業で15年以上のキャリアを積んできました。営業からマネジメントまで、現場で培った経験がベースです。
              </p>
              <p>
                TOEIC 990点満点は、あくまで英語の基礎体力の証明。本当に大切なのは、その英語を仕事や人生にどう活かすかです。
              </p>
              <p>
                沖縄の海や文化が好きで、これまで世界各地でもスキューバダイビングを経験してきました。英語は、仕事の可能性だけでなく、旅先での出会いを広げ世界との距離を近づけてくれるものだと感じています。
              </p>
              <div className="grid gap-3 rounded-[2rem] bg-white p-5 ring-1 ring-slate-200 sm:grid-cols-2">
                {profileHighlights.map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <span className="text-blue-600">✓</span> {item}
                  </p>
                ))}
              </div>
              <p className="border-l-4 border-blue-600 py-2 pl-6 font-bold italic text-slate-900">
                「一人で悩まずに相談できる、身近な伴走者でありたい。」
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {["神戸大学卒", "米国勤務経験", "TOEIC 990", "沖縄・オンライン対応"].map((tag) => (
                <span key={tag} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 ring-1 ring-slate-200">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">FAQ</p>
            <h2 id="faq-heading" className="text-3xl font-black text-slate-900">よくあるご質問</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200 open:ring-blue-500">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span>Q. {item.q}</span>
                  <span className="text-blue-600 transition-transform duration-200 group-open:rotate-180">↓</span>
                </summary>
                <p className="mt-4 border-t border-slate-200 pt-4 leading-7 text-slate-600">
                  A. {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">LINE Contact</p>
            <h2 className="text-3xl font-black text-slate-900">PCの方はQRコードからもご相談できます</h2>
            <p className="mt-4 leading-8 text-slate-600">
              スマホの方はLINEボタンをタップ、PCの方はQRコードを読み取ってご連絡ください。「体験希望です」とだけでも大丈夫です。
            </p>
          </div>
          <div className="mx-auto rounded-3xl bg-slate-50 p-5 shadow-lg ring-1 ring-slate-200">
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" aria-label="Buddy English Studio LINEを開く">
              <img
                src={lineQrCode}
                alt="LINEでBuddy English Studioに問い合わせるためのQRコード"
                className="h-44 w-44 object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <h2 className="mb-8 text-3xl font-black sm:text-4xl">
            英語学習、一人で悩む時間は、<br />もう終わりにしませんか？
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-200">
            まずは40分の体験レッスンで、「何から始めるべきか」を一緒に明確にします。
          </p>
          <p className="mx-auto mb-12 max-w-2xl rounded-2xl bg-white/10 px-5 py-4 text-sm font-bold text-slate-200">
            「体験希望です」と送るだけでも大丈夫です。1対1で丁寧に対応するため、現在、体験枠は限られています。目的や自身のレベルがわからなくても、お気軽にご相談ください。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-600 px-9 py-5 text-lg font-black transition hover:-translate-y-1 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300/40">
              LINEで無料相談する
            </a>
            <a href={`mailto:${emailAddress}`} className="rounded-full bg-white/10 px-9 py-5 text-base font-bold ring-1 ring-white/20 transition hover:-translate-y-1 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20">
              メールで問い合わせる
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-black tracking-tight text-slate-900">BUDDY ENGLISH STUDIO</p>
            <p className="mt-2 text-sm text-slate-500">© 2026 Buddy English Studio. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm font-bold text-slate-500">
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LINE</a>
            <a href={`mailto:${emailAddress}`} className="hover:text-blue-600">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
