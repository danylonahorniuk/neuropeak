"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem("name")    as HTMLInputElement).value,
      phone:   (form.elements.namedItem("phone")   as HTMLInputElement).value,
      email:   (form.elements.namedItem("email")   as HTMLInputElement).value,
      comment: (form.elements.namedItem("comment") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setError("Щось пішло не так. Спробуйте ще раз або зателефонуйте нам.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead" className="section bg-surface">
      <div className="container-page">
        <FadeIn className="mx-auto max-w-5xl">
          <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-ink-100 bg-white shadow-card lg:grid-cols-[1fr_1.1fr]">
            {/* Left: info */}
            <div className="flex flex-col justify-center bg-gradient-to-br from-brand-600 to-brand-700 p-8 text-white sm:p-10 lg:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                Подати заявку
              </span>

              <h2 className="mt-5 text-balance text-3xl font-bold leading-tight sm:text-4xl">
                Приєднуйтесь до NeuroPeak
              </h2>

              <p className="mt-4 text-pretty text-base text-white/80">
                Залиште контакти — ми зв'яжемося з вами, відповімо на запитання
                та допоможемо оформити замовлення. Без спаму, тільки по суті.
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                {[
                  "Менеджер передзвонить протягом робочого дня",
                  "Без підписок та прихованих платежів",
                  "Ваші дані захищені та не передаються третім особам",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-white/90">{li}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center gap-3 border-t border-white/20 pt-8">
                <div className="flex -space-x-2">
                  {["#d1fae5", "#fde68a", "#bae6fd"].map((bg, i) => (
                    <span
                      key={i}
                      aria-hidden
                      style={{ background: bg }}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-600 text-xs font-semibold text-ink-700"
                    >
                      {"НМО"[i]}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-white/70">
                  Вже 1 200+ користувачів залишили заявку
                </span>
              </div>
            </div>

            {/* Right: form */}
            <div className="p-8 sm:p-10 lg:p-12">
              {submitted ? (
                <SuccessState onReset={() => setSubmitted(false)} />
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-700"
                    >
                      Ім'я *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ваше ім'я"
                      autoComplete="name"
                      className="input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-700"
                    >
                      Телефон *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+380 XXX XXX XXX"
                      autoComplete="tel"
                      className="input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-700"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="comment"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-700"
                    >
                      Коментар
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows={3}
                      placeholder="За бажанням: уточнення, запитання"
                      className="input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Відправляємо…" : "Оформити заявку"}
                    {!loading && (
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>

                  {error && (
                    <p className="text-center text-xs text-red-500">{error}</p>
                  )}

                  <p className="text-center text-[11px] text-ink-500">
                    Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних.
                  </p>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="mt-5 text-2xl font-bold text-ink-900">Дякуємо!</h3>
      <p className="mt-3 max-w-xs text-sm text-ink-700">
        Заявку відправлено. Менеджер зв'яжеться з вами протягом робочого дня.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="btn-ghost mt-6"
      >
        Відправити ще раз
      </button>
    </div>
  );
}
