import Link from "next/link";


export default function UserSection(){
    return (
        <div className=" flex items-center justify-center ">
            <Link href={"/login"} className="un text-lg font-semibold">
                <span className="">Login</span>
            </Link>
            &nbsp;|&nbsp;
            <Link href={"/signin"} className="un text-lg font-semibold">
                <span className="">Register</span>
            </Link>
        </div>
    )
}