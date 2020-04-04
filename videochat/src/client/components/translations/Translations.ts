const translations = {
  de: {
    "Hang Up": "Aufhängen",
    "Toggle Chat": "Chat An/Aus",
    "Send File": "File schicken",
    "Share Desktop": "Desktop teilen",
    "Toggle Microphone": "Mikrofon An/Aus",
    "Toggle Camera": "Kamera An/Aus",
    "Toggle Fullscreen": "Fullscreen An/Aus",
  },
} as { [key: string]: { [key: string]: string } };

export const langCode = "de";

export function getTranslation(label: string, langCode: string) {
  if (translations[langCode] && translations[langCode][label]) {
    return translations[langCode][label];
  }

  return label;
}
