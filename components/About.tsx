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
    text: "М’яка формула для моментів, коли потрібно швидко думати та ухвалювати точні рішення.",
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
        <rect x="3" y="5" width="18" height="15" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Про продукт</span>
          <h2 className="mt-3 section-title text-balance">
            Приємно боротися зі своїм мозком?
          </h2>
          <p className="mt-4 text-pretty text-base text-ink-700 sm:text-lg">
            Сучасне життя вимагає більше концентрації, ніж будь-коли. NeuroPeak
            створений для щоденників — тих, хто хоче залишатися зібраним
            довше без різких стимулянтів.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="card card-hover">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                {c.icon}
              </div>
              <h3 className="text-lg font-semibold text-ink-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {c.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
