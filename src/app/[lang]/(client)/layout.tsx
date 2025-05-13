import Header from "@/components/custom/header";

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}) {
	return (
        <>
            <Header />
            {children}
        </>
	);
}