import NavBar from "./components/NavBar";
import Onboarding from "./screens/Onboarding";

function App() {
	return (
		<div className="min-h-screen bg-neutral-950 flex items-center justify-center p-0 sm:p-4">
			<div className="relative w-full h-dvh bg-white sm:w-[390px] sm:h-[844px] sm:rounded-[50px] sm:shadow-[0_0_0_12px_#1f2937,0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
				<div className="flex-1 w-full h-full flex flex-col bg-linear-to-r from-black to-black via-primary relative">
					<div className="absolute w-full h-full bg-black/40 z-0 pointer-events-none" />
					<Onboarding />
					<NavBar />
				</div>
			</div>
			<p className="text-white text-xs opacity-50 absolute bottom-2 left-1/2 transform -translate-x-1/2">
				Made by Hakan Eroglu, June 2026
			</p>
		</div>
	);
}

export default App;
