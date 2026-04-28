import FadeIn from "@/components/FadeIn";

const items = [
  {
    title: "Глибокий фокус",
    text: "Допомагає утримувати увагу на завданнях — без дрейфу між вкладками та нотатками.",
    ingredient: "L-Theanine",
    topColor: "from-brand-500/30 via-brand-500/10 to-transparent",
    glowColor: "rgba(60,163,102,0.18)",
    iconBg: "bg-brand-500/20 ring-brand-500/30 text-brand-400",
    tagCls: "border-brand-500/30 bg-brand-500/10 text-brand-400",
    moleculeColor: "text-brand-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Стабільна енергія",
    text: "Нікого крешів і різких скачків. Плавна енергія, якої вистачає на весь робочий день.",
    ingredient: "Bacopa Monnieri",
    topColor: "from-amber-500/30 via-amber-500/10 to-transparent",
    glowColor: "rgba(245,158,11,0.15)",
    iconBg: "bg-amber-500/20 ring-amber-500/30 text-amber-400",
    tagCls: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    moleculeColor: "text-amber-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Ясність мислення",
    text: "Підтримує те відчуття, коли думки стають чіткими, а ви — впевненими у рішеннях.",
    ingredient: "Rhodiola Rosea",
    topColor: "from-sky-500/30 via-sky-500/10 to-transparent",
    glowColor: "rgba(56,189,248,0.15)",
    iconBg: "bg-sky-500/20 ring-sky-500/30 text-sky-400",
    tagCls: "border-sky-500/30 bg-sky-500/10 text-sky-400",
    moleculeColor: "text-sky-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M8 22h8M12 2a6 6 0 0 0-6 6c0 2.5 1.3 4.6 3.2 5.7V17h5.6v-3.3A6 6 0 0 0 12 2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Щоденний формат",
    text: "Одна капсула зранку з їжею — і ви вже у робочому режимі. Без складних схем.",
    ingredient: "1 capsule / day",
    topColor: "from-violet-500/30 via-violet-500/10 to-transparent",
    glowColor: "rgba(167,139,250,0.15)",
    iconBg: "bg-violet-500/20 ring-violet-500/30 text-violet-400",
    tagCls: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    moleculeColor: "text-violet-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="3" y="8" width="18" height="8" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v8" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

function MoleculeDecor({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={`absolute right-3 top-3 h-14 w-14 opacity-[0.18] ${className ?? ""}`}
      aria-hidden
    >
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8"  cy="12" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="40" cy="12" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8"  cy="36" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="40" cy="36" r="4" stroke="currentColor" strokeWidth="1.2" />
      <line x1="18" y1="19" x2="12" y2="15" stroke="currentColor" strokeWidth="1.2" />
      <line x1="30" y1="19" x2="36" y2="15" stroke="currentColor" strokeWidth="1.2" />
      <line x1="18" y1="29" x2="12" y2="33" stroke="currentColor" strokeWidth="1.2" />
      <line x1="30" y1="29" x2="36" y2="33" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="section bg-section-green">
      <div className="container-page">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="section-eyebrow !text-brand-400">Переваги</span>
              <h2 className="mt-3 section-title text-balance !text-white">
                Кілька причин, чому NeuroPeak працює на вас
              </h2>
            </div>
            <p className="max-w-sm text-sm text-white/50">
              Ми оптимізували кожну інгредієнт, щоб ви могли працювати на межі
              своєї форми — без побічних ефектів різких стимулянтів.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 90}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/25 bg-white/15 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20 h-full backdrop-blur-sm">

                {/* Colored top gradient band */}
                <div
                  className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${it.topColor}`}
                  aria-hidden
                />

                {/* Glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${it.glowColor} 0%, transparent 65%)`,
                  }}
                  aria-hidden
                />

                {/* Molecule decoration — colored per card */}
                <MoleculeDecor className={it.moleculeColor} />

                <div className="relative">
                  {/* Icon — unique color per card */}
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${it.iconBg}`}>
                    {it.icon}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {it.text}
                  </p>

                  {/* Ingredient tag — colored per card */}
                  <div className="mt-5 flex items-center gap-1.5">
                    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${it.tagCls}`}>
                      <span className="h-1 w-1 rounded-full bg-current opacity-70" />
                      {it.ingredient}
                    </span>
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div
                  aria-hidden
                  className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-current to-transparent transition-transform duration-500 group-hover:scale-x-100 opacity-40"
                />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
