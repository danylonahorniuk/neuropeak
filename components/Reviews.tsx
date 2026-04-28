import FadeIn from "@/components/FadeIn";

const reviews = [
  {
    name: "Олександр К.",
    role: "Senior Dev",
    initials: "ОК",
    color: "#d1fae5",
    text: "Як Senior Dev, який доволі скептично ставлюсь до подібних добавок, NeuroPeak дав мені той стабільний focus, якого я не міг досягти кавою.",
  },
  {
    name: "Катерина Д.",
    role: "Bizdev Manager",
    initials: "КД",
    color: "#fde68a",
    text: "Я продуктова і поки що не шкодую про замовлення. Ставала більш зібраною на дзвінках, чистіша думка, стабільна енергія протягом робочого дня.",
  },
  {
    name: "Марʼян Т.",
    role: "UX Designer",
    initials: "МТ",
    color: "#bae6fd",
    text: "Менш продуктивних буденних підвалень ніколи не було, і NeuroPeak дійсно робить той лайфхак, про який я давно думав — добавка без різких стрибків.",
  },
  {
    name: "Тетяна В.",
    role: "Product Lead",
    initials: "ТВ",
    color: "#fecaca",
    text: "Я управляю проєктною командою і постійно у потоці. З цим продуктом легше тримати концентрацію на кілька годин підряд.",
  },
  {
    name: "Дмитро С.",
    role: "Trader",
    initials: "ДС",
    color: "#e9d5ff",
    text: "Треблось з перших днів — мені подобається зранку. Простіше тримати увагу, коли на робочому столі десятки задач одночасно.",
  },
  {
    name: "Олена Р.",
    role: "Founder",
    initials: "ОР",
    color: "#fed7aa",
    text: "Як фанатка спорту та порядку, мене приємно здивувала якість формули. Це дійсно допомагає зібратися, коли не хочеться витрачати час на каву.",
  },
];

function Stars() {
  return (
    <span className="inline-flex items-center gap-0.5 text-amber-400" aria-label="5 з 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
          <path d="M10 2l2.4 4.8 5.3 0.8-3.8 3.7 0.9 5.3-4.8-2.5-4.8 2.5 0.9-5.3-3.8-3.7 5.3-0.8z" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="section relative overflow-hidden" style={{ background: "linear-gradient(135deg, #5dd49a 0%, #38b870 40%, #239455 100%)" }}>
      {/* Subtle glow blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(180,255,210,0.30) 0%, transparent 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(100,255,170,0.18) 0%, transparent 70%)" }} />

      <div className="container-page relative">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow !text-white/70">Відгуки</span>
          <h2 className="mt-3 section-title text-balance !text-white">
            Справжні історії від наших користувачів
          </h2>
          <p className="mt-4 text-pretty text-sm text-white/75 sm:text-base">
            Люди, які з першого погляду, обирають NeuroPeak.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <FadeIn key={r.name} delay={i * 70}>
              <article className="flex flex-col h-full rounded-2xl border border-white/60 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md backdrop-blur-sm">
                <Stars />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                  <span
                    aria-hidden
                    style={{ background: r.color }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-ink-700"
                  >
                    {r.initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink-900">{r.name}</div>
                    <div className="text-xs text-ink-500">{r.role}</div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
