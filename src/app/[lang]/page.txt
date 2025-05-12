import { getDictionary } from "@/utils/intl/dictionaries"
import Link from "next/link"


export default async function Page({ params }: { params: Promise<{ lang: string}> }) {
  const dict = await getDictionary((await params).lang)
  return (
    
    <div>
      <h1>{dict.home.welcome}</h1>
      <button className="dark:bg-gray-800 dark:text-white bg-gray-300 text-black">{dict.home.cart}</button>
      <Link href={"/test"}>Test</Link>
    </div>
  )
}
