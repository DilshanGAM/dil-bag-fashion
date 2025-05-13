import Image from "next/image";

export default function Header(){
    return(
        <header className="w-full h-[100px] bg-accent-base flex items-center justify-between px-4">
            <Image
                src="/assets/logo-white-horizontal.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-full w-auto"
            />            
        </header>
    )
}