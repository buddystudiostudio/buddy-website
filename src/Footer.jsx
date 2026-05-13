export default function Footer() {
  const lineUrl = "https://lin.ee/t4d7Mdw";
  const instagramUrl = "https://www.instagram.com/buddyenglishstudio/";
  const emailAddress = "buddyenglishstudio@gmail.com";
  const buddyLogo = "/buddy-logo.png";

  return (
    <footer className="border-t border-slate-200 bg-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-9 md:py-14">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-[2.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 md:gap-4">
              <img
                src={buddyLogo}
                alt="Buddy English Studio logo"
                className="h-10 w-auto object-contain md:h-12"
              />

              <div>
                <p className="text-base font-black text-slate-900 md:text-lg">
                  Buddy English Studio
                </p>

                <p className="text-xs font-bold text-slate-500 md:text-sm">
                  沖縄・オンライン対応｜英語コーチング・英語レッスン
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 md:mt-6">
              TOEIC対策、ビジネス英語、英会話、英語の学び直しまで。
              TOEIC 990点満点・米国勤務経験をもとに、
              沖縄・オンラインで1対1の英語コーチングを提供しています。
            </p>

            <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
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
            <h3 className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-slate-900 md:mb-4">
  Learn English
</h3>

            <div className="space-y-2 text-sm text-slate-600 md:space-y-3">
              <a href="/blog" className="block hover:text-blue-600">
                TOEIC対策
              </a>

              <a href="/blog" className="block hover:text-blue-600">
                ビジネス英語
              </a>

              <a href="/blog" className="block hover:text-blue-600">
                英会話
              </a>

              <a href="/english-relearning" className="block hover:text-blue-600">
                英語学び直し
              </a>
            </div>
          </div>

          {/* Popular Pages */}
          <div>
            <h3 className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-slate-900 md:mb-4">
              Popular Pages
            </h3>

            <div className="space-y-2 text-sm text-slate-600 md:space-y-3">
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
                代表プロフィール
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-slate-900 md:mb-4">
              Contact
            </h3>

            <div className="space-y-2 text-sm text-slate-600 md:space-y-3">
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
        <div className="mt-8 border-t border-slate-200 pt-5 md:mt-14 md:pt-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
            <p className="text-xs text-slate-500 md:text-sm">
              © 2026 Buddy English Studio. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-slate-500 md:gap-5 md:text-sm">
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
