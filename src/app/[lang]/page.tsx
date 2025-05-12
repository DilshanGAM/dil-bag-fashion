import { getDictionary } from "@/utils/intl/dictionaries"
import Link from "next/link"


export default async function Page({ params }: { params: { lang: 'en' | 'si' } }) {
  const dict = await getDictionary(params.lang)
  return (
    <div>
      <h1>{dict.home.welcome}</h1>
      <button>{dict.home.cart}</button>
      <Link href={params.lang+"/test"}>Test</Link>
    </div>
  )
}
