type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "light" }: LogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-ink-900";

  return (
    <span className={`inline-flex items-center gap-2.5 ${textColor}`}>
      {/*
        Icon: N inscribed in a tilted capsule that transitions into a lightbulb.
        Base shape is drawn vertically, then rotated ~22° clockwise.
        ViewBox has padding to prevent clipping after rotation.
      */}
      <svg
        viewBox="-6 -6 76 76"
        fill="none"
        className="h-9 w-auto flex-shrink-0"
        aria-hidden
      >
        <g transform="rotate(22, 32, 28)">
          {/* Capsule outline — left N leg → capsule arc → right N leg → lightbulb curve */}
          <path
            d="M8 42 L8 16 C8 3 56 3 56 16 L56 42 Q56 51 32 51 Q8 51 8 42 Z"
            stroke="#3ca366"
            strokeWidth="3.2"
            strokeLinejoin="round"
            fill="none"
          />
          {/* N diagonal */}
          <path
            d="M8 16 L56 42"
            stroke="#3ca366"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Lightbulb base lines (widest → narrowest) */}
          <path d="M16 55 L48 55" stroke="#3ca366" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M19 60 L45 60" stroke="#3ca366" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M22 65 L42 65" stroke="#3ca366" strokeWidth="3.2" strokeLinecap="round" />
        </g>
      </svg>

      <span className="text-lg font-bold tracking-tight">NeuroPeak</span>
    </span>
  );
}
