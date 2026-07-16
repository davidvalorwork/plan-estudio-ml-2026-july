"use client";

import { useLanguage } from "@/lib/language";
import { GUIDE } from "@/lib/content/guide";

export default function GuidePage() {
  const { lang } = useLanguage();
  const guide = GUIDE[lang];

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">{guide.title}</h1>
        <p className="text-neutral-400 mt-2">{guide.intro}</p>
      </div>

      {guide.sections.map((section) => (
        <section key={section.heading} className="space-y-3">
          <h2 className="text-lg font-semibold text-violet-300">{section.heading}</h2>
          <ol className="space-y-2">
            {section.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-neutral-300">
                <span className="text-violet-400 font-semibold shrink-0">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <p className="text-sm text-emerald-300/90 border-l-2 border-emerald-800 pl-3">{guide.closing}</p>
    </div>
  );
}
