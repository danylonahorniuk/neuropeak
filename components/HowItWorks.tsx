/* ─── Step illustration frames ─── */

function FormVisual() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative w-32 rounded-xl border border-white/15 bg-white/[0.04] p-4 shadow-inner">
        <div className="space-y-2">
          <div className="h-1.5 w-full rounded-full bg-white/20" />
          <div className="h-1.5 w-10/12 rounded-full bg-white/13" />
          <div className="h-1.5 w-full rounded-full bg-white/20" />
          <div className="h-1.5 w-8/12 rounded-full bg-white/13" />
        </div>
        <div className="mt-4 flex h-6 w-full items-center justify-center rounded-lg bg-brand-500/40 ring-1 ring-brand-400/30">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-200">
            Надіслати →
          </span>
        </div>
        {/* "sent" badge */}
        <div className="absolute -right-2.5 -top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 shadow-[0_0_10px_rgba(60,163,102,0.5)]">
          <svg viewBox="0 0 12 12" fill="none" className="h-3.5 w-3.5">
            <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DeliveryVisual() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative">
        {/* Box body */}
        <div className="relative h-[72px] w-[90px] overflow-hidden rounded-b-xl rounded-t-sm border border-white/15 bg-white/[0.04]">
          {/* Tape strip */}
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
          {/* Label */}
          <div className="flex h-full flex-col items-center justify-center gap-0.5">
            <span className="text-[7px] font-semibold uppercase tracking-[0.22em] text-brand-400">
              NEURO
            </span>
            <span className="text-sm font-bold text-white/80">PEAK</span>
          </div>
        </div>
        {/* Box flaps */}
        <div className="absolute -top-[14px] left-0 flex w-full gap-0.5">
          <div className="h-[14px] flex-1 rounded-t-md border border-b-0 border-white/15 bg-white/[0.04]" />
          <div className="h-[14px] flex-1 rounded-t-md border border-b-0 border-white/15 bg-white/[0.04]" />
        </div>
        {/* Pin */}
        <div className="absolute -right-5 -top-5">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-brand-400 drop-shadow-[0_0_6px_rgba(60,163,102,0.6)]">
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CapsuleDosageVisual() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      {/* Capsule + count */}
      <div className="flex items-center gap-4">
        {/* Capsule pill */}
        <div className="relative h-8 w-[72px] overflow-hidden rounded-full bg-gradient-to-r from-ink-700 to-ink-500 shadow-[0_0_24px_rgba(60,163,102,0.4)] ring-1 ring-white/10">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-l-full bg-white/[0.10]" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-white/15" />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/[0.07]" />
        </div>
        {/* Count */}
        <div className="flex flex-col items-center leading-none">
          <span className="text-3xl font-extrabold text-white">×1</span>
          <span className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-brand-400">
            на день
          </span>
        </div>
      </div>

      {/* Timing pill tag */}
      <div className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1">
        <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 text-brand-400" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-[10px] text-white/55">Зранку з водою</span>
      </div>
    </div>
  );
}

/* ─── Steps data ─── */

const steps = [
  {
    step: "01",
    title: "Залиште заявку",
    text: "Заповніть форму на сайті — ми зв'яжемося протягом робочого дня, щоб уточнити деталі.",
    visual: <FormVisual />,
  },
  {
    step: "02",
    title: "Оформимо замовлення",
    text: "Погоджуємо адресу, спосіб оплати та відправки. Жодних прихованих умов чи підписок.",
    visual: <DeliveryVisual />,
  },
  {
    step: "03",
    title: "Почніть день у фокусі",
    text: "Одна капсула зранку з водою — і ви плавно входите у робочий ритм без різких стрибків.",
    visual: <CapsuleDosageVisual />,
  },
];

/* ─── Background floating capsules ─── */

const bgCapsules = [
  { cls: "h-4 w-14 opacity-[0.08]", style: { top: "8%",    left: "4%",   transform: "rotate(32deg)",  animationDelay: "0s"   } },
  { cls: "h-3 w-10 opacity-[0.07]", style: { top: "20%",   right: "3%",  transform: "rotate(-20deg)", animationDelay: "1.1s" } },
  { cls: "h-3 w-9  opacity-[0.06]", style: { bottom: "18%",left: "6%",   transform: "rotate(55deg)",  animationDelay: "0.6s" } },
  { cls: "h-4 w-12 opacity-[0.07]", style: { bottom: "10%",right: "8%",  transform: "rotate(-40deg)", animationDelay: "1.7s" } },
  { cls: "h-2 w-7  opacity-[0.05]", style: { top: "50%",   left: "45%",  transform: "rotate(15deg)",  animationDelay: "0.9s" } },
];

/* ─── Section ─── */

export default function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-dark-grid py-20 text-white sm:py-24">
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Floating background capsules */}
      {bgCapsules.map((c, i) => (
        <div
          key={i}
          aria-hidden
          className={`pointer-events-none absolute animate-float rounded-full bg-gradient-to-r from-brand-400 to-brand-600 ${c.cls}`}
          style={c.style}
        />
      ))}

      <div className="container-page relative">
        {/* Heading */}
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

        {/* Steps */}
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.step}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-brand-400/40 hover:bg-white/[0.05]"
            >
              {/* Illustration frame */}
              <div className="relative h-[148px] border-b border-white/8 bg-white/[0.02]">
                {/* Subtle corner glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(60,163,102,0.10),transparent_70%)]" />
                {s.visual}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold tracking-tight text-white/20 transition-colors duration-300 group-hover:text-brand-400/60">
                    {s.step}
                  </span>
                  {/* Capsule micro-detail */}
                  <div
                    aria-hidden
                    className="h-2 w-6 rounded-full bg-gradient-to-r from-brand-500/40 to-brand-300/20"
                  />
                </div>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.text}</p>
              </div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-3.5 top-[74px] z-10 hidden h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-ink-950 md:flex"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 text-brand-400">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* CTA */}
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
