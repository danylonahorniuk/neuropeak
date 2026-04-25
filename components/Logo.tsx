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
        viewBox="-6 -4 72 88"
        fill="none"
        className="h-9 w-auto flex-shrink-0"
        aria-hidden
      >
        <g transform="rotate(22, 32, 28)">
          {/* Pill / capsule — narrow 24×48, rx=12 gives perfect semicircle ends */}
          <rect
            x="20" y="4"
            width="24" height="48"
            rx="12" ry="12"
            stroke="#3ca366"
            strokeWidth="3"
            fill="none"
          />
          {/* N diagonal — top-left inflection (20,16) → bottom-right inflection (44,40) */}
          <line
            x1="20" y1="16" x2="44" y2="40"
            stroke="#3ca366"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Lightbulb base lines: widest → narrowest, spaced 5px apart */}
          <line x1="22" y1="57" x2="42" y2="57" stroke="#3ca366" strokeWidth="3" strokeLinecap="round" />
          <line x1="25" y1="62" x2="39" y2="62" stroke="#3ca366" strokeWidth="3" strokeLinecap="round" />
          <line x1="28" y1="67" x2="36" y2="67" stroke="#3ca366" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>

      <span className="text-lg font-bold tracking-tight">NeuroPeak</span>
    </span>
  );
}
