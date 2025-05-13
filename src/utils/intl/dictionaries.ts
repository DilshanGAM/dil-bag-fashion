import 'server-only'

const dictionaries: Record<'en' | 'si', () => Promise<any>> = {
  en: () => import('./langs/en.json').then((m) => m.default),
  si: () => import('./langs/si.json').then((m) => m.default),
}

export const getDictionary = async (locale: string) => {
  // Check if the locale is valid
  if (!Object.keys(dictionaries).includes(locale)) {
    locale = 'en';
  }
  // If the locale is valid, return the dictionary
  return dictionaries[locale as 'en' | 'si']();
}
