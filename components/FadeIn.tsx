"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

type State = "initial" | "hidden" | "visible";

/**
 * Fade + slide-up on scroll.
 * Key: starts as "initial" (no inline styles = visible by default).
 * JS sets "hidden" immediately after mount, then "visible" on scroll.
 * Screenshot tools that capture before JS runs see elements as visible.
 */
export default function FadeIn({ children, delay = 0, y = 22, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>("initial");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Hide instantly (no transition yet)
    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // "initial" = no inline style = element visible (for SSR / no-JS / screenshots)
  const style =
    state === "initial"
      ? {}
      : {
          opacity: state === "visible" ? 1 : 0,
          transform: state === "visible" ? "translateY(0)" : `translateY(${y}px)`,
          transition:
            state === "hidden"
              ? "none"
              : `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
