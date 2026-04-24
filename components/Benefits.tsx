const items = [
  {
    title: "Глибокий фокус",
    text: "Допомагає утримувати увагу на завданнях — без дрейфу між вкладками та нотатками.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "from-brand-100 to-brand-50",
  },
  {
    title: "Стабільна енергія",
    text: "Нікого крешів і різких скачків. Плавна енергія, якої вистачає на весь робочий день.",
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
    accent: "from-mint-100 to-mint-50",
  },
  {
    title: "Ясність мислення",
    text: "Підтримує те відчуття, коли думки стають чіткими, а ви — впевненими у рішеннях.",
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
    accent: "from-sky-100 to-sky-50",
  },
  {
    title: "Щоденний формат",
    text: "Одна капсула зранку з їжею — і ви вже у робочому режимі. Без складних схем.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect x="3" y="8" width="18" height="8" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v8" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    accent: "from-amber-100 to-amber-50",
  },
];

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
              className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-cardHover"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${it.accent} opacity-60`}
                aria-hidden
              />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-700 shadow-soft ring-1 ring-ink-100">
                  {it.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {it.text}
                </p>
              </div>
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
