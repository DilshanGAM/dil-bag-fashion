import { getDictionary } from "@/utils/intl/dictionaries"
import Link from "next/link"


export default async function Page({ params }: { params: Promise<{ lang: string}> }) {
  const dict = await getDictionary((await params).lang)
  return (
    <div>
      <h1>{dict.home.welcome}</h1>
      <button>{dict.home.cart}</button>
      <Link href={"/test"}>Test</Link>
    </div>
  )
}
