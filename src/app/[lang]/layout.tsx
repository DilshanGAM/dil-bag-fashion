import { I18nProvider } from "@/lib/i18n-context";
import { getDictionary } from "@/utils/intl/dictionaries";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Dil Bag Fashion",
	description: "Heart crafted holsters",
};

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}) {
	const dict = await getDictionary((await params).lang);

	return (
		<html lang={(await params).lang} suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
				<I18nProvider dict={dict}>{children}</I18nProvider>
        </ThemeProvider>
			</body>
		</html>
	);
}
