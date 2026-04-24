export default function ProductVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-100 via-brand-50 to-white" />
      <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-brand-200/60 blur-2xl" />
      <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-mint-200/70 blur-2xl" />

      <div className="relative flex h-full w-full items-center justify-center p-8">
        <div className="relative h-[82%] w-[56%] animate-float">
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-ink-900 via-ink-950 to-black shadow-[0_30px_80px_-20px_rgba(15,23,42,0.55)]" />
          <div className="absolute inset-x-4 top-3 h-3 rounded-full bg-ink-700/70" />
          <div className="absolute inset-x-5 top-7 h-2 rounded-full bg-ink-700/40" />

          <div className="absolute inset-x-4 top-[22%] bottom-[12%] rounded-2xl bg-gradient-to-b from-white/5 to-white/0 p-4 text-white">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              BIO FORMULA
            </div>
            <div className="font-bold leading-tight">
              <div className="text-[10px] tracking-[0.22em] text-brand-300">
                NEURO
              </div>
              <div className="text-2xl">PEAK</div>
            </div>

            <div className="mt-4 space-y-1.5 text-[9px] uppercase tracking-widest text-white/60">
              <div className="flex items-center justify-between">
                <span>Focus</span>
                <span className="text-brand-300">+</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Clarity</span>
                <span className="text-brand-300">+</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Energy</span>
                <span className="text-brand-300">+</span>
              </div>
            </div>

            <div className="absolute inset-x-4 bottom-3 flex items-center justify-between text-[9px] uppercase tracking-widest text-white/40">
              <span>60 caps</span>
              <span>30 days</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 hidden rounded-2xl border border-ink-100 bg-white/95 px-4 py-3 shadow-card sm:flex items-center gap-3 backdrop-blur">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 text-brand-700"
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div className="text-xs font-semibold text-ink-900">Clean label</div>
          <div className="text-[11px] text-ink-500">Без зайвих домішок</div>
        </div>
      </div>
    </div>
  );
}
