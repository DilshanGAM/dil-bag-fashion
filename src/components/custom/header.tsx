"use client";
import { useI18n } from "@/lib/i18n-context";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import UserSection from "./userSection";

export default function Header() {
	const dict = useI18n();
    //get current theme
    const { theme, setTheme } = useTheme();
	return (
		<header className="w-full h-[100px]  flex items-center justify-center shadow-2xl bg-white dark:bg-[#121212] text-accent-base">
			<div className="w-[1280px]  h-full flex relative ">
				<Image
					src="/assets/logo-horizontal.png"
					alt="Logo"
                    width={100}
                    height={100}
					className="h-full w-auto absolute object-fill object-center"
				/>
				<div className="w-full flex items-center justify-end gap-10 relative">
					<Link className="un text-lg font-semibold" href="/">{dict.header.home}</Link>
                    <div  className="un cursor-pointer text-lg font-semibold">
                        {dict.header.about}
                    </div>
                    <Link href="/products" className="un text-lg font-semibold">
                        {dict.header.products}
                    </Link>
                    <UserSection/>

				</div>
			</div>
		</header>
	);
}
