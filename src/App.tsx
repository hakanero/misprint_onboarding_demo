import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Onboarding from "./screens/Onboarding";

function App() {
	const [scale, setScale] = useState(1);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const mobile = window.innerWidth < 640;
			setIsMobile(mobile);
			if (!mobile) {
				const targetHeight = 844;
				const padding = 80;
				const availableHeight = window.innerHeight - padding;
				if (availableHeight < targetHeight) {
					setScale(availableHeight / targetHeight);
				} else {
					setScale(1);
				}
			} else {
				setScale(1);
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="relative min-h-screen w-full bg-neutral-950 overflow-hidden flex items-center justify-center">
			<div
				style={{
					transform: !isMobile
						? `translate(-50%, -50%) scale(${scale})`
						: undefined,
					transformOrigin: "center center",
				}}
				className="w-full h-dvh bg-white sm:absolute sm:top-1/2 sm:left-1/2 sm:w-[390px] sm:h-[844px] sm:rounded-[50px] sm:shadow-[0_0_0_12px_#1f2937,0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
			>
				<div className="flex-1 w-full h-full flex flex-col bg-linear-to-r from-black to-black via-primary relative">
					<div className="absolute w-full h-full bg-black/40 z-0 pointer-events-none" />
					<Onboarding />
					<NavBar />
				</div>
			</div>
			<p className="text-white text-xs opacity-50 absolute bottom-2 left-1/2 transform -translate-x-1/2 select-none">
				Made by Hakan Eroglu, June 2026
			</p>
		</div>
	);
}

export default App;
