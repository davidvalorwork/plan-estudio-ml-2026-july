"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";
import { MEMORY_TIPS } from "@/lib/content/memory-tips";

export function MemoryTipsButton() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const tips = MEMORY_TIPS[lang];

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={tips.buttonLabel}
        title={tips.buttonLabel}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-violet-600 text-white text-2xl shadow-lg shadow-violet-950/50 flex items-center justify-center hover:bg-violet-500 active:scale-95 transition-transform"
      >
        🧠
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 flex items-end justify-center sm:justify-end bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:w-96 sm:mb-24 sm:mr-5 max-h-[75vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-neutral-800 bg-neutral-900 p-5 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold">{tips.title}</h2>
              <button
                onClick={() => setOpen(false)}
                aria-label={tips.close}
                title={tips.close}
                className="w-9 h-9 rounded-full border border-neutral-700 text-neutral-300 hover:border-neutral-500 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <ul className="space-y-3 text-sm text-neutral-300">
              {tips.items.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-violet-400 font-semibold shrink-0">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
