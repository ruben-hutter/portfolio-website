import en from './en.json';
import de from './de.json';
import fr from './fr.json';
import it from './it.json';

export const languages = { en, de, fr, it } as const;
export const defaultLang = 'en';
export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string) {
    return key.split('.').reduce((obj: any, k: string) => obj?.[k], languages[lang]);
  };
}

export function getLocaleUrl(lang: Lang): string {
  if (lang === defaultLang) return '/';
  return `/${lang}/`;
}
