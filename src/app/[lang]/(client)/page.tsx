"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Playfair } from "next/font/google";
const PlayfairFont = Playfair({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-playfair",
	display: "swap",
});
const sliders = [
	"sliderOne.jpg",
	"sliderTwo.jpg",
	"sliderThree.jpg",
	"sliderFour.jpg",
];

export default function HomePage() {
	const { setTheme } = useTheme();
	const containerRef = useRef<HTMLDivElement>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Auto-scroll every 4 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 10000);
		return () => clearInterval(interval);
	}, [currentIndex]);

	// Scroll to the current slide
	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			container.scrollTo({
				left: container.offsetWidth * currentIndex,
				behavior: "smooth",
			});
		}
	}, [currentIndex]);

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? sliders.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
	};

	return (
		<>
			<div className="relative w-full h-[calc(100vh-100px)] flex flex-col items-center justify-center ">
				{/* Scrollable Container */}
				<div className="absolute top-0 left-0 w-full h-full z-10 bg-[#00000070] flex flex-col justify-center items-center">
					<p className={"text-white text-8xl font-bold "+PlayfairFont.className}>
						Dil Bag Fashion
					</p>
					<p className="text-white text-2xl font-light">
						Crafted for Heart and Soul
					</p>

				</div>
				<div
					ref={containerRef}
					className="w-full flex flex-row shrink-0 h-[500px] overflow-hidden scroll-smooth no-scrollbar"
				>
					{sliders.map((slider, index) => (
						<div key={index} className="min-w-full min-h-full">
							<img
								src={`/assets/${slider}`}
								alt={`Slider ${index + 1}`}
								className="w-full h-full object-cover"
							/>
						</div>
					))}
				</div>

				{/* Left/Right Buttons */}
				<button
					onClick={handlePrev}
					className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md z-20"
				>
					<ChevronLeft className="w-6 h-6" />
				</button>
				<button
					onClick={handleNext}
					className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md z-20"
				>
					<ChevronRight className="w-6 h-6 " />
				</button>

				{/* Dots */}
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
					{sliders.map((_, idx) => (
						<button
							key={idx}
							onClick={() => setCurrentIndex(idx)}
							className={`w-3 h-3 rounded-full transition-all ${
								idx === currentIndex ? "bg-primary scale-110" : "bg-gray-400"
							}`}
						></button>
					))}
				</div>
			</div>
		</>
	);
}
