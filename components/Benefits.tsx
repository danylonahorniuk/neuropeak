const items = [
  {
    title: "Глибокий фокус",
    text: "Допомагає утримувати увагу на завданнях — без дрейфу між вкладками та нотатками.",
    ingredient: "L-Theanine",
    accent: "from-brand-100 to-brand-50",
    glowColor: "rgba(60,163,102,0.12)",
    borderHover: "hover:border-brand-300",
    tagCls: "bg-brand-50 text-brand-700 ring-brand-200",
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
    accent: "from-mint-100 to-mint-50",
    glowColor: "rgba(16,185,129,0.10)",
    borderHover: "hover:border-mint-200",
    tagCls: "bg-mint-50 text-emerald-700 ring-mint-200",
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
    accent: "from-sky-100 to-sky-50",
    glowColor: "rgba(56,189,248,0.10)",
    borderHover: "hover:border-sky-200",
    tagCls: "bg-sky-50 text-sky-700 ring-sky-200",
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
    accent: "from-amber-100 to-amber-50",
    glowColor: "rgba(245,158,11,0.10)",
    borderHover: "hover:border-amber-200",
    tagCls: "bg-amber-50 text-amber-700 ring-amber-200",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="3" y="8" width="18" height="8" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v8" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

function MoleculeDecor() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="absolute right-3 top-3 h-12 w-12 opacity-[0.07]"
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
    <section id="benefits" className="section bg-surface">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Переваги</span>
            <h2 className="mt-3 section-title text-balance">
              Кілька причин, чому NeuroPeak працює на вас
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-500">
            Ми оптимізували кожну інгредієнт, щоб ви могли працювати на межі
            своєї форми — без побічних ефектів різких стимулянтів.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 ${it.borderHover} hover:shadow-cardHover`}
              style={{
                animationDelay: `${i * 60}ms`,
              }}
            >
              {/* Top gradient band */}
              <div
                className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${it.accent} opacity-70`}
                aria-hidden
              />

              {/* Glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${it.glowColor} 0%, transparent 70%)`,
                }}
                aria-hidden
              />

              {/* Molecule decoration */}
              <MoleculeDecor />

              <div className="relative">
                {/* Icon */}
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-700 shadow-soft ring-1 ring-ink-100">
                  {it.icon}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-ink-900">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {it.text}
                </p>

                {/* Ingredient tag */}
                <div className="mt-5 flex items-center gap-1.5">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium ring-1 ring-inset ${it.tagCls}`}
                  >
                    <span className="h-1 w-1 rounded-full bg-current opacity-70" />
                    {it.ingredient}
                  </span>
                </div>
              </div>

              {/* Bottom line on hover */}
              <div
                aria-hidden
                className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-brand-300 to-transparent transition-transform duration-500 group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
