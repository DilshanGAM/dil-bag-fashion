"use client"
import { LanguageSwitcher } from "@/components/custom/languageSwitcher";
import { useI18n } from "@/lib/i18n-context";
import { useTheme } from "next-themes";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Page(){
    const searchParams = useSearchParams();
    const t = searchParams.get("t")||"not found";
    const dict = useI18n();
    const {setTheme} = useTheme()
    return(
        <div>
            <h1>{dict.home.cart}</h1>
            <p>{t}</p>
            <LanguageSwitcher/>
            <a href="/">Home</a>
            <button className="dark:text-white dark:bg-gray-800 bg-gray-300 text-black" onClick={()=>{setTheme("light")}}>
                Light
            </button>
            <button className="dark:text-white dark:bg-gray-800 bg-gray-300 text-black" onClick={()=>{setTheme("dark")}}>
                Dark
            </button>
        </div>
    )
}
export default function RouteNameWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Page />
    </Suspense>
  );
}