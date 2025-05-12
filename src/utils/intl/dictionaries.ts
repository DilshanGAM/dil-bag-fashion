import 'server-only'

const dictionaries = {
  en: () => import('./langs/en.json').then((m) => m.default),
  si: () => import('./langs/si.json').then((m) => m.default),
}

export const getDictionary = async (locale: 'en' | 'si') =>
  dictionaries[locale]()
