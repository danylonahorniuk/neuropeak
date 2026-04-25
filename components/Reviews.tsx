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
          <path d="M10 1.8l2.5 5.1 5.6.8-4.1 4 .97 5.6L10 14.8l-5 2.6.96-5.6L1.9 7.7l5.6-.8L10 1.8z" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="section bg-surface">
      <div className="container-page">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Відгуки</span>
          <h2 className="mt-3 section-title text-balance">
            Справжні історії від наших користувачів
          </h2>
          <p className="mt-4 text-pretty text-sm text-ink-500 sm:text-base">
            Люди, які з першого погляду, обирають NeuroPeak.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <FadeIn key={r.name} delay={i * 70}>
            <article
              className="card card-hover flex flex-col h-full"
            >
              <Stars />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                “{r.text}”
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
                  <div className="text-sm font-semibold text-ink-900">
                    {r.name}
                  </div>
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
