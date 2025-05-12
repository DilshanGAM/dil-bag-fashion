import { I18nProvider } from "@/lib/i18n-context";
import { getDictionary } from "@/utils/intl/dictionaries";


// ✅ CORRECT PARAMS TYPE — NO PROMISE
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "si" }>;
}) {
  const dict = await getDictionary((await params).lang);

  return (
        <I18nProvider dict={dict}>{children}</I18nProvider>
  );
}
