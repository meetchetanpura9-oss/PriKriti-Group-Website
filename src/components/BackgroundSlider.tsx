// src/components/BackgroundSlider.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";

type BackgroundSliderProps = {
  images: string[];           // paths under /public, e.g. "/images/hero-1.jpg"
  interval?: number;         // ms between slides (default 8000)
  transitionMs?: number;     // fade transition time in ms (default 800)
  className?: string;        // additional classes for container
  overlay?: React.ReactNode; // optional overlay content (centered text/buttons)
};

export default function BackgroundSlider({
  images,
  interval = 8000,
  transitionMs = 800,
  className = "",
  overlay,
}: BackgroundSliderProps) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const mountedRef = useRef(true);

  // preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    return () => {
      mountedRef.current = false;
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [images]);

  useEffect(() => {
    function next() {
      setIndex((i) => (i + 1) % images.length);
    }
    // auto-advance
    timeoutRef.current = window.setTimeout(next, interval);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [index, images.length, interval]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      aria-hidden={false}
    >
      {/* slides */}
      {images.map((src, i) => {
        const isActive = i === index;
        return (
          <div
            key={i}
            className="absolute inset-0 bg-center bg-cover transition-opacity"
            // inline styles for transition timing
            style={{
              backgroundImage: `url(${src})`,
              opacity: isActive ? 1 : 0,
              transition: `opacity ${transitionMs}ms ease-in-out`,
              willChange: "opacity",
            }}
          />
        );
      })}

      {/* subtle overlay to improve text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* overlay content (centered) */}
      {overlay && (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative z-10 w-full max-w-4xl text-center">{overlay}</div>
        </div>
      )}
    </div>
  );
}
