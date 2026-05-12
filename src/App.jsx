import React, { useState } from "react";
import { blogPosts } from "./blogPosts";
import { faqs } from "./faqs";

export default function BuddyEnglishStudioWebsite() {
  const [portraitLoaded, setPortraitLoaded] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionLabelClass =
    "mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-600";
  const darkSectionLabelClass =
    "mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-300";
  
  const trustStack = [
  {
    title: "TOEIC 990点満点の知見",
    description:
      "ただ問題を解くだけでなく、現在地・弱点・目標スコアから逆算して、伸ばす順番を一緒に整理します。",
    icon: "🏆",
  },
  {
    title: "海外経験に基づく実践英語",
    description:
      "米国勤務・留学経験をもとに、教科書だけでは学びにくい会話・異文化理解・自然な伝え方も扱います。",
    icon: "🌎",
  },
  {
    title: "外資IT・コンサルで使ってきた英語",
    description:
      "英文メール、会議、面接、プレゼンなど、実際のビジネス現場で必要になる英語を目的に合わせて練習します。",
    icon: "💼",
  },
];

  const comparisonData = [
  {
    feature: "講師の特徴",
    buddy: "TOEIC 990点満点・米国勤務経験をもとにサポート",
    others: "講師により経験や専門領域が異なる",
  },
  {
    feature: "レッスン内容",
    buddy: "目的・レベル・生活リズムに合わせて個別設計",
    others: "決まったカリキュラムに沿って進むことが多い",
  },
  {
    feature: "伴走スタイル",
    buddy: "レッスン外の学習方針まで一緒に整理",
    others: "レッスン時間内の学習が中心になりやすい",
  },
  {
    feature: "相談しやすさ",
    buddy: "LINE・メールで気軽に相談可能",
    others: "問い合わせ方法や対応範囲はサービスにより異なる",
  },
];

 const services = [
  {
    title: "ビジネス英語・キャリア",
    text: "英文メール、外資系面接、会議、プレゼンなど、実際の仕事で使う英語を場面別に練習します。",
    tag: "Popular",
    point: "メール・会議・面接まで実践対応",
  },
  {
    title: "TOEIC® L&R 対策",
    text: "目標スコアから逆算し、弱点分析・学習計画・実践演習まで、効率的に進めます。",
    tag: "Score Up",
    point: "目標スコアから逆算して対策",
  },
  {
    title: "大人の学び直し・英会話",
    text: "基礎文法を整理しながら、知っている英語を実際に使える英語へ変えていきます。",
    tag: "Beginner OK",
    point: "初心者・学び直しも安心",
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

  // Update the lesson flow to reflect the new diagnostic session. The diagnostic
  // session is 50 minutes and is used to create a 30–90 day roadmap and
  // recommend the best plan. Step labels and descriptions have been updated
  // accordingly.
  const lessonFlow = [
    {
      step: "01",
      title: "LINEで相談",
      text: "『初回体験希望です』だけでも大丈夫です。目的や現在のお悩みが決まっていなくても問題ありません。",
    },
    {
      step: "02",
      title: "初回体験・診断セッション",
      text: "50分で現在の英語力、目標、弱点を確認し、30〜90日間の学習ロードマップと最適なプランをご提案します。",
    },
    {
      step: "03",
      title: "最適なプランを提案",
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
  "外資系IT企業・外資系コンサルで15年以上",
  "営業・コンサルティング・マネジメント経験",
  "目的整理から学習設計まで対応",
];

  const recommendedFor = [
  "英語を学び直したいけれど、何から始めればいいかわからない",
  "TOEICの点数を上げたいが、勉強方法が自己流になっている",
  "英会話に苦手意識があり、話そうとすると言葉が止まってしまう",
  "仕事で英文メール・会議・プレゼン・面接に対応する必要がある",
  "大手スクールより、目的や悩みに合わせて1対1で相談したい",
  "沖縄で対面、またはオンラインで無理なく英語を続けたい",
];

const seoKeywords = [
  "沖縄の英語レッスン",
  "オンライン英語レッスン",
  "TOEIC対策",
  "ビジネス英語",
  "大人の英語学び直し",
  "英会話レッスン",
];

  const diagnosticPlan = {
    name: "初回体験・診断セッション",
    price: "¥3,500",
    sub: "50分",
    badge: "はじめての方へ",
    description:
      "事前アンケートをもとに、現在地・目標・弱点を50分で整理します。30〜90日間の学習ロードマップとおすすめプランをご提案します。初回体験のみのご利用も可能です。",
  };

  const monthlyPlans = [
    {
      name: "スタートプラン",
      price: "¥28,000 / 月",
      sub: "月4pt利用可",
      note: "目安：月2回の1対1セッション",
      description:
        "英語学習を再スタートしたい方向け。最初の3か月で、目標・弱点・学習リズムを整理します。",
      badge: "基礎から整える",
      highlight: false,
      cta: "このプランを相談する",
    },
    {
      name: "スタンダードプラン",
      price: "¥44,000 / 月",
      sub: "月8pt利用可 + Blueprint",
      note: "目安：週1回ペースの1対1セッション",
      description:
        "継続して伸ばしたい社会人向け。レッスン内で進捗を確認しながら、次にやることを明確にして進めます。",
      badge: "迷ったらこちら",
      highlight: true,
      cta: "スタンダードについて相談する",
    },
    {
      name: "ビジネス実践プラン",
      price: "¥54,000 / 月",
      sub: "月8pt利用可",
      note: "目安：4回の実践セッション、または8回の英文レビュー、または組み合わせ",
      description:
        "会議・メール・面接・プレゼン・英文資料など、実務に合わせて使える英語をサポートします。",
      badge: "実務で使う方向け",
      highlight: false,
      cta: "このプランを相談する",
    },
  ];

  const intensivePlan = {
    name: "短期集中プラン",
    price: "¥74,000 / 月",
    sub: "月12pt利用可",
    note: "目安：週1〜2回ペースで集中的に対策",
    description:
      "TOEIC、英語面接、プレゼン、転職準備など、明確な目標日から逆算して集中的に進めます。",
    badge: "集中して進めたい方へ",
  };

const homepageFaqs = faqs.filter((item) =>
  [
    "英語がかなり苦手でも大丈夫ですか？",
    "沖縄で対面の英語レッスンはできますか？",
    "オンライン英語レッスンにも対応していますか？",
    "TOEIC対策と英会話を両方見てもらえますか？",
    "ビジネス英語や英文メールの相談もできますか？",
    "初回体験後にすぐ申し込む必要はありますか？",
  ].includes(item.q)
);
const lineUrl = "https://lin.ee/t4d7Mdw";
const emailAddress = "buddyenglishstudio@gmail.com";
const instagramUrl = "https://www.instagram.com/buddyenglishstudio/";
const lineQrCode = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Flin.ee%2Ft4d7Mdw";

  // Put the portrait image file in your project at: public/instructor-portrait.png
  // In production, this will load as: /instructor-portrait.png
const instructorPhoto = "/instructor-portrait.png";
const heroImage = "/hero-image.png";
const buddyLogo = "/buddy-logo.png";

  const InstructorFallback = () => (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 p-8 text-white">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative z-10 w-full max-w-sm rounded-[2rem] border border-white/15 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl">
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
        alt="沖縄で英語コーチングとTOEIC対策等を提供するBuddy English Studio講師"
        className="block h-full w-full object-cover object-center"
        loading="eager"
        decoding="async"
        onError={() => setPortraitLoaded(false)}
      />
    ) : (
      <InstructorFallback />
    )
  );

  const latestBlogPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
  
  return (
    <main className="min-h-screen bg-slate-50 pb-14 text-slate-900 selection:bg-orange-200 selection:text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
<a href="/" className="flex shrink-0 items-center gap-3">
  <img
    src={buddyLogo}
    alt="Buddy English Studio logo"
    className="h-12 w-auto object-contain"
  />

  <div className="hidden 2xl:block">
    <p className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
      沖縄・オンライン対応｜英語コーチング・英語レッスン
    </p>
  </div>
</a>
<nav className="hidden flex-nowrap items-center gap-5 text-sm font-bold text-slate-600 xl:flex">
  <a href="#recommended" className="whitespace-nowrap hover:text-blue-600">こんな方へ</a>
  <a href="#why" className="whitespace-nowrap hover:text-blue-600">選ばれる理由</a>
  <a href="#services" className="whitespace-nowrap hover:text-blue-600">サービス</a>
  <a href="#flow" className="whitespace-nowrap hover:text-blue-600">流れ</a>
  <a href="#price" className="whitespace-nowrap hover:text-blue-600">料金</a>
  <a href="#profile" className="whitespace-nowrap hover:text-blue-600">代表プロフィール</a>
  <a href="/blog" className="whitespace-nowrap hover:text-blue-600">ブログ</a>
</nav>

<button
  type="button"
  onClick={() => setMenuOpen(true)}
  className="shrink-0 rounded-full p-2 text-2xl font-bold text-slate-700 transition hover:bg-slate-100 xl:hidden"
  aria-label="Open Menu"
  aria-expanded={menuOpen}
>
  ☰
</button>
          
<div className="hidden shrink-0 xl:block">
  <a
    href={lineUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex shrink-0 whitespace-nowrap rounded-full bg-slate-900 px-4 py-2.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
  >
    LINEで相談する
  </a>
</div>
        </div>
      </header>
      {menuOpen && (
  <div className="fixed inset-0 z-[100] bg-white px-6 py-8 xl:hidden">

    <div className="mb-10 flex items-center justify-between">
      <p className="text-lg font-black text-slate-900">
        Buddy English Studio
      </p>

      <button
        onClick={() => setMenuOpen(false)}
        className="text-3xl font-light text-slate-700"
        aria-label="Close Menu"
      >
        ×
      </button>
    </div>

    <nav className="flex flex-col gap-6 text-lg font-bold text-slate-800">

      <a href="#recommended" onClick={() => setMenuOpen(false)}>
        こんな方へ
      </a>

      <a href="#why" onClick={() => setMenuOpen(false)}>
        選ばれる理由
      </a>

      <a href="#services" onClick={() => setMenuOpen(false)}>
        サービス
      </a>

      <a href="#flow" onClick={() => setMenuOpen(false)}>
        体験までの流れ
      </a>

      <a href="#price" onClick={() => setMenuOpen(false)}>
        料金について
      </a>

      <a href="#profile" onClick={() => setMenuOpen(false)}>
        プロフィール
      </a>

      <a href="/blog" onClick={() => setMenuOpen(false)}>
        ブログ
      </a>

    </nav>

    <a
      href={lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-8 left-6 right-6 rounded-full bg-blue-600 py-4 text-center text-base font-black text-white shadow-xl"
    >
      LINEで相談する
    </a>

  </div>
)}

      <section className="relative overflow-hidden bg-white pt-4 pb-8 lg:pt-6 lg:pb-12" aria-labelledby="hero-heading">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8">
<div>
  <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-r from-blue-50 to-orange-50 px-3.5 py-2 text-xs font-bold leading-6 text-blue-800 ring-1 ring-blue-100 sm:rounded-full sm:px-4 sm:text-sm">
    ⚡ 英語コーチング｜TOEIC 990点満点 × 米国勤務経験
  </div>
  <h1 className="font-black tracking-tight text-slate-900">
  {/* Mobile */}
  <span className="block text-[2rem] leading-[1.12] sm:hidden">
    英語を、<br />
    もう一度学びたい方へ。
    <br />
    <span className="text-blue-600">
      TOEICも、<br />
      仕事の英語も、<br />
      英会話も。
    </span>
    <br />
    目的に合わせて、<br />
    1対1でサポートします。
  </span>

  {/* Tablet / Desktop */}
<span className="hidden leading-[1.15] sm:block sm:text-[2.6rem] lg:text-[2.75rem] xl:text-[2.85rem]">
    英語を、もう一度
    <br />
    学びたい方へ。
    <br />
    <span className="text-blue-600">
      TOEICも、
      <br />
      仕事の英語も、
      <br />
      英会話も。
    </span>
    <br />
    目的に合わせて、
    <br />
    1対1でサポートします。
  </span>
</h1>

<p className="mt-4 text-base font-semibold text-blue-600">
  TOEIC990点満点・米国勤務経験・外資IT／コンサルでの実務経験をもとに、
  英語を「資格・仕事・人生」に活かすための学習をサポートします。
</p>

<p className="mt-3 text-base leading-8 text-slate-600">
  英語に苦手意識がある方や、学び直しの方も安心してご相談ください。
</p>
<p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
  TOEIC対策・英会話・ビジネス英語まで、
  目的や現在地を整理しながら、
  沖縄・オンラインで無理なく続けられる学習設計を行います。
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row">
<a href={lineUrl} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-full bg-blue-600 px-7 py-3.5 text-center text-base font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 sm:px-8 sm:py-4 sm:text-lg lg:min-w-[300px]">
  まずは初回体験を相談してみる
</a>
             <a href="#flow" className="whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-center text-base font-bold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:bg-orange-50 hover:ring-orange-200 focus:outline-none focus:ring-4 focus:ring-orange-100 sm:px-8 sm:py-4 sm:text-lg lg:min-w-[250px]">
  体験までの流れを見る
</a>
            </div>
<div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500 sm:mt-8 sm:gap-3 sm:text-sm">
  <span className="rounded-full bg-slate-100 px-3 py-1.5 sm:px-4 sm:py-2">
    TOEIC 990点満点
  </span>

  <span className="rounded-full bg-slate-100 px-3 py-1.5 sm:px-4 sm:py-2">
    米国勤務経験
  </span>

  <span className="rounded-full bg-slate-100 px-3 py-1.5 sm:px-4 sm:py-2">
    外資IT・コンサル15年以上
  </span>

  <span className="rounded-full bg-slate-100 px-3 py-1.5 sm:px-4 sm:py-2">
    実務・マネジメント経験
  </span>

  <span className="rounded-full bg-slate-100 px-3 py-1.5 sm:px-4 sm:py-2">
    沖縄・オンライン対応
  </span>
</div>
            <div className="mt-5 space-y-2 text-xs font-medium leading-6 text-slate-500 sm:mt-6 sm:text-sm">
  <p className="flex items-start gap-2">
    <span className="mt-0.5 text-green-500">✓</span>
    初回体験・診断セッション 3,500円 / 50分・無理な勧誘なし
  </p>

  <p className="flex items-start gap-2">
    <span className="mt-0.5 text-green-500">✓</span>
    「初回体験希望」「相談したい」だけでLINE相談OK
  </p>

  <p className="flex items-start gap-2">
    <span className="mt-0.5 text-blue-500">✓</span>
    英語が苦手な方・学び直しの方からのご相談も増えています
  </p>

  <p className="flex items-start gap-2">
    <span className="mt-0.5 text-orange-500">✓</span>
    1対1で丁寧に対応するため、初回体験枠には限りがあります
  </p>
</div>
          </div>

<div className="relative">
  <div className="aspect-[16/10] overflow-hidden rounded-[1.75rem] shadow-xl ring-1 ring-slate-200 sm:rounded-[2.5rem] sm:shadow-2xl">
    <img
      src={heroImage}
      alt="沖縄の英語コーチング・英語レッスン・TOEIC対策に対応するBuddy English Studio"
      className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
    />
  </div>
</div>
        </div>
      </section>


{/* Founder Message Section */}

<section className="bg-white py-14 lg:py-16">
  <div className="mx-auto max-w-4xl px-5 text-center">

<p className={sectionLabelClass}>
  MESSAGE
</p>

<p className="mb-3 text-sm font-bold uppercase tracking-[0.1em] text-slate-500">
  Message from Tada
</p>

<h2 className="text-3xl font-black leading-[1.15] text-slate-900 sm:text-4xl">
      英語を一人で抱え込まず、<br />
      目的に合わせて一緒に整理できる場所へ。
    </h2>

    <div className="mx-auto mt-8 max-w-3xl space-y-6 text-left text-lg leading-9 text-slate-600 sm:text-center">
      <p>
        英語を頑張りたい気持ちはある。<br />
        でも、「何から始めればいいかわからない」「続かない」「自信がない」。
        そんな悩みを持つ方は少なくありません。
      </p>

      <p>
        私自身も、英語を資格・仕事・海外経験の中で使ってきたからこそ、
        英語は単なる勉強ではなく、仕事や人生の選択肢を広げてくれるものだと感じています。
      </p>

      <p>
  「英語ができる人」になることより、
  「英語を使って、自分の世界を少し広げられること」を大切にしています。
</p>
      
      <p>
        Buddy English Studioは、英語が得意な人だけの場所ではありません。
        学び直したい方、TOEICを伸ばしたい方、仕事で英語が必要になった方が、
        安心して相談できる身近な伴走者でありたいと思っています。
      </p>
    </div>

  </div>
</section>

      
{/* Problem Solution Section */}
<section className="bg-white px-5 py-14 lg:py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
<p className={sectionLabelClass}>
  YOUR ENGLISH CHALLENGES
</p>

      <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
        英語を頑張りたい。<br className="hidden sm:block" />
        でも、こんなところで止まっていませんか？
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
        英語の悩みは、「努力不足」ではなく、目的・現在地・やる順番が整理できていないだけの場合もあります。
        Buddy English Studioでは、一人ひとりの状況に合わせて、次にやることを一緒に明確にします。
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
        <p className="mb-3 text-sm font-black text-blue-600">
          Speaking
        </p>

        <p className="mb-4 text-lg font-bold text-slate-900">
          英語を勉強しているのに、話そうとすると言葉が出てこない
        </p>

        <div className="mb-4 h-px bg-slate-200" />

        <p className="leading-8 text-slate-600">
          文法や単語を「知っている」状態から、実際に口から出せる状態へ。
          間違いを気にしすぎず、使う練習を重ねていきます。
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
        <p className="mb-3 text-sm font-black text-blue-600">
          TOEIC
        </p>

        <p className="mb-4 text-lg font-bold text-slate-900">
          TOEICの点数を上げたいけれど、勉強方法が自己流になっている
        </p>

        <div className="mb-4 h-px bg-slate-200" />

        <p className="leading-8 text-slate-600">
          目標スコアと現在地から逆算し、単語・文法・リスニング・演習の優先順位を整理します。
          伸ばす順番を明確にして進めます。
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
        <p className="mb-3 text-sm font-black text-blue-600">
          Business
        </p>

        <p className="mb-4 text-lg font-bold text-slate-900">
          仕事で英語が必要だけど、自信を持って対応できない
        </p>

        <div className="mb-4 h-px bg-slate-200" />

        <p className="leading-8 text-slate-600">
          英文メール、会議、面接、プレゼンなど、実際の場面に合わせて練習します。
          正しさだけでなく、相手に伝わる英語を一緒に磨きます。
        </p>
      </div>
    </div>

    <div className="mt-10 text-center">
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
      >
        今の悩みをLINEで相談する
      </a>
    </div>
  </div>
</section>

{/* Okinawa English Coaching SEO Section */}
<section className="bg-white py-14 lg:py-20">
  <div className="mx-auto max-w-5xl px-5">
    <p className={sectionLabelClass}>
      OKINAWA ENGLISH COACHING
    </p>

    <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
      沖縄で英語コーチングを探している方へ
    </h2>

    <p className="mt-5 leading-8 text-slate-600">
      沖縄で英語コーチングや英語レッスンを選ぶ際は、
      対面・オンライン対応、目的に合った学習設計、
      TOEIC対策、ビジネス英語、英会話への対応範囲を確認することが大切です。
      Buddy English Studioでは、TOEIC 990点満点・米国勤務経験・
      外資IT／コンサルでの実務・マネジメント経験をもとに、
      沖縄県内の対面相談とオンラインの両方で、
      一人ひとりの目的に合わせた1対1の英語コーチングを行っています。
    </p>

    <div className="mt-8 grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
        <h3 className="font-black text-slate-900">
          沖縄・オンライン対応
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          沖縄県内での対面相談に加え、オンラインでも受講できます。
        </p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
        <h3 className="font-black text-slate-900">
          目的別の学習設計
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          TOEIC対策、英会話、ビジネス英語など、目的から逆算して進めます。
        </p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
        <h3 className="font-black text-slate-900">
          1対1で伴走
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          現在地・弱点・学習リズムを整理しながら、無理なく続けられる形にします。
        </p>
      </div>
    </div>
  </div>
</section>
      
{/* Social Proof / Trust Section */}
<section className="bg-slate-50 px-5 py-14 lg:py-16">
  <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
    <div className="text-center">
<p className={sectionLabelClass}>
  LEARNING SUPPORT
</p>

      <h2 className="text-3xl font-black leading-tight text-slate-900">
        一人ひとりの目的に合わせて、<br className="hidden sm:block" />
        学び方から一緒に整理します
      </h2>

      <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
Buddy English Studioでは、
TOEIC対策・英語の学び直し・ビジネス英語など、
目的や現在地に合わせて、
必要な学習内容を一緒に整理します。

受講生の声や学習事例も、
許可をいただいたうえで順次ご紹介予定です。
      </p>
    </div>

    <div className="mt-8 grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
        <p className="mb-3 text-sm font-black text-blue-600">
          Case 01
        </p>
        <p className="font-black text-slate-900">
          TOEIC対策
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          目標スコアと現在地を確認し、単語・文法・リスニング・演習の優先順位を整理します。
        </p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
        <p className="mb-3 text-sm font-black text-blue-600">
          Case 02
        </p>
        <p className="font-black text-slate-900">
          英語の学び直し
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          英語が苦手な方でも、基礎の確認から会話練習まで、無理なく続けられる形に整えます。
        </p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
        <p className="mb-3 text-sm font-black text-blue-600">
          Case 03
        </p>
        <p className="font-black text-slate-900">
          ビジネス英語
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          メール・会議・面接・プレゼンなど、実際に英語を使う場面に合わせて練習します。
        </p>
      </div>
    </div>

    <div className="mt-8 rounded-2xl bg-blue-50 px-6 py-5 text-center ring-1 ring-blue-100">
      <p className="text-sm font-bold leading-7 text-blue-800">
        まずは初回体験・診断セッションで、現在の英語力・お悩み・目標を一緒に整理します。
      </p>
    </div>
  </div>
</section>
      
      <section id="recommended" className="bg-white py-16 lg:py-20" aria-labelledby="recommended-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className={sectionLabelClass}>RECOMMENDED FOR</p>
            <h2 id="recommended-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
  こんな方に向いています
</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
  英語が得意な方だけでなく、学び直し・TOEIC対策・仕事で使う英語に不安がある方もご相談いただけます。
  目的や現在地を一緒に整理しながら、必要な力に絞って1対1で進めます。
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
              LINEで相談する
            </a>
          </div>
        </div>
      </section>

      <section id="why" className="bg-slate-50 py-14 lg:py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-16">
            <p className={sectionLabelClass}>WHY BUDDY</p>
            <h2 id="why-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
  なぜ、Buddy English Studioなのか
</h2>

<p className="mt-5 text-base leading-8 text-slate-600">
  英語学習で大切なのは、ただレッスンを受けることではなく、
  「自分に必要な英語」を見極め、正しい順番で続けることです。
  Buddy English Studioでは、TOEIC 990点満点の知見、米国勤務・留学経験、
  外資系IT・コンサルでの実務経験をもとに、
  資格・仕事・英会話の目的に合わせて、学び方から一緒に整理します。
</p>
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

      <section className="bg-white py-14 lg:py-24" aria-labelledby="features-heading">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-12 text-center">
            <p className={sectionLabelClass}>COMPARE</p>
<h2 id="features-heading" className="text-3xl font-black text-slate-900">
  Buddy English Studioと一般的な英語スクールの違い
</h2>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-lg">
  <table className="w-full min-w-[840px] border-collapse text-left">
    <thead>
      <tr className="bg-slate-900 text-white">
        <th className="w-[170px] min-w-[170px] whitespace-nowrap p-5 font-bold">
          比較ポイント
        </th>
        <th className="min-w-[320px] bg-blue-600 p-5 font-bold">
          Buddy English Studio
        </th>
        <th className="min-w-[300px] p-5 font-bold">
          一般的な英語スクールの一例
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-slate-200">
      {comparisonData.map((row) => (
        <tr key={row.feature} className="hover:bg-slate-50">
          <td className="w-[170px] min-w-[170px] whitespace-nowrap p-5 font-bold text-slate-700">
            {row.feature}
          </td>
          <td className="min-w-[320px] whitespace-nowrap bg-blue-50/40 p-5 font-bold leading-7 text-blue-700">
            {row.buddy}
          </td>
          <td className="min-w-[300px] p-5 leading-7 text-slate-500">
            {row.others}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        </div>
      </section>

      <section id="method" className="bg-white py-14 lg:py-24" aria-labelledby="method-heading">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
            <p className={sectionLabelClass}>BUDDY METHOD</p>
            <h2 id="method-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              英語コーチングで、目的から逆算して学習設計
            </h2>
<p className="mt-5 text-base leading-8 text-slate-600">
  資格対策も英会話も、最初に大切なのは「何を、どの順番で伸ばすか」。
  目的整理から学習設計まで、
  1対1の英語コーチングとして伴走します。
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

      <section id="flow" className="bg-blue-50/50 py-14 lg:py-24" aria-labelledby="lesson-flow-heading">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
            <p className={sectionLabelClass}>LESSON FLOW</p>
            <h2 id="lesson-flow-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              沖縄・オンライン英語レッスンの体験までの流れ
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
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
              LINEで相談する
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-900 py-14 text-white lg:py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className={darkSectionLabelClass}>SERVICES</p>
              <h2 id="services-heading" className="text-3xl font-black tracking-tight sm:text-4xl">
                TOEIC対策・ビジネス英語・英会話を目的別に学ぶ
              </h2>
            </div>
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-200 underline-offset-4 transition hover:text-white hover:underline focus:outline-none focus:ring-4 focus:ring-blue-300/30">
              LINEで相談する
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
<p className="text-sm font-bold text-white">
  <span className="text-blue-300">✓</span> {service.point}
</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10">
            <p className={darkSectionLabelClass}>OTHER TOPICS</p>
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
<section className="bg-white py-14 lg:py-20">
  <div className="mx-auto max-w-5xl px-5 text-center">
    <h2 className="text-3xl font-black text-slate-900 mb-10">
      英語学習を通じて、少しずつ変わっていけること
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
      <section id="price" className="bg-white pt-14 pb-32 lg:py-24" aria-labelledby="price-heading">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-10 max-w-4xl text-center lg:mb-14">
            <p className={sectionLabelClass}>PRICE / PLANS</p>
            <h2 id="price-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              料金・プラン
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              英語を、スコアにも仕事にもつなげる。目的・現在地・弱点に合わせて、30〜90日間の進め方を一緒に整理します。
            </p>
          </div>

          {/* 1. Diagnostic gateway */}
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm ring-1 ring-blue-100 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="mb-4 inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-black text-white">
                  {diagnosticPlan.badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                  {diagnosticPlan.name}
                </h3>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-3xl font-black text-slate-900 sm:text-4xl">{diagnosticPlan.price}</p>
                  <p className="text-sm font-bold text-slate-600">{diagnosticPlan.sub}</p>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {diagnosticPlan.description}
                </p>
                <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-xs font-bold leading-6 text-blue-700 ring-1 ring-blue-100 sm:text-sm">
                  48時間以内に月額プランへお申し込みの場合、初回体験料¥3,500を初月料金に充当します。
                </p>
              </div>
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-blue-600 px-7 py-4 text-center text-base font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                まずは初回体験を相談する
              </a>
            </div>
          </div>

          {/* 2. Monthly plan comparison */}
          <div className="mx-auto mt-14 max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">MONTHLY PLANS</p>
            <h3 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">継続プラン</h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-bold leading-7 text-slate-600">
              迷ったら、まずはスタンダードプランがおすすめです。レッスン内で進捗と次の一歩を確認しながら、無理なく継続できます。
            </p>
          </div>

          <div className="mx-auto mt-8 grid gap-5 lg:grid-cols-3 lg:items-stretch">
            {monthlyPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-[1.75rem] p-6 sm:rounded-[2rem] sm:p-8 ${plan.highlight ? "bg-slate-900 text-white shadow-2xl lg:-mt-4 lg:scale-[1.03]" : "bg-slate-50 text-slate-900 ring-1 ring-slate-200"}`}
              >
                <div>
                  {plan.badge && (
                    <span className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-black ${plan.highlight ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800"}`}>
                      {plan.badge}
                    </span>
                  )}
                  <h4 className="text-xl font-black tracking-tight">{plan.name}</h4>
                  <div className="mt-3">
                    <p className="text-[2rem] font-black leading-tight sm:text-3xl">{plan.price}</p>
                    <p className={`mt-1 text-sm font-bold ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>{plan.sub}</p>
                    <p className={`mt-1 text-xs italic ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>{plan.note}</p>
                  </div>
                  <p className={`mt-5 text-sm leading-7 ${plan.highlight ? "text-slate-300" : "text-slate-500"}`}>{plan.description}</p>
                </div>
                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 hidden w-full rounded-full py-4 text-center font-black sm:block ${plan.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-slate-900 text-white hover:bg-slate-800"}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* 3. Intensive sprint */}
          <div className="mx-auto mt-10 max-w-5xl rounded-[2rem] bg-slate-50 p-6 ring-1 ring-slate-200 sm:p-8">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="mb-3 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-orange-700">
                  {intensivePlan.badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900">{intensivePlan.name}</h3>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-3xl font-black text-slate-900">{intensivePlan.price}</p>
                  <p className="text-sm font-bold text-slate-600">{intensivePlan.sub}</p>
                </div>
                <p className="mt-1 text-xs italic text-slate-500">{intensivePlan.note}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{intensivePlan.description}</p>
              </div>
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full bg-slate-900 px-7 py-4 text-center font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-slate-800 sm:inline-flex"
              >
                このプランを相談する
              </a>
            </div>
          </div>

          {/* 4. Supporting explanation cards */}
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 text-sm leading-7 text-slate-600 lg:grid-cols-3">
            <div className="rounded-[1.75rem] bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="mb-2 text-base font-black text-slate-900">ポイントの使い方</h3>
              <p>
                各プランには、毎月使えるポイントが含まれています。ポイントは1対1セッションや、英文メール・面接回答・プレゼン資料などのレビューに使えます。
              </p>
              <ul className="mt-2 list-disc pl-5">
                <li>1対1セッション：2pt</li>
                <li>英文レビュー／面接回答レビュー／資料チェック：1pt〜</li>
              </ul>
              <p className="mt-2">
                「今月は会話練習を多めに」「面接前は回答レビューを多めに」など、目的に合わせて柔軟に利用できます。
              </p>
            </div>
<div className="rounded-[1.75rem] bg-blue-50 p-6 ring-1 ring-blue-100">
  <h3 className="mb-2 text-base font-black text-slate-900">学習の見える化</h3>
  <p>
    目標・進め方・復習内容を、受講者専用の学習ページ「Buddy Vault」に整理します。
    レッスン内で進捗を確認しながら、次に取り組むことを一緒に明確にします。
  </p>
  <p className="mt-3 text-xs font-bold text-blue-700">
    英文レビューなどの非同期サポートは、通常、決まったレビュー時間内に対応します。
  </p>
</div>
<div className="rounded-[1.75rem] bg-slate-50 p-6 ring-1 ring-slate-200">
  <h3 className="mb-2 text-base font-black text-slate-900">入会金について</h3>
  <p>現在、キャンペーンとして入会金は無料です。</p>
</div>
          </div>
        </div>
      </section>
      <section id="profile" className="bg-slate-50 py-14 lg:py-24" aria-labelledby="profile-heading">
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
<p className={sectionLabelClass}>
  FOUNDER PROFILE
</p>
            <h2 id="profile-heading" className="mb-8 text-3xl font-black text-slate-900 sm:text-4xl">
              外資IT・外資コンサル・米国勤務経験を活かした、<br />実践型ビジネス英語レッスン
            </h2>
            <div className="space-y-6 text-lg leading-8 text-slate-600">
  <p>
    海外留学・神戸大学卒業後、米国での勤務を経て、外資系IT企業・外資系コンサルティング企業で15年以上のキャリアを積んできました。
    営業・コンサルティング業務・マネジメントまで幅広く経験し、個人として英語を使う場面だけでなく、
    チームやお客様をリードする現場も経験してきました。
  </p>

  <p>
    TOEIC 990点満点は、あくまで英語の基礎体力の証明です。
    私が大切にしているのは、点数や正しさだけではなく、
    英語を通じて「できること」や「選べる未来」を少しずつ広げていくことです。
  </p>

  <p>
    英語が得意な人だけでなく、学び直したい方、苦手意識がある方、仕事で必要になった方にも、
    一人で抱え込まずに相談できる場所を作りたい。
    その想いから、Buddy English Studioを始めました。
  </p>

  <p>
    沖縄の海や文化が好きで、これまで世界各地でもスキューバダイビングを経験してきました。
    英語は、仕事の可能性だけでなく、旅先での出会いや人生の選択肢も広げてくれるものだと感じています。
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

      
<section className="bg-slate-50 py-14 lg:py-20">
  <div className="mx-auto max-w-6xl px-5">
    <div className="mb-12 text-center">
<p className={sectionLabelClass}>
  BLOG
</p>

      <h2 className="text-3xl font-black text-slate-900">
        英語学習のお悩み別ガイド
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
        TOEIC、英会話、ビジネス英語、英語の学び直しなど、
        よくある悩みへの考え方をわかりやすくまとめています。
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {latestBlogPosts.map((post) => (
        <a
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <p className="mb-3 text-sm font-bold text-blue-600">
            {post.cluster || post.category}
          </p>

          <h3 className="mb-3 text-xl font-black leading-7 text-slate-900 group-hover:text-blue-600">
            {post.title}
          </h3>

          <p className="leading-7 text-slate-600">
            {post.description}
          </p>

          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-slate-400">
              読了時間：{post.readingTime}
            </p>

            <span className="shrink-0 text-sm font-bold text-blue-600">
              続きを読む →
            </span>
          </div>
        </a>
      ))}
    </div>

    <div className="mt-10 text-center">
      <a
        href="/blog"
        className="inline-block rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
      >
        英語学習ガイドを見る
      </a>
    </div>
  </div>
</section>
      <section className="bg-white py-14 lg:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="mb-12 text-center">
            <p className={sectionLabelClass}>FAQ</p>
            <h2 id="faq-heading" className="text-3xl font-black text-slate-900">よくあるご質問</h2>
          </div>
          <div className="space-y-4">
            {homepageFaqs.map((item) => (
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

                              <div className="mt-10 text-center">
            <p className="text-sm leading-7 text-slate-600">
              その他のご質問も、LINEでお気軽にご相談いただけます。
              「初回体験希望」または「相談したい」と送るだけで大丈夫です。
            </p>

            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
  <a
    href={lineUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
  >
    LINEで質問する
  </a>

  <a
    href="/faq"
    className="inline-block rounded-full bg-white px-8 py-4 font-bold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:bg-slate-50"
  >
    よくある質問をすべて見る
  </a>
</div>
          </div>
          
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-16 text-white lg:py-24">
  <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

  <div className="relative z-10 mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-[1fr_auto] md:items-center">
    <div className="text-center md:text-left">
      <p className={darkSectionLabelClass}>
        CONTACT
      </p>

      <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl">
        沖縄・オンラインの英語コーチングで、<br />
        英語学習の悩みを一緒に整理しませんか？
      </h2>

      <p className="mb-6 max-w-2xl text-lg leading-8 text-slate-200">
        まずは50分の初回体験・診断セッションで、
        「何から始めるべきか」を一緒に明確にします。
      </p>

      <p className="mb-8 max-w-2xl rounded-2xl bg-white/10 px-5 py-4 text-sm font-bold leading-7 text-slate-200">
        LINEでは、1対1で必要な内容だけご案内します。
        「初回体験希望」または「相談したい」と送るだけで大丈夫です。
        目的や現在のレベルがはっきりしていなくても、一緒に整理します。
      </p>

      <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-600 px-9 py-5 text-lg font-black transition hover:-translate-y-1 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300/40"
        >
          初回体験をLINEで相談する
        </a>

        <a
          href={`mailto:${emailAddress}`}
          className="rounded-full bg-white/10 px-9 py-5 text-base font-bold ring-1 ring-white/20 transition hover:-translate-y-1 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20"
        >
          メールで問い合わせる
        </a>
      </div>
    </div>

    <div className="hidden text-center md:block">
      <div className="rounded-3xl bg-white p-5 shadow-xl">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buddy English Studio LINEを開く"
        >
          <img
            src={lineQrCode}
            alt="LINEでBuddy English Studioに問い合わせるためのQRコード"
            className="h-44 w-44 object-contain"
          />
        </a>
      </div>

      <p className="mt-4 text-sm font-bold text-slate-300">
        PCの方はQRコードからLINE追加
      </p>
    </div>
  </div>
</section>

<footer className="border-t border-slate-200 bg-white py-12">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
    <div className="flex items-center gap-3 text-center md:text-left">
      <img
        src={buddyLogo}
        alt="Buddy English Studio logo"
        className="h-12 w-auto object-contain"
      />

      <div>
        <p className="text-sm font-bold text-slate-500">
          沖縄・オンライン対応｜英語コーチング・英語レッスン
        </p>
        <p className="mt-2 text-sm text-slate-500">
          © 2026 Buddy English Studio. All rights reserved.
        </p>
      </div>
    </div>

   <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-slate-500">
  <a href="/blog" className="transition hover:text-blue-600">
    Blog
  </a>

  <a href="/faq" className="transition hover:text-blue-600">
    FAQ
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
    LINE
  </a>
</div>
    
  </div>
</footer>

{/* Floating Mobile CTA */}
<div className="fixed bottom-2 left-0 right-0 z-50 px-5 md:hidden">
  <a
    href={lineUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-black text-white shadow-xl transition hover:bg-blue-700"
  >
    まずは初回体験を相談
  </a>
</div>

    </main>
  );
}

