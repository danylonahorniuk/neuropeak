type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "light" }: LogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-ink-900";

  return (
    <span className={`inline-flex items-center gap-2.5 ${textColor}`}>
      <svg
        viewBox="0 0 56 56"
        fill="none"
        className="h-9 w-auto flex-shrink-0"
        aria-hidden
      >
        {/*
          Outer shape: left N leg → capsule top arc → right N leg → lightbulb bottom curve
          Forms a closed capsule+lightbulb silhouette
        */}
        <path
          d="M6 36 L6 18 C6 3 50 3 50 18 L50 36 Q50 43 28 43 Q6 43 6 36 Z"
          stroke="#3ca366"
          strokeWidth="2.8"
          strokeLinejoin="round"
          fill="none"
        />
        {/* N diagonal — creates the N letterform inside */}
        <path
          d="M6 18 L50 36"
          stroke="#3ca366"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* Lightbulb base lines (widest → narrowest) */}
        <path d="M17 47 L39 47" stroke="#3ca366" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M19 51 L37 51" stroke="#3ca366" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M21 55 L35 55" stroke="#3ca366" strokeWidth="2.8" strokeLinecap="round" />
      </svg>

      <span className="text-lg font-bold tracking-tight">NeuroPeak</span>
    </span>
  );
}
