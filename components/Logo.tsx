type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "light" }: LogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-ink-900";

  return (
    <span className={`inline-flex items-center gap-2.5 ${textColor}`}>
      {/* Icon: N inscribed in capsule + lightbulb base */}
      <svg
        viewBox="0 0 34 46"
        fill="none"
        className="h-8 w-auto flex-shrink-0 text-brand-500"
        aria-hidden
      >
        {/* Left N leg + capsule top arc */}
        <path
          d="M6 30 L6 14 C6 4 28 4 28 14"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* N diagonal */}
        <path
          d="M6 14 L28 28"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
        {/* Right N leg + lightbulb bottom */}
        <path
          d="M28 14 L28 30 Q28 37 17 37 Q6 37 6 30"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Lightbulb base lines */}
        <path
          d="M11 40 L23 40"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
        <path
          d="M13 44 L21 44"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-lg font-bold tracking-tight">NeuroPeak</span>
    </span>
  );
}
