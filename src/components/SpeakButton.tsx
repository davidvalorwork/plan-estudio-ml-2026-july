"use client";

// Pronunciación con la Web Speech API nativa del navegador (sin dependencias externas,
// sin costo, sin enviar nada a un servidor). Solo en inglés — es para practicar cómo se
// pronuncia el término técnico en inglés, no para traducir el audio.
export function SpeakButton({ text }: { text: string }) {
  function speak() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel(); // corta cualquier lectura anterior en curso
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <button
      onClick={speak}
      title="Escuchar pronunciación en inglés"
      aria-label="Escuchar pronunciación en inglés"
      className="shrink-0 w-7 h-7 rounded-full border border-neutral-700 text-neutral-300 hover:border-sky-500 hover:text-sky-400 flex items-center justify-center text-sm"
    >
      🔊
    </button>
  );
}
