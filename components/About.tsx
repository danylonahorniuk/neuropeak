import FadeIn from "@/components/FadeIn";

const cards = [
  {
    title: "Фокус без зайвого шуму",
    text: "Створений для тих, хто хоче утримувати увагу на головному — у навчанні, роботі чи спорті.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Підтримка ясності мислення",
    text: "М'яка формула для моментів, коли потрібно швидко думати та ухвалювати точні рішення.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M12 3a6 6 0 0 0-3.5 10.9V17a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3.1A6 6 0 0 0 12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M10 22h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Для продуктивного дня",
    text: "Зручний щоденний формат. Не потрібно змінювати рутину — одна капсула зранку.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="3" y="8" width="18" height="8" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v8" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const miniCapsules = [
  { style: { top: "6%",    left: "12%",  transform: "rotate(38deg)",  animationDelay: "0s"   }, opacity: 0.65, w: "w-9",  h: "h-3"   },
  { style: { top: "22%",   right: "8%",  transform: "rotate(-25deg)", animationDelay: "0.9s" }, opacity: 0.5,  w: "w-7",  h: "h-2.5" },
  { style: { top: "62%",   left: "5%",   transform: "rotate(14deg)",  animationDelay: "1.6s" }, opacity: 0.45, w: "w-6",  h: "h-2"   },
  { style: { bottom: "14%",right: "14%", transform: "rotate(-48deg)", animationDelay: "0.5s" }, opacity: 0.55, w: "w-8",  h: "h-3"   },
  { style: { bottom: "6%", left: "26%",  transform: "rotate(62deg)",  animationDelay: "1.2s" }, opacity: 0.4,  w: "w-5",  h: "h-2"   },
];

function CapsuleScene() {
  return (
    <div className="relative flex min-h-[360px] items-center justify-center">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-brand-300/20 blur-3xl" />

      {/* Main capsule — split open */}
      <div className="relative z-10 flex items-center">
        {/* Left half */}
        <div className="relative h-[92px] w-[92px] rounded-l-full bg-gradient-to-b from-ink-700 to-ink-950 shadow-[0_28px_72px_rgba(15,23,42,0.55)]">
          <div className="absolute inset-0 rounded-l-full bg-gradient-to-t from-transparent to-white/[0.13]" />
          <div className="absolute right-0 top-[15%] h-[70%] w-px bg-white/10" />
        </div>

        {/* Gap — inner contents (powder dots) */}
        <div className="relative z-20 mx-2 flex h-[92px] w-5 flex-col items-center justify-center gap-1.5">
          {[0.25, 0.4, 0.6, 0.45, 0.3].map((op, i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-brand-400 blur-[1.5px]"
              style={{ opacity: op }}
            />
          ))}
        </div>

        {/* Right half */}
        <div className="relative h-[92px] w-[92px] rounded-r-full bg-gradient-to-b from-ink-600 to-ink-900 shadow-[0_28px_72px_rgba(15,23,42,0.55)]">
          <div className="absolute inset-0 rounded-r-full bg-gradient-to-t from-transparent to-white/[0.10]" />
        </div>
      </div>

      {/* Mini floating capsules */}
      {miniCapsules.map((c, i) => (
        <div
          key={i}
          className={`absolute animate-float rounded-full bg-gradient-to-r from-brand-500/70 to-brand-300/50 ${c.h} ${c.w}`}
          style={{ ...c.style, opacity: c.opacity }}
        />
      ))}

      {/* Scattered particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-brand-400/45 blur-[1px]"
          style={{
            width:  `${3 + (i % 3) * 2}px`,
            height: `${3 + (i % 3) * 2}px`,
            top:  `${12 + (i * 8) % 76}%`,
            left: `${6  + (i * 13) % 88}%`,
          }}
        />
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section overflow-hidden">
      <div className="container-page">
        {/* 2-col: text + capsule visual */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <span className="section-eyebrow">Про продукт</span>
            <h2 className="mt-3 section-title text-balance">
              Приємно боротися зі своїм мозком?
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-base text-ink-700 sm:text-lg">
              Сучасне життя вимагає більше концентрації, ніж будь-коли. NeuroPeak
              створений для щоденників — тих, хто хоче залишатися зібраним
              довше без різких стимулянтів.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <CapsuleScene />
          </FadeIn>
        </div>

        {/* 3 cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 100}>
              <article className="card card-hover h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  {c.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
