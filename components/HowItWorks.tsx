import FadeIn from "@/components/FadeIn";

/* ── Step visuals (light bg versions) ── */

function FormVisual() {
  return (
    <div className="w-[140px] rounded-2xl border border-ink-100 bg-white p-4 shadow-card">
      <div className="space-y-2.5">
        <div className="h-1.5 w-full rounded-full bg-ink-100" />
        <div className="h-1.5 w-10/12 rounded-full bg-ink-100" />
        <div className="h-1.5 w-full rounded-full bg-ink-100" />
        <div className="h-1.5 w-8/12 rounded-full bg-ink-100" />
      </div>
      <div className="mt-4 flex h-7 items-center justify-center rounded-lg bg-brand-600">
        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
          Надіслати →
        </span>
      </div>
      <div className="mt-2 flex items-center gap-1.5">
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-100">
          <svg viewBox="0 0 12 12" fill="none" className="h-2.5 w-2.5">
            <path d="M2 6l2.5 2.5L10 3.5" stroke="#2a8752" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-[9px] text-ink-500">Заявку отримано</span>
      </div>
    </div>
  );
}

function DeliveryVisual() {
  return (
    <div className="relative w-[140px]">
      {/* Box */}
      <div className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
        {/* Flaps */}
        <div className="flex gap-0.5 border-b border-ink-100 bg-ink-50 px-4 pt-3 pb-2">
          <div className="h-3 flex-1 rounded-t-md border border-ink-100 bg-white" />
          <div className="h-3 flex-1 rounded-t-md border border-ink-100 bg-white" />
        </div>
        {/* Body */}
        <div className="flex flex-col items-center justify-center gap-0.5 py-4">
          <span className="text-[7px] font-semibold uppercase tracking-[0.22em] text-brand-500">NEURO</span>
          <span className="text-base font-extrabold text-ink-900">PEAK</span>
        </div>
      </div>
      {/* Pin */}
      <div className="absolute -right-3 -top-3">
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 drop-shadow-sm">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" fill="#dbf3e3" stroke="#2a8752" strokeWidth="1.8" />
          <circle cx="12" cy="9" r="2.5" stroke="#2a8752" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

function CapsuleDosageVisual() {
  return (
    <div className="w-[148px] rounded-2xl border border-ink-100 bg-white shadow-card overflow-hidden">
      {/* Header */}
      <div className="bg-brand-600 px-4 py-2.5 flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 text-white/90" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90">Щоденний прийом</span>
      </div>
      {/* Body */}
      <div className="px-4 py-3 space-y-2.5">
        {/* Capsule row */}
        <div className="flex items-center gap-2.5">
          {/* Capsule illustration */}
          <div className="relative h-5 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-brand-700 to-brand-500 shadow-sm ring-1 ring-brand-800/20">
            <div className="absolute inset-y-0 left-1/2 w-px bg-white/30" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/10" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-extrabold leading-none text-ink-900">×1</span>
            <span className="text-[8px] uppercase tracking-widest text-ink-400">/ день</span>
          </div>
        </div>
        {/* Divider */}
        <div className="h-px bg-ink-100" />
        {/* Time row */}
        <div className="flex items-center gap-1.5">
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-100">
            <svg viewBox="0 0 24 24" fill="none" className="h-2.5 w-2.5 text-amber-500" aria-hidden>
              <circle cx="12" cy="12" r="4" fill="currentColor"/>
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-[9px] text-ink-500">Зранку · з водою</span>
        </div>
      </div>
    </div>
  );
}

/* ── Data ── */

const steps = [
  {
    step: "01",
    title: "Залиште заявку",
    text: "Заповніть форму на сайті — ми зв'яжемося з вами протягом робочого дня, щоб уточнити деталі доставки.",
    visual: <FormVisual />,
  },
  {
    step: "02",
    title: "Оформимо замовлення",
    text: "Погоджуємо адресу, спосіб оплати та відправки. Жодних прихованих умов чи підписок — все прозоро.",
    visual: <DeliveryVisual />,
  },
  {
    step: "03",
    title: "Почніть день у фокусі",
    text: "Одна капсула зранку з водою — і ви плавно входите у робочий ритм без різких стрибків енергії.",
    visual: <CapsuleDosageVisual />,
  },
];

/* ── Background floating capsules ── */

const bgCapsules = [
  { cls: "h-3.5 w-11", style: { top: "6%",    left: "3%",   rotate: "36deg",  animationDelay: "0s"   }, op: 0.18 },
  { cls: "h-2.5 w-8",  style: { top: "24%",   right: "4%",  rotate: "-22deg", animationDelay: "1.1s" }, op: 0.14 },
  { cls: "h-3 w-9",    style: { top: "58%",   left: "7%",   rotate: "52deg",  animationDelay: "0.6s" }, op: 0.12 },
  { cls: "h-3.5 w-10", style: { bottom: "12%",right: "6%",  rotate: "-44deg", animationDelay: "1.8s" }, op: 0.16 },
  { cls: "h-2 w-6",    style: { top: "42%",   right: "18%", rotate: "18deg",  animationDelay: "0.9s" }, op: 0.10 },
  { cls: "h-2.5 w-7",  style: { bottom: "30%",left: "20%",  rotate: "-62deg", animationDelay: "1.4s" }, op: 0.11 },
];

/* ── Section ── */

export default function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-ink-50 py-20 sm:py-28">
      {/* Dot grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #c8ccd6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
        }}
      />

      {/* Floating capsules */}
      {bgCapsules.map((c, i) => (
        <div
          key={i}
          aria-hidden
          className={`pointer-events-none absolute animate-float rounded-full bg-gradient-to-r from-brand-400 to-brand-600 ${c.cls}`}
          style={{ ...c.style, opacity: c.op, transform: `rotate(${c.style.rotate})` }}
        />
      ))}

      <div className="container-page relative">
        {/* Heading */}
        <FadeIn className="mx-auto max-w-xl text-center">
          <span className="section-eyebrow">Як це працює</span>
          <h2 className="mt-3 section-title text-balance">
            Три прості кроки до щоденного фокусу
          </h2>
          <p className="mt-4 text-sm text-ink-500 sm:text-base">
            Від моменту заявки до першої капсули — швидко і зрозуміло.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-2xl">
          {/* Vertical connecting line */}
          <div
            aria-hidden
            className="absolute left-6 top-6 bottom-6 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #8ed4a7 0%, #3ca366 50%, transparent 100%)",
            }}
          />

          <ol className="space-y-14">
            {steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 120} className="relative flex items-start gap-8">
                {/* Step dot + number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-300 bg-white shadow-soft ring-4 ring-white">
                    <span className="text-sm font-bold text-brand-600">{s.step}</span>
                  </div>
                </div>

                {/* Content + visual */}
                <div className="flex flex-1 items-center justify-between gap-6 pt-2">
                  <div className="max-w-xs">
                    <h3 className="text-xl font-semibold text-ink-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.text}</p>
                  </div>
                  <div className="hidden flex-shrink-0 sm:block">{s.visual}</div>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <a href="#lead" className="btn-primary">
            Подати заявку
          </a>
          <span className="text-xs text-ink-400">Передзвонимо протягом робочого дня</span>
        </div>
      </div>
    </section>
  );
}
