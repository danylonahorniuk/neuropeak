"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Чи є це лікарським засобом?",
    a: "Ні. NeuroPeak — це дієтична добавка, а не лікарський засіб. Продукт не призначений для діагностики, лікування або профілактики захворювань. Перед використанням варто проконсультуватися зі спеціалістом.",
  },
  {
    q: "Як залишити заявку?",
    a: "Заповніть коротку форму внизу сторінки — достатньо імені, телефону та email. Ми зв’яжемося, щоб узгодити деталі замовлення та доставки.",
  },
  {
    q: "Коли зі мною зв’яжуться?",
    a: "У робочі години ми передзвонюємо протягом кількох годин після заявки. Якщо ви залишили її ввечері або у вихідні — зателефонуємо наступного робочого дня.",
  },
  {
    q: "Чи можна замовити консультацію?",
    a: "Так. У коментарі до заявки вкажіть, що хочете консультацію — менеджер відповість на всі запитання та допоможе з вибором.",
  },
  {
    q: "Чи підходить продукт для щоденного використання?",
    a: "NeuroPeak створений у зручному щоденному форматі — одна капсула зранку з їжею. Режим використання варто узгодити зі спеціалістом, особливо якщо ви приймаєте інші добавки або ліки.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="section-eyebrow">FAQ</span>
            <h2 className="mt-3 section-title text-balance">
              Часті запитання
            </h2>
            <p className="mt-4 text-pretty text-sm text-ink-500 sm:text-base">
              Коротко про головне. Якщо не знайшли свого питання — просто
              залиште його у формі.
            </p>
            <a href="#lead" className="btn-ghost mt-6">
              Залишити питання
            </a>
          </div>

          <ul className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-card">
            {faqs.map((f, i) => {
              const isOpen = openIdx === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-base font-semibold text-ink-900">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-100 text-ink-700 transition-transform duration-300 ${
                        isOpen ? "rotate-45 border-brand-300 bg-brand-50 text-brand-700" : ""
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden px-5 transition-[grid-template-rows,opacity] duration-300 sm:px-6 ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 text-sm leading-relaxed text-ink-700">
                      {f.a}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
