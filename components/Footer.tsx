import Logo from "./Logo";
import { navLinks } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              NeuroPeak — преміальна добавка для фокусу, ясності мислення та
              продуктивності у повсякденному ритмі.
            </p>
            <p className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3 text-xs leading-relaxed text-white/70">
              NeuroPeak не є лікарським засобом. Перед використанням
              проконсультуйтесь зі спеціалістом.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Навігація
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Інформація
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="#lead" className="hover:text-white">
                  Замовити продукт
                </a>
              </li>
              <li>
                <span className="text-white/50">Політика конфіденційності</span>
              </li>
              <li>
                <span className="text-white/50">Умови використання</span>
              </li>
              <li>
                <span className="text-white/50">Партнерам</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} NeuroPeak Labs. Усі права захищені.</span>
          <span>Зроблено з любов’ю до концентрації.</span>
        </div>
      </div>
    </footer>
  );
}
