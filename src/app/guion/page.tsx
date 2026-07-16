"use client";

import { phases, allConcepts } from "@/lib/content/phases";
import { characterFor } from "@/lib/content/characters";
import { useLanguage } from "@/lib/language";
import { UI } from "@/lib/ui-strings";
import { localizedConcept, localizedPhaseTitle, localizedPhaseSynthesis, localizedScene } from "@/lib/content/localized";

export default function RecitationScriptPage() {
  const { lang } = useLanguage();
  const t = UI[lang];
  const total = allConcepts().length;
  let index = 0;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">{t.recitationTitle}</h1>
        <p className="text-neutral-400 mt-2 text-sm">{t.recitationIntro}</p>
      </div>

      {phases.map((phase) => (
        <section key={phase.id} className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">{t.phaseLabel(phase.order, localizedPhaseTitle(phase, lang))}</h2>
            <p className="text-sm text-neutral-400 mt-1 italic">{localizedPhaseSynthesis(phase, lang)}</p>
          </div>

          <div className="space-y-3">
            {phase.concepts.map((c) => {
              index += 1;
              const localized = localizedConcept(c, lang);
              const character = characterFor(c.id);
              return (
                <div key={c.id} className="rounded-lg border border-neutral-800 bg-neutral-900 p-3 space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium">{localized.name}</span>
                    <span className="text-xs text-neutral-500 shrink-0">
                      {index}/{total}
                    </span>
                  </div>
                  {character && (
                    <p className="text-sm text-fuchsia-300/90 border-l-2 border-fuchsia-800 pl-2">
                      {t.recitationHint} ({character.franchise} — {character.character}):{" "}
                      {localizedScene(c.id, character.scene, lang)}
                    </p>
                  )}
                  <p className="text-sm text-neutral-300">{localized.lesson}</p>
                  <p className="text-sm text-sky-300/90 border-l-2 border-sky-800 pl-2">
                    {t.example}: {localized.example}
                  </p>
                  <p className="text-sm text-emerald-300/90 border-l-2 border-emerald-800 pl-2">
                    {t.recitationRelation}: {localized.relation}
                  </p>
                  <p className="text-xs text-neutral-500 italic">
                    {t.recitationQuestion}: {localized.prompt}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
