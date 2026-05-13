import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function EnglishRelearningPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-20">

          <p className="text-sm font-bold tracking-[0.15em] text-blue-600 uppercase">
            Adult English Relearning
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            大人の英語学び直しガイド
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
            40代・50代からでも、英語はやり直せます。
            TOEIC、英会話、仕事の英語まで、
            一人ひとりに合わせてサポートしています。
          </p>
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="mx-auto max-w-4xl px-5 py-20">

          <h2 className="text-3xl font-black">
            英語学習は何歳からでも遅くない
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-9 text-slate-700">
            <p>
              「学生以来、英語に触れていない」
              「英語に苦手意識がある」
              「今から始めても遅い気がする」
            </p>

            <p>
              そう感じている方は少なくありません。
              ですが、大人になってからの英語学習には、
              学生時代とは違う強みがあります。
            </p>

            <p>
              目的が明確であること、
              実際に使いたい場面があること、
              自分に合った学習方法を選べること。
            </p>

            <p>
              Buddy English Studioでは、
              一人ひとりの目的やペースに合わせて、
              英語学習をサポートしています。
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-20">

          <h2 className="text-3xl font-black">
            大人の英語学習でよくある悩み
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {[
              "英語学習が続かない",
              "英会話で言葉が出てこない",
              "何から始めればいいかわからない",
              "TOEICの点数が伸びない",
              "仕事で英語に苦手意識がある",
              "独学で限界を感じている",
            ].map((problem) => (
              <div
                key={problem}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-lg font-bold text-slate-800">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buddy */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-20">

          <h2 className="text-3xl font-black">
            Buddy English Studioの特徴
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {[
              {
                title: "TOEIC 990点満点",
                desc: "試験対策だけではなく、実践的な英語力も重視しています。",
              },
              {
                title: "米国勤務経験",
                desc: "実際のビジネス現場で使う英語をベースにサポートします。",
              },
              {
                title: "外資IT・マネジメント経験",
                desc: "仕事で使う英語やキャリア英語にも対応しています。",
              },
              {
                title: "1対1サポート",
                desc: "目的やレベルに合わせて柔軟に学習設計を行います。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-8"
              >
                <h3 className="text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Articles */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-20">

          <h2 className="text-3xl font-black">
            おすすめ記事
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <Link
              to="/blog/english-learning-40s-50s"
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-400 transition-colors"
            >
              <p className="text-xl font-bold">
                40代・50代から英語を始めても遅くない理由
              </p>
            </Link>

            <Link
              to="/blog/toeic-beginner-guide"
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-400 transition-colors"
            >
              <p className="text-xl font-bold">
                TOEIC初心者は何から始めるべき？
              </p>
            </Link>

            <Link
              to="/blog/english-study-continuation"
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-400 transition-colors"
            >
              <p className="text-xl font-bold">
                英語学習が続かない人へ
              </p>
            </Link>

            <Link
              to="/blog/business-english-where-to-start"
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-400 transition-colors"
            >
              <p className="text-xl font-bold">
                ビジネス英語は何から始めるべき？
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-4xl px-5 py-20">

          <h2 className="text-3xl font-black">
            よくある質問
          </h2>

          <div className="mt-12 space-y-8">

            {[
              {
                q: "英語が苦手でも大丈夫ですか？",
                a: "はい。初心者の方や、英語に苦手意識がある方も多く参加されています。",
              },
              {
                q: "40代・50代からでも遅くないですか？",
                a: "もちろん大丈夫です。目的に合わせて、無理なく継続できる学習設計を行います。",
              },
              {
                q: "オンラインのみでも受講できますか？",
                a: "はい。全国オンライン対応しています。",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-slate-200 pb-8">
                <h3 className="text-xl font-bold">
                  {faq.q}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">

          <h2 className="text-3xl font-black">
            まずはお気軽にご相談ください
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            沖縄・オンラインで、
            一人ひとりに合わせた英語学習をサポートしています。
          </p>

          <a
            href="https://lin.ee/t4d7Mdw"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white hover:bg-blue-700 transition-colors"
          >
            LINEで相談する
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
