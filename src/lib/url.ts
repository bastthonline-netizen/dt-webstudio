// Hilfsfunktion für interne Links/Bilder, damit sie auch unter dem
// GitHub-Pages-Unterpfad (/dt-webstudio/) funktionieren.
// import.meta.env.BASE_URL ist z.B. "/dt-webstudio/" (mit Slash am Ende).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Setzt den Basis-Pfad vor einen absoluten internen Pfad ("/kontakt" -> "/dt-webstudio/kontakt"). */
export function u(path: string): string {
  if (!path.startsWith("/")) return path; // externe Links / tel: / mailto: unverändert
  return BASE + path;
}
