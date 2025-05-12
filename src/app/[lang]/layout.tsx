import { I18nProvider } from "@/lib/i18n-context";
import { getDictionary } from "@/utils/intl/dictionaries";


// ✅ CORRECT PARAMS TYPE — NO PROMISE
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "en" | "si" };
}) {
  const dict = await getDictionary(params.lang);

  return (

        <I18nProvider dict={dict}>{children}</I18nProvider>

  );
}
