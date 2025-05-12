"use client"
import { LanguageSwitcher } from "@/components/custom/languageSwitcher";
import { useI18n } from "@/lib/i18n-context";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Page(){
    const searchParams = useSearchParams();
    const t = searchParams.get("t")||"not found";
    const dict = useI18n();
    return(
        <div>
            <h1>{dict.home.cart}</h1>
            <p>{t}</p>
            <LanguageSwitcher/>
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