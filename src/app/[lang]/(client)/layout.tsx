import Header from "@/components/custom/header";

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}) {

	return (
        <>
            <Header />
			<div className="w-full  flex flex-col items-center">				
					{children}			
			</div>
        </>
	);
}