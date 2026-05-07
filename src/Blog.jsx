import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogPosts";

export default function Blog() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-20 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="mb-8 inline-block font-bold text-blue-600">
          ← ホームへ戻る
        </Link>

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Blog
        </p>

        <h1 className="mb-6 text-4xl font-black">
          英語学習・TOEIC対策・ビジネス英語ブログ
        </h1>

        <p className="mb-12 max-w-2xl leading-8 text-slate-600">
          TOEIC対策、大人の英語学び直し、ビジネス英語・英会話について、
          TOEIC990点満点・実務経験をもとに、わかりやすく解説します。
        </p>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="mb-3 text-sm font-bold text-blue-600">
                {post.cluster || post.category}
              </p>

              <h2 className="mb-3 text-2xl font-black">{post.title}</h2>

              <p className="leading-7 text-slate-600">
                {post.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-400">
                  読了時間：{post.readingTime}
                </p>

                <span className="font-bold text-blue-600">
                  続きを読む →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
