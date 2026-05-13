import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "./blogPosts.jsx";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-white px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-black">記事が見つかりません</h1>
          <Link to="/blog" className="mt-6 inline-block text-blue-600">
            ブログ一覧へ戻る
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = post.relatedPosts
    ? blogPosts.filter((item) => post.relatedPosts.includes(item.slug))
    : [];

  const pageUrl = `https://www.buddyco.jp/blog/${post.slug}`;
  const pageTitle = `${post.title}｜Buddy English Studio`;
  const pageDescription =
    post.description ||
    "TOEIC対策・英語学び直し・ビジネス英語について、TOEIC990点満点・米国勤務経験を持つ講師がわかりやすく解説します。";
  const pageImage = post.heroImage
    ? `https://www.buddyco.jp${post.heroImage}`
    : "https://www.buddyco.jp/og-image.jpg";

  const cta = post.cta || {
    title: "英語学習でお悩みの方へ",
    body:
      "Buddy English Studioでは、TOEIC対策・英語の学び直し・ビジネス英語を1対1でサポートしています。",
    buttonText: "LINEで気軽に相談する",
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: pageDescription,
            image: pageImage,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Person",
              name: "Tada",
            },
            publisher: {
              "@type": "Organization",
              name: "Buddy English Studio",
              logo: {
                "@type": "ImageObject",
                url: "https://www.buddyco.jp/buddy-logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": pageUrl,
            },
            articleSection: post.cluster || post.category,
            keywords: [
              post.cluster,
              post.category,
              "TOEIC対策",
              "英語学び直し",
              "ビジネス英語",
              "沖縄 英語コーチング",
              "オンライン英語レッスン",
            ]
              .filter(Boolean)
              .join(", "),
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-white px-5 py-14 sm:py-20 text-slate-900">
        <article className="mx-auto max-w-2xl">
          <Link to="/blog" className="mb-8 inline-block font-bold text-blue-500">
            ← ブログ一覧へ戻る
          </Link>

          <p className="mb-3 text-sm font-bold text-blue-500">
            {post.cluster || post.category}
          </p>

          <h1 className="mb-5 text-3xl font-black leading-tight sm:text-4xl">
            {post.title}
          </h1>

          <p className="mb-4 text-sm font-bold text-slate-500">
            TOEIC990満点・米国勤務経験を持つ講師が解説
          </p>

          <p className="mb-2 leading-8 text-slate-600">
            {post.description}
          </p>

          <p className="mb-10 text-sm font-medium text-slate-400">
            更新日：{post.date} ・ 読了時間：{post.readingTime}
          </p>

          {post.heroImage && (
            <figure className="mb-12 overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-200">
              <img
                src={post.heroImage}
                alt={post.heroImageAlt || post.title}
                className="w-full"
              />

              {post.heroImageCaption && (
                <figcaption className="px-5 py-4 text-sm leading-6 text-slate-500">
                  {post.heroImageCaption}
                </figcaption>
              )}
            </figure>
          )}

          <div className="space-y-14">
            {post.content.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-4 text-[1.65rem] font-black leading-tight sm:text-2xl">
                  {section.heading}
                </h2>

                <p className="text-[15px] leading-8 text-slate-700 sm:text-base">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-blue-50 p-8 text-center ring-1 ring-blue-100">
            <h2 className="text-xl sm:text-2xl font-black">
              {cta.title}
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              {cta.body}
            </p>

            <a
              href="https://lin.ee/t4d7Mdw"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              {cta.buttonText}
            </a>
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-12 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
              <h2 className="mb-6 text-2xl font-black">
                関連記事
              </h2>

              <div className="grid gap-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="block rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <p className="mb-2 text-sm font-bold text-blue-500">
                      {relatedPost.cluster || relatedPost.category}
                    </p>

                    <h3 className="font-black leading-7 text-slate-900">
                      {relatedPost.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {relatedPost.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
