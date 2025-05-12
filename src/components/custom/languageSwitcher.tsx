'use client'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Cookies from 'js-cookie'

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const handleChangeLanguage = (newLang: 'en' | 'si') => {
    Cookies.set('NEXT_LOCALE', newLang, { expires: 365 }) // Store for 1 year
    const segments = pathname.split('/')
    segments[1] = newLang
    router.push(segments.join('/'))
  }

  return (
    <div className="flex gap-2">
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('si')}>සිංහල</button>
    </div>
  )
}
