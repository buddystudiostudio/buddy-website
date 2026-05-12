import React from "react";
import { faqs } from "./faqs";

export default function FAQPage() {
  const lineUrl = "https://lin.ee/t4d7Mdw";
  const buddyLogo = "/buddy-logo.png";

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
            FAQ
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
            よくあるご質問
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Buddy English Studioの初回体験、沖縄での対面レッスン、オンライン対応、
            TOEIC対策、ビジネス英語、料金・ポイント利用などについてまとめています。
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 open:ring-blue-500"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  <span>Q. {item.q}</span>
                  <span className="text-blue-600 transition-transform duration-200 group-open:rotate-180">
                    ↓
                  </span>
                </summary>

                <p className="mt-4 border-t border-slate-200 pt-4 leading-7 text-slate-600">
                  A. {item.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-slate-900 px-6 py-10 text-center text-white">
            <h2 className="text-2xl font-black">
              その他のご質問もお気軽にご相談ください
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-200">
              「初回体験希望」または「相談したい」とLINEで送るだけで大丈夫です。
              目的や現在のレベルがはっきりしていなくても、一緒に整理します。
            </p>

            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-blue-600 px-8 py-4 font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
            >
              LINEで質問する
            </a>
          </div>
        </div>
      </section>
    </main>

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
        href="https://www.instagram.com/buddyenglishstudio/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-blue-600"
      >
        Instagram
      </a>

      <a
        href="https://lin.ee/t4d7Mdw"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-blue-600"
      >
        LINE相談
      </a>
    </div>
  </div>
</footer>
    
  );
}
