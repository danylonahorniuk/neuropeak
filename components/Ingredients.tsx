import FadeIn from "@/components/FadeIn";

const ingredients = [
  {
    code: "01",
    name: "L-Theanine",
    dose: "200 мг",
    text: "Амінокислота, що міститься в зеленому чаї. Підтримує відчуття зібраності, м’який та рівний стан концентрації.",
  },
  {
    code: "02",
    name: "Natural Caffeine",
    dose: "100 мг",
    text: "Природний кофеїн із зеленої кави. У поєднанні з L-Theanine допомагає залишатися уважним без різких стрибків.",
  },
  {
    code: "03",
    name: "B-Vitamins Complex",
    dose: "B3 · B6 · B12",
    text: "Комплекс вітамінів групи B для підтримки нормального обміну енергії та роботи нервової системи у щоденному ритмі.",
  },
  {
    code: "04",
    name: "Adaptogen Blend",
    dose: "Rhodiola · Bacopa",
    text: "М’які адаптогени, які традиційно використовуються у нутриціології для підтримки стійкості до навантажень.",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="section">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <FadeIn className="lg:sticky lg:top-24">
            <span className="section-eyebrow">Склад</span>
            <h2 className="mt-3 section-title text-balance">
              Без «запатентованих сумішей»
            </h2>
            <p className="mt-4 text-pretty text-base text-ink-700">
              Ми чесно вказуємо кожен компонент і дозування. Формула побудована
              на базових, добре вивчених елементах — без надмірних обіцянок.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-ink-100 bg-white p-4 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                  <path
                    d="M12 2 3 6v6c0 5 3.8 9.3 9 10 5.2-.7 9-5 9-10V6l-9-4Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m8.5 12.2 2.3 2.3L16 9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-900">
                  Clean label
                </div>
                <div className="text-xs text-ink-500">
                  Без штучних барвників, ГМО, глютену
                </div>
              </div>
            </div>
          </FadeIn>

          <ul className="space-y-3">
            {ingredients.map((ing, i) => (
              <FadeIn key={ing.code} delay={i * 80}>
              <li
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-cardHover sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-xs font-bold text-white transition-colors group-hover:bg-brand-600">
                  {ing.code}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-base font-semibold text-ink-900">
                      {ing.name}
                    </h3>
                    <span className="text-xs font-medium text-brand-700">
                      {ing.dose}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">
                    {ing.text}
                  </p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hidden h-5 w-5 shrink-0 text-ink-200 transition-colors group-hover:text-brand-500 sm:block"
                  aria-hidden
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
