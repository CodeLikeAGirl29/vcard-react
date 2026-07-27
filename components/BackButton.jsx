"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ className }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={
        className ||
        "font-mono text-[11px] uppercase tracking-wider text-accent hover:underline"
      }
    >
      ← Back
    </button>
  );
}
