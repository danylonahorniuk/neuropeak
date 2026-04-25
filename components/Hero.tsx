import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-gradient">
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-[320px] w-[320px] rounded-full bg-mint-100/80 blur-3xl" />

      <div className="container-page relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-fadeUp">
          <span className="section-eyebrow">Біо-оптимізоване фокусування</span>

          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Розум працює краще,{" "}
            <span className="relative inline-block">
              коли він{" "}
              <span className="relative whitespace-nowrap text-brand-600">
                готовий
                <svg
                  aria-hidden
                  viewBox="0 0 220 12"
                  className="absolute -bottom-2 left-0 h-2 w-full text-brand-300"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9 C 60 2, 160 2, 218 9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-700 sm:text-lg">
            NeuroPeak — добавка для підтримки концентрації, ясності мислення та
            продуктивності у моменти, коли потрібно бути зібраним.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#lead" className="btn-primary">
              Подати заявку
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                aria-hidden
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#about" className="btn-ghost">
              Дізнатись більше
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["#d1fae5", "#fde68a", "#bae6fd", "#fecaca"].map((bg, i) => (
                <span
                  key={i}
                  aria-hidden
                  style={{ background: bg }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-ink-700 shadow-soft"
                >
                  {"НМКО"[i]}
                </span>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                <span>4.9/5</span>
                <Stars />
              </div>
              <span className="text-xs text-ink-500">
                Вже 1 200+ користувачів залишили заявку
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:pl-8">
          <div className="relative w-full max-w-[460px] animate-float">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-mint-50 opacity-80" />
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 55%, #f7fbf6 90%)",
              }}
            />
            <Image
              src="/Neuro-Peak.png"
              alt="NeuroPeak product"
              width={460}
              height={460}
              className="relative w-full rounded-3xl mix-blend-multiply"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <span className="inline-flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
          <path d="M10 1.8l2.5 5.1 5.6.8-4.1 4 .97 5.6L10 14.8l-5 2.6.96-5.6L1.9 7.7l5.6-.8L10 1.8z" />
        </svg>
      ))}
    </span>
  );
}
