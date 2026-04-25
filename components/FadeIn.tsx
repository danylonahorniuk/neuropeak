"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;       // ms — use for stagger effects
  y?: number;           // px — how far to slide up from (default 22)
  className?: string;
};

/**
 * Wraps children and animates them in (fade + slide-up) when they
 * enter the viewport. Animation fires once and never reverses.
 */
export default function FadeIn({ children, delay = 0, y = 22, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
