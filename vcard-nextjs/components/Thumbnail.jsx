"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";

// Tries to load a real image; falls back to a soft gradient placeholder
// (rather than a broken-image icon) if the file doesn't exist yet.
export default function Thumbnail({ src, alt, label, className = "" }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className={`bg-gradient-to-br from-accent/15 to-lilac/20 flex flex-col items-center justify-center gap-1.5 ${className}`}
      >
        <ImageOff size={18} className="text-ink-soft/50" />
        {label && (
          <span className="font-mono text-[9px] uppercase tracking-wider text-ink-soft/60 text-center px-2">
            {label}
          </span>
        )}
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
