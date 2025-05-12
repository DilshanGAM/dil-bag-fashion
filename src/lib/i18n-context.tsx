// lib/i18n-context.tsx
'use client'

import { createContext, useContext } from 'react'

const I18nContext = createContext<any>(null)

export const I18nProvider = ({ dict, children }: { dict: any; children: React.ReactNode }) => {
  return <I18nContext.Provider value={dict}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
