const steps = [
  {
    step: "01",
    title: "Залиште заявку",
    text: "Заповніть форму на сайті — ми зв’яжемося з вами протягом робочого дня, щоб уточнити деталі.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M4 6h16v12H6l-2 2V6Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Оформимо замовлення",
    text: "Погоджуємо адресу, спосіб оплати та відправки. Жодних прихованих умов чи підписок.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Почніть день у фокусі",
    text: "Одна капсула зранку з водою — і ви плавно входите у робочий ритм без різких стрибків.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5l1.5 1.5M17 17l1.5 1.5M5.5 18.5 7 17M17 7l1.5-1.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-dark-grid py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            Як це працює
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            Три прості кроки до щоденного фокусу
          </h2>
          <p className="mt-4 text-pretty text-sm text-white/70 sm:text-base">
            Від моменту заявки до першої капсули — ми зробили все, щоб процес
            був швидким і зрозумілим.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.step}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-400/50 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/25 to-brand-400/10 text-brand-300 ring-1 ring-brand-400/20">
                  {s.icon}
                </span>
                <span className="text-2xl font-extrabold tracking-tight text-white/30 transition-colors group-hover:text-brand-300">
                  {s.step}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {s.text}
              </p>

              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center md:flex"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-brand-300/70"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <a href="#lead" className="btn-primary">
            Подати заявку
          </a>
          <span className="text-xs text-white/50">
            Передзвонимо протягом робочого дня
          </span>
        </div>
      </div>
    </section>
  );
}
