export default function Footer() {
  const lineUrl = "https://lin.ee/t4d7Mdw";
  const instagramUrl = "https://www.instagram.com/buddyenglishstudio/";
  const emailAddress = "buddyenglishstudio@gmail.com";
  const buddyLogo = "/buddy-logo.png";

  return (
    <footer className="border-t border-slate-200 bg-white">
      
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={buddyLogo}
                alt="Buddy English Studio logo"
                className="h-12 w-auto object-contain"
              />

              <div>
                <p className="text-lg font-black text-slate-900">
                  Buddy English Studio
                </p>

                <p className="text-sm font-bold text-slate-500">
                  沖縄・オンライン対応｜英語コーチング・英語レッスン
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600">
              TOEIC対策、ビジネス英語、英会話、英語の学び直しまで。
              TOEIC 990点満点・米国勤務経験をもとに、
              沖縄・オンラインで1対1の英語コーチングを提供しています。
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "沖縄 英語コーチング",
                "オンライン英語レッスン",
                "TOEIC対策",
                "ビジネス英語",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Learn English */}
          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.12em] text-slate-900">
              Learn English
            </h3>

            <div className="space-y-3 text-sm text-slate-600">
              <a href="/blog" className="block hover:text-blue-600">
                TOEIC対策
              </a>

              <a href="/blog" className="block hover:text-blue-600">
                ビジネス英語
              </a>

              <a href="/blog" className="block hover:text-blue-600">
                英会話
              </a>

              <a href="/english-relearning">
  英語学び直し
</a>
            </div>
          </div>

          {/* Popular Pages */}
          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.12em] text-slate-900">
              Popular Pages
            </h3>

            <div className="space-y-3 text-sm text-slate-600">
              <a href="/plans" className="block hover:text-blue-600">
                料金プラン
              </a>

              <a href="/faq" className="block hover:text-blue-600">
                よくある質問
              </a>

              <a href="/blog" className="block hover:text-blue-600">
                英語学習ブログ
              </a>

              <a href="#profile" className="block hover:text-blue-600">
                講師プロフィール
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.12em] text-slate-900">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-slate-600">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-600"
              >
                LINE相談
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-600"
              >
                Instagram
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="block hover:text-blue-600"
              >
                メール問い合わせ
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <p className="text-sm text-slate-500">
              © 2026 Buddy English Studio. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5 text-sm text-slate-500">
              <a href="/faq" className="hover:text-blue-600">
                FAQ
              </a>

              <a href="/plans" className="hover:text-blue-600">
                Plans
              </a>

              <a href="/blog" className="hover:text-blue-600">
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
