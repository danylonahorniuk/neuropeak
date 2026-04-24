type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "light" }: LogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-ink-900";
  return (
    <span className={`inline-flex items-center gap-2 ${textColor}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-soft">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-white"
          aria-hidden
        >
          <path
            d="M12 3c-3.5 0-6 2.5-6 6 0 1.8.8 3.4 2 4.5V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4.5c1.2-1.1 2-2.7 2-4.5 0-3.5-2.5-6-6-6Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9 20.5h6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight">NeuroPeak</span>
    </span>
  );
}
