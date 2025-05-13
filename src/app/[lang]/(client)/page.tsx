"use client";
import { useTheme } from "next-themes";

export default function HomePage() {
	const {setTheme} = useTheme()
	return (
		<div>
			<h1>Home Page</h1>
			<p>Welcome to the home page!</p>
			<div className="bg-[#B88A44] text-white font-semibold text-center py-4 rounded-md shadow">
				Primary – #B88A44
			</div>

			<div className="bg-[#4B3A2F] text-white font-semibold text-center py-4 rounded-md shadow">
				Secondary – #4B3A2F
			</div>

			<div className="bg-[#FFFFFF] text-black border border-gray-300 font-semibold text-center py-4 rounded-md shadow">
				Neutral Light – #FFFFFF
			</div>

			<div className="bg-[#F7F3EC] text-black font-semibold text-center py-4 rounded-md shadow">
				Neutral Soft – #F7F3EC
			</div>

			<div className="bg-[#2C2C2C] text-white font-semibold text-center py-4 rounded-md shadow">
				Text Primary – #2C2C2C
			</div>

			<div className="bg-[#6E6259] text-white font-semibold text-center py-4 rounded-md shadow">
				Text Secondary – #6E6259
			</div>
			<button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow mt-4" onClick={() => setTheme("dark")}>
				Set Dark Theme
			</button>
			<button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow mt-4" onClick={() => setTheme("light")}>
				Set Light Theme
			</button>
		</div>
	);
}