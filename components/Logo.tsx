type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "light" }: LogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-ink-900";

  return (
    <span className={`inline-flex items-center gap-2.5 ${textColor}`}>
      {/*
        Icon: narrow pill capsule (2:1 height-to-width) tilted 22° clockwise.
        N letterform is inscribed — two sides of capsule serve as vertical legs,
        a single diagonal stroke forms the N cross. Below the capsule, three
        narrowing horizontal bars create the lightbulb-base / screw effect.
        Entire group drawn vertically then rotated so nothing clips.
      */}
      <svg
        viewBox="-4 0 68 80"
        fill="none"
        className="h-9 w-auto flex-shrink-0"
        aria-hidden
      >
        <g transform="rotate(22, 32, 32)">
          {/* Capsule — 28×48 pill, rx=14 = perfect semicircle ends */}
          <rect
            x="18" y="8"
            width="28" height="48"
            rx="14" ry="14"
            stroke="#3ca366"
            strokeWidth="3.5"
            fill="none"
          />
          {/* N diagonal — top inflection (18,22) → bottom inflection (46,42) */}
          <line
            x1="18" y1="22" x2="46" y2="42"
            stroke="#3ca366"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Lightbulb base: 3 lines below capsule, narrowing */}
          <line x1="20" y1="61" x2="44" y2="61" stroke="#3ca366" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="23" y1="67" x2="41" y2="67" stroke="#3ca366" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="26" y1="73" x2="38" y2="73" stroke="#3ca366" strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </svg>

      <span className="text-lg font-bold tracking-tight">NeuroPeak</span>
    </span>
  );
}
