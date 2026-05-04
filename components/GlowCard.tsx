"use client";

import { useRef, useState, type ReactNode } from "react";

export default function GlowCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState("");

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setGlow(`radial-gradient(600px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(91,160,255,0.10), transparent 40%)`);
      }}
      onMouseLeave={() => setGlow("")}
    >
      {glow && (
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-[inherit]"
          style={{ background: glow }}
        />
      )}
      {children}
    </div>
  );
}
