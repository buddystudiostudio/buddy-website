import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { blogPosts } from "./blogPosts";
import { faqs } from "./faqs";

export default function BuddyEnglishStudioWebsite() {
  const [portraitLoaded, setPortraitLoaded] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    const hero = document.querySelector('[aria-labelledby="hero-heading"]');

    if (!hero) {
      setShowFloatingCta(window.scrollY > 500);
      return;
    }

    const heroBottom = hero.offsetTop + hero.offsetHeight;
    setShowFloatingCta(window.scrollY > heroBottom - 80);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  
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
    name: "スタンダードプラン",
    price: "月額 44,000円",
    sub: "月8pt利用可 + Blueprint付き",
    note: "目安：週1回ペースの1対1セッション",
    description:
      "継続して伸ばしたい社会人向け。レッスン内で進捗を確認しながら、次にやることを明確にして進めます。",
    badge: "迷ったらこちら",
    highlight: true,
    cta: "スタンダードについて相談する",
  },
  {
    name: "ビジネス実践プラン",
    price: "月額 54,000円",
    sub: "月8pt利用可",
    note: "目安：4回の実践セッション、または8回の英文レビュー、または組み合わせ",
    description:
      "会議・メール・面接・プレゼン・英文資料など、実務に合わせて使える英語をサポートします。",
    badge: "実務で使う方向け",
    highlight: false,
    cta: "このプランを相談する",
  },
];

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
const lineQrCode = "/line-qr.png";

  // Put the portrait image file in your project at: public/instructor-portrait.png
  // In production, this will load as: /instructor-portrait.png
const instructorPhoto = "/instructor-portrait.webp";
const heroImage = "/hero-image.webp";
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
        width="800"
        height="1000"
        alt="沖縄で英語コーチングとTOEIC対策等を提供するBuddy English Studio講師"
        className="block h-full w-full object-cover object-center"
        loading="lazy"
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
  <>
    <Helmet>
      <title>
        沖縄の英語コーチング・英語レッスン｜Buddy English Studio
      </title>

      <meta
        name="description"
        content="沖縄・オンライン対応の英語コーチング・英語レッスン。TOEIC990点満点・米国勤務経験を持つ講師が、英語学び直し・ビジネス英語・英会話を1対1でサポート。"
      />

      <link
        rel="canonical"
        href="https://www.buddyco.jp/"
      />

      <meta
        property="og:title"
        content="Buddy English Studio｜沖縄・オンライン対応の英語コーチング"
      />

      <meta
        property="og:description"
        content="TOEIC990点満点・米国勤務経験を持つ講師による英語コーチング・英語レッスン。"
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content="https://www.buddyco.jp/"
      />
      <meta name="twitter:card" content="summary_large_image" />

<meta
  name="twitter:title"
  content="Buddy English Studio｜沖縄・オンライン対応の英語コーチング"
/>

<meta
  name="twitter:description"
  content="TOEIC990点満点・米国勤務経験を持つ講師による英語コーチング・英語レッスン。"
/>

<meta
  name="twitter:image"
  content="https://www.buddyco.jp/og-image.jpg"
/>

<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Buddy English Studio",
    alternateName: "Buddy English Studio Okinawa",
    url: "https://www.buddyco.jp/",
    logo: "https://www.buddyco.jp/buddy-logo.png",
    image: "https://www.buddyco.jp/hero-image.webp",
    description:
      "沖縄・オンライン対応の英語コーチング・英語レッスン。TOEIC対策、ビジネス英語、英会話、大人の英語学び直しを1対1でサポートします。",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "沖縄県",
      },
      {
        "@type": "Country",
        name: "日本",
      },
      {
        "@type": "VirtualLocation",
        url: "https://www.buddyco.jp/",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "沖縄県",
      addressCountry: "JP",
    },
    email: "buddyenglishstudio@gmail.com",
    sameAs: [
      "https://www.instagram.com/buddyenglishstudio/",
    ],
    founder: {
      "@type": "Person",
      name: "Tada",
      description:
        "TOEIC990点満点・米国勤務経験・外資系IT企業および外資系コンサルティング企業での実務経験を持つ英語コーチ。",
    },
    knowsAbout: [
      "TOEIC対策",
      "ビジネス英語",
      "英会話",
      "英語学び直し",
      "英文メール",
      "英語面接対策",
      "沖縄 英語コーチング",
      "オンライン英語レッスン",
    ],
    offers: {
      "@type": "OfferCatalog",
      name: "英語コーチング・英語レッスン",
      itemListElement: [
        {
          "@type": "Offer",
          name: "初回体験・診断セッション",
          price: "3500",
          priceCurrency: "JPY",
          description:
            "50分で現在の英語力、目標、弱点を整理し、30〜90日間の学習ロードマップを提案します。",
        },
        {
          "@type": "Offer",
          name: "TOEIC対策",
          description:
            "目標スコアから逆算して、弱点分析・学習計画・演習をサポートします。",
        },
        {
          "@type": "Offer",
          name: "ビジネス英語",
          description:
            "英文メール、会議、面接、プレゼンなど、実務で使う英語をサポートします。",
        },
        {
          "@type": "Offer",
          name: "大人の英語学び直し・英会話",
          description:
            "基礎文法の整理から英会話練習まで、目的に合わせてサポートします。",
        },
      ],
    },
  })}
</script>      
    </Helmet>

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
      
      <a href="/faq" onClick={() => setMenuOpen(false)}>
        よくある質問
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

      <section
  className="relative overflow-hidden bg-white pt-4 pb-8 lg:pt-6 lg:pb-12"
  aria-labelledby="hero-heading"
>
  <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
  <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl" />

  <div className="relative mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8">
    <div>
      <h1 className="font-black tracking-tight text-slate-900">
        <span className="block text-[2rem] leading-[1.05] sm:text-[3.5rem] lg:text-[4.2rem]">
          英語を、もう一度学びたい方へ。
        </span>

        <span className="mt-4 block text-[1.65rem] leading-[1.12] text-blue-600 sm:text-[2.7rem] lg:text-[3.1rem]">
          TOEICも、仕事の英語も、英会話も。
        </span>

        <span className="mt-4 block text-[1.45rem] leading-[1.18] sm:text-[2.4rem] lg:text-[2.8rem]">
          目的に合わせて、<br />
          1対1で伴走します。
        </span>
      </h1>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-full bg-blue-600 px-7 py-3.5 text-center text-base font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 sm:px-8 sm:py-4 sm:text-lg lg:min-w-[300px]"
        >
          まずは初回体験を相談してみる
        </a>
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
      </div>
    </div>

    <div className="aspect-[16/11] overflow-hidden rounded-[1.75rem] shadow-xl ring-1 ring-slate-200 sm:rounded-[2.5rem] sm:shadow-2xl">
      <img
        src={heroImage}
        loading="eager"
        decoding="async"
        width="1600"
        height="1100"
        alt="沖縄の英語コーチング・英語レッスン・TOEIC対策に対応するBuddy English Studio"
        className="h-full w-full object-cover"
      />
    </div>
  </div>
</section>


{/* Founder Message Section */}

<section className="bg-white py-14 lg:py-16">
  <div className="mx-auto max-w-4xl px-5 text-center">

<p className={sectionLabelClass}>
  MESSAGE FROM TADA
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

    <div className="mt-10 h-px w-24 bg-slate-200 mx-auto" />

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

{/* Okinawa English Coaching / Learning Support Section */}
<section className="bg-white py-14 lg:py-20">
  <div className="mx-auto max-w-6xl px-5">
    <div className="mx-auto max-w-3xl text-center">
      <p className={sectionLabelClass}>
        OKINAWA ENGLISH COACHING
      </p>

      <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
        沖縄・オンラインで、目的に合わせて英語学習をサポート
      </h2>

      <p className="mt-5 leading-8 text-slate-600">
        英語を学び直したい方、TOEICを伸ばしたい方、仕事で英語が必要になった方へ。
        Buddy English Studioでは、沖縄での対面レッスンとオンラインの両方に対応し、
        一人ひとりの目的や現在地に合わせて、英語学習を1対1でサポートしています。
      </p>

      <p className="mt-4 leading-8 text-slate-600">
        TOEIC対策・ビジネス英語・英会話・大人の英語学び直しまで、
        「今の自分に必要な英語」を一緒に整理しながら、無理なく続けられる形に整えていきます。
      </p>
    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-3">
      <div className="rounded-3xl bg-slate-50 p-6 text-left ring-1 ring-slate-200">
        <p className="mb-3 text-sm font-black text-blue-600">
          TOEICを伸ばしたい方へ
        </p>

        <h3 className="font-black text-slate-900">
          目標スコアから逆算
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          目標スコアと現在地を確認し、単語・文法・リスニング・演習の優先順位を整理します。
        </p>
      </div>

      <div className="rounded-3xl bg-slate-50 p-6 text-left ring-1 ring-slate-200">
        <p className="mb-3 text-sm font-black text-blue-600">
          英語を学び直したい方へ
        </p>

        <h3 className="font-black text-slate-900">
          基礎から無理なく整理
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          英語が苦手な方でも、基礎の確認から会話練習まで、続けやすい形に整えます。
        </p>
      </div>

      <div className="rounded-3xl bg-slate-50 p-6 text-left ring-1 ring-slate-200">
        <p className="mb-3 text-sm font-black text-blue-600">
          仕事で英語が必要な方へ
        </p>

        <h3 className="font-black text-slate-900">
          実務に合わせて練習
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          メール・会議・面接・プレゼンなど、実際に英語を使う場面に合わせて練習します。
        </p>
      </div>
    </div>

    <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-blue-50 px-6 py-5 text-center ring-1 ring-blue-100">
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

  <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
    英語スクールにはそれぞれ良さがあります。
    Buddy English Studioでは、大人数の決まったカリキュラムではなく、
    一人ひとりの目的・現在地・生活リズムに合わせた1対1のサポートを大切にしています。
  </p>
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
      
<section
  id="services"
  className="bg-slate-900 py-14 text-white lg:py-24"
  aria-labelledby="services-heading"
>
  <div className="mx-auto max-w-7xl px-5">
    <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className={darkSectionLabelClass}>SERVICES</p>

        <h2
          id="services-heading"
          className="text-3xl font-black tracking-tight sm:text-4xl"
        >
          目的別に選べる英語サポート
        </h2>
      </div>

      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-blue-200 underline-offset-4 transition hover:text-white hover:underline focus:outline-none focus:ring-4 focus:ring-blue-300/30"
      >
        LINEで相談する
      </a>
    </div>

    <div className="grid gap-8 lg:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.title}
          className="relative rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10"
        >
          <span className="mb-6 inline-block rounded-full bg-blue-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-300">
            {service.tag}
          </span>

          <h3 className="mb-5 text-2xl font-bold">
            {service.title}
          </h3>

          <p className="mb-8 leading-7 text-slate-300">
            {service.text}
          </p>

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
          <span
            key={item}
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>
      
      <section id="flow" className="bg-blue-50/50 py-14 lg:py-24" aria-labelledby="lesson-flow-heading">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
            <p className={sectionLabelClass}>LESSON FLOW</p>
            <h2 id="lesson-flow-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              相談から継続判断までの流れ
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

      
<section className="bg-white py-14 lg:py-20">
  <div className="mx-auto max-w-5xl px-5 text-center">
    <p className={sectionLabelClass}>
      OUTCOME
    </p>

    <h2 className="mb-5 text-3xl font-black text-slate-900">
      英語を通じて、少しずつ前に進むために
    </h2>

    <p className="mx-auto mb-10 max-w-2xl leading-8 text-slate-600">
      英語学習は、完璧を目指すよりも、今の自分に合った一歩を積み重ねることが大切です。
      目的や生活リズムに合わせて、無理なく続けられる形を一緒に整えていきます。
    </p>

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
    <section id="price" className="bg-white py-12 lg:py-16" aria-labelledby="price-heading">
  <div className="mx-auto max-w-7xl px-5">
    <div className="mx-auto mb-8 max-w-4xl text-center">
      <p className={sectionLabelClass}>PRICE / PLANS</p>

      <h2 id="price-heading" className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        料金・プラン
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
        まずは初回体験で現在地を整理し、継続する場合は目的に合わせて無理なく進められます。
      </p>
    </div>

    <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3 lg:items-stretch">
      {/* Step 1 */}
      <div className="flex flex-col justify-between rounded-[2rem] bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm ring-1 ring-blue-100 sm:p-7">
        <div>
          <span className="mb-4 inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-black text-white">
            まずはここから
          </span>

          <h3 className="text-xl font-black text-slate-900">
            {diagnosticPlan.name}
          </h3>

          <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-3xl font-black text-slate-900">{diagnosticPlan.price}</p>
            <p className="text-sm font-bold text-slate-600">{diagnosticPlan.sub}</p>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            現在地・目標・弱点を整理し、30〜90日間の進め方をご提案します。
          </p>

          <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-xs font-bold leading-6 text-blue-700 ring-1 ring-blue-100">
            初回体験のみのご利用も可能です。無理な勧誘はありません。
          </p>
        </div>

        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full justify-center rounded-full bg-blue-600 px-6 py-3.5 text-center text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
        >
          初回体験を相談する
        </a>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col justify-between rounded-[2rem] bg-slate-900 p-6 text-white shadow-xl sm:p-7">
        <div>
          <span className="mb-4 inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-black text-white">
            基本プラン / 迷ったらこちら
          </span>

          <h3 className="text-xl font-black">
            スタンダードプラン
          </h3>

          <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-3xl font-black">月額 44,000円</p>
            <p className="text-sm font-bold text-slate-300">月8pt利用可 + Blueprint</p>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            週1回ペースで進捗を確認しながら、無理なく継続したい方向けです。
          </p>

          <p className="mt-4 rounded-2xl bg-white/10 px-4 py-3 text-xs font-bold leading-6 text-slate-200 ring-1 ring-white/10">
            TOEIC対策・英会話・学び直しなど、幅広い目的に対応できます。
          </p>
        </div>

        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full justify-center rounded-full bg-blue-600 px-6 py-3.5 text-center text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
        >
          スタンダードについて相談する
        </a>
      </div>

      {/* Work-focused */}
      <div className="flex flex-col justify-between rounded-[2rem] bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200 sm:p-7">
        <div>
          <span className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-800">
            仕事で使う方向け
          </span>

          <h3 className="text-xl font-black text-slate-900">
            ビジネス実践プラン
          </h3>

          <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-3xl font-black text-slate-900">月額 54,000円</p>
            <p className="text-sm font-bold text-slate-600">月8pt利用可</p>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            会議・メール・面接・プレゼンなど、実務に合わせて使える英語をサポートします。
          </p>

          <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-xs font-bold leading-6 text-slate-600 ring-1 ring-slate-200">
            仕事で英語を使う場面が明確な方におすすめです。
          </p>
        </div>

        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full justify-center rounded-full bg-slate-900 px-6 py-3.5 text-center text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-slate-800"
        >
          このプランを相談する
        </a>
      </div>
    </div>

    <div className="mx-auto mt-8 max-w-5xl rounded-[1.75rem] bg-slate-50 p-6 text-center ring-1 ring-slate-200 sm:p-7">
      <p className="text-sm font-bold leading-7 text-slate-600">
        ライトに始めたい方向けのスタートプランや、期限がある方向けの短期集中プランもご用意しています。
        <br className="hidden sm:block" />
        詳しい比較は、料金・プラン詳細ページでご確認いただけます。
      </p>

      <a
        href="/plans"
        className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-slate-800"
      >
        料金・プラン詳細を見る
      </a>
        </div>
  </div>
</section>

<section id="profile" className="bg-slate-50 py-12 lg:py-16" aria-labelledby="profile-heading">
  <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
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
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
        FOUNDER PROFILE
      </p>

      <div className="mb-5 inline-flex items-center gap-3">
        <span className="h-px w-8 bg-blue-600/50" />
        <p className="text-sm font-black tracking-[0.18em] text-slate-500">
          by Tada
        </p>
      </div>

      <h2
  id="profile-heading"
  className="mb-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl"
>
  外資IT・外資コンサル・<br />
  米国勤務経験を活かした、<br />
  実践型ビジネス英語レッスン
</h2>
            <div className="space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
  <p>
  海外留学・神戸大学卒業後、米国勤務を経て、
  外資系IT企業・外資系コンサルティング企業で15年以上のキャリアを積んできました。
  営業・コンサルティング・マネジメントまで幅広く経験し、
  英語を使って仕事やチームをリードする現場にも携わってきました。
  また、メンバー育成やコーチング経験を通じて、
  「相手に合わせて伝えること」を大切にしています。
</p>

<p>
  TOEIC 990点満点は、あくまで基礎力の証明です。
  大切にしているのは、点数だけではなく、
  英語を通じて「できること」や「選択肢」を少しずつ広げていくこと。
  学び直したい方や、仕事で英語が必要になった方にも、
  安心して相談していただける場所を目指しています。
</p>

<p>
  沖縄の海や文化が好きで、世界各地でスキューバダイビングも経験してきました。
  英語は、仕事だけでなく、人との出会いや人生の可能性も広げてくれるものだと感じています。
</p>
              <div className="rounded-[2rem] bg-white p-4 ring-1 ring-slate-200">
  <div className="grid gap-2 sm:grid-cols-2">
    {profileHighlights.map((item) => (
      <p key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700">
        <span className="text-blue-600">✓</span> {item}
      </p>
    ))}
  </div>

  <div className="mt-4 border-t border-slate-200 pt-4">
    <p className="border-l-4 border-blue-600 pl-4 text-sm font-bold italic leading-7 text-slate-900 sm:text-base">
      「一人で悩まずに相談できる、身近な伴走者でありたい。」
    </p>
  </div>
</div>
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
        英語学習コラム
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
        TOEIC、英会話、ビジネス英語、英語の学び直しなど、
        大人の英語学習に役立つヒントを発信しています。
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
        コラムを見る
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
  loading="lazy"
  decoding="async"
/>
        </a>
      </div>

      <p className="mt-4 text-sm font-bold text-slate-300">
        PCの方はQRコードからLINE追加
      </p>
    </div>
  </div>
</section>

<Footer />

{/* Floating Mobile CTA */}
{showFloatingCta && (
  <div className="fixed bottom-2 left-0 right-0 z-50 px-5 md:hidden">
    <a
      href={lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-black text-white shadow-xl transition hover:bg-blue-700"
    >
      LINEで初回体験を相談
    </a>
  </div>
)}

    </main>
</>
);
}

