"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language";
import { UI } from "@/lib/ui-strings";

export function Header() {
  const { lang, setLang } = useLanguage();
  const t = UI[lang];

  return (
    <header className="border-b border-neutral-800 px-4 sm:px-6 py-3 flex flex-wrap items-center gap-4 sm:gap-6">
      <Link href="/" className="font-semibold tracking-tight text-base">
        🧠 Plan ML/Transformers/RL
      </Link>
      <nav className="text-sm text-neutral-400 flex gap-4">
        <Link href="/" className="hover:text-neutral-100 py-2">
          {t.dashboard}
        </Link>
      </nav>
      <div className="ml-auto flex gap-1 rounded-full border border-neutral-700 p-1">
        <button
          onClick={() => setLang("es")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            lang === "es" ? "bg-neutral-100 text-neutral-900" : "text-neutral-400"
          }`}
        >
          Español
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            lang === "en" ? "bg-neutral-100 text-neutral-900" : "text-neutral-400"
          }`}
        >
          English
        </button>
      </div>
    </header>
  );
}
