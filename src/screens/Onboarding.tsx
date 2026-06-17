import { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Card from "../components/Card";
import {
	CameraIcon,
	CaretRightIcon,
	CheckIcon,
	MagnifyingGlassIcon,
	MoneyIcon,
} from "@phosphor-icons/react";

function UsernameScreen({
	username,
	setUsername,
}: {
	username: string;
	setUsername: (name: string) => void;
}) {
	return (
		<div className="flex flex-col items-center text-center animate-fade-in max-w-[280px] mx-auto px-4">
			<div className="text-2xl font-extrabold text-white mb-3 tracking-tight text-shadow-lg leading-tight">
				Pick your username
			</div>
			<div className="text-neutral-400 text-xs leading-relaxed mb-6 text-shadow-sm px-2">
				Choose a unique username for your Misprint account
			</div>
			<input
				type="text"
				value={username}
				onChange={(e) =>
					setUsername(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ""))
				}
				maxLength={15}
				placeholder="Enter username"
				className="w-full bg-neutral-950/80 border border-neutral-900 focus:border-primary/60 focus:outline-hidden text-white placeholder-neutral-600 text-center font-bold tracking-wide px-4 py-3 shadow-inner transition-colors duration-200"
			/>
			<div className="text-[10px] text-neutral-400 mt-2">
				Must be lowercase letters, numbers, underscores, or hyphens only
			</div>
		</div>
	);
}

function WelcomeScreen({ username }: { username: string }) {
	return (
		<div className="flex flex-col items-center text-center animate-fade-in">
			<div className="text-3xl font-extrabold text-white mb-3 tracking-tight text-shadow-lg">
				Welcome to Misprint, <span className="text-primary">{username}</span>
			</div>
			<div className="text-neutral-400 text-sm max-w-xs leading-relaxed text-shadow-sm">
				Revolutionizing the way collectors buy, sell, and value graded Pokémon
				cards.
			</div>
		</div>
	);
}

function HowItWorksScreen() {
	return (
		<div className="flex flex-col animate-fade-in">
			<h1 className="text-2xl font-extrabold text-white text-center mb-6 tracking-tight">
				How it works
			</h1>
			<div className="flex gap-4 mb-6">
				<Card className="flex-1 p-5 items-center text-center hover:border-primary/45 transition-all">
					<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
						<MagnifyingGlassIcon className="text-primary" size={24} />
					</div>
					<h2 className="font-bold text-red-500 mb-2">Buy</h2>
					<p className="text-[11px] text-neutral-400 leading-normal">
						Bid on cards or buy instantly at transparent market prices.
					</p>
				</Card>
				<Card className="flex-1 p-5 items-center text-center hover:border-primary/45 transition-all">
					<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
						<MoneyIcon className="text-primary" size={24} />
					</div>
					<h2 className="font-bold text-green-500 mb-2">Sell</h2>
					<p className="text-[11px] text-neutral-400 leading-normal">
						Scan your cards with your camera and list them in seconds.
					</p>
				</Card>
			</div>
			<p className="text-center text-sm text-neutral-400 italic">
				Most collectors do both.
			</p>
		</div>
	);
}

function ScanToSellScreen() {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<div className="flex flex-col items-center animate-fade-in w-full">
			<h1 className="text-2xl font-extrabold text-white text-center mb-2 tracking-tight">
				List a card in seconds
			</h1>
			<p className="text-xs text-neutral-400 text-center mb-6 px-4">
				It only takes 3 steps!
			</p>

			<div className="relative w-56 mb-4">
				{activeStep > 0 && (
					<button
						onClick={() => setActiveStep(activeStep - 1)}
						className="absolute left-[-16px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white hover:bg-neutral-800 transition-all cursor-pointer active:scale-90 shadow-md"
					>
						<CaretRightIcon className="rotate-180" size={16} weight="bold" />
					</button>
				)}

				{activeStep < 2 && (
					<button
						onClick={() => setActiveStep(activeStep + 1)}
						className="absolute right-[-16px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white hover:bg-neutral-800 transition-all cursor-pointer active:scale-90 shadow-md"
					>
						<CaretRightIcon size={16} weight="bold" />
					</button>
				)}

				{activeStep === 0 && (
					<Card className="w-full aspect-3/4 p-6 items-center justify-center text-center">
						<div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(100,102,233,0.15)]">
							<CameraIcon className="text-primary" size={32} weight="bold" />
						</div>
						<span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
							Step 1 of 3
						</span>
						<h2 className="text-base font-extrabold text-white mb-2">
							Open the camera
						</h2>
						<p className="text-xs text-neutral-400 max-w-[170px] leading-relaxed">
							Tap the scan tab at the bottom of the screen to open the camera.
						</p>
					</Card>
				)}

				{activeStep === 1 && (
					<Card className="w-full aspect-3/4 p-6 items-center justify-center text-center">
						<div className="relative w-20 h-24 border border-dashed border-primary/45 rounded-xl flex items-center justify-center bg-neutral-950/60 overflow-hidden mb-4">
							<div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-primary" />
							<div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-primary" />
							<div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-primary" />
							<div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-primary" />
							<img src="src/assets/card.png" className="w-10 h-16 rounded" />
							<div className="absolute left-0 right-0 h-[2px] bg-primary animate-pulse shadow-[0_0_8px_#6466e9]" />
						</div>
						<span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
							Step 2 of 3
						</span>
						<h2 className="text-base font-extrabold text-white mb-2">
							Align card in frame
						</h2>
						<p className="text-xs text-neutral-400 max-w-[170px] leading-relaxed">
							Keep the card flat and position the certification number in view.
						</p>
					</Card>
				)}

				{activeStep === 2 && (
					<Card className="w-full aspect-3/4 p-6 items-center justify-center text-center">
						<div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(34,197,94,0.15)] text-green-500">
							<CheckIcon size={32} weight="bold" />
						</div>
						<span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
							Step 3 of 3
						</span>
						<h2 className="text-base font-extrabold text-white mb-2">
							Instant Pricing & Listing
						</h2>
						<p className="text-xs text-neutral-400 max-w-[170px] leading-relaxed">
							We automatically identify card, evaluate grade condition, and
							draft listings instantly.
						</p>
					</Card>
				)}
			</div>

			<div className="flex justify-center gap-1.5 mt-2">
				{[0, 1, 2].map((idx) => (
					<div
						key={idx}
						className={`h-1 rounded-full transition-all duration-300 ${
							idx === activeStep ? "bg-primary w-4" : "bg-neutral-800 w-1"
						}`}
					/>
				))}
			</div>
		</div>
	);
}

function BuyingAndBiddingScreen() {
	return (
		<div className="flex flex-col items-center animate-fade-in">
			<h1 className="text-2xl font-extrabold text-white text-center mb-2 tracking-tight">
				Find any card at market price
			</h1>
			<p className="text-xs text-neutral-400 text-center leading-relaxed mb-4 max-w-xs">
				Our advanced bid/ask model matches your offers instantly, creating a
				transparent and efficient trading environment.
			</p>

			<Card className="w-56 p-3">
				<div className="relative w-full aspect-3/4 rounded-xl overflow-hidden mb-3">
					<img
						src="/src/assets/card.png"
						alt="Card Visual"
						className="w-full h-full object-cover"
					/>
				</div>

				<h2 className="text-sm font-bold text-white text-left leading-snug line-clamp-2 px-1">
					Charizard - Holo
				</h2>

				<div className="space-y-1.5 border-t border-neutral-900 px-1">
					<div className="flex justify-between items-baseline">
						<span className="text-xs font-bold text-white">BUY</span>
						<span className="text-xl font-extrabold text-emerald-400 tracking-tight">
							$400
						</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="text-xs font-bold text-neutral-400">SELL</span>
						<div className="flex items-center gap-0.5">
							<span className="text-sm font-bold text-rose-500">$200</span>
							<CaretRightIcon color="red" weight="bold" size={14} />
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

function AllSetScreen() {
	return (
		<div className="flex flex-col items-center text-center animate-fade-in">
			<div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.15)] text-green-500">
				<CheckIcon weight="bold" size={32} className="text-green-500" />
			</div>
			<h1 className="text-3xl font-extrabold text-white mb-3 tracking-tight text-shadow-lg">
				You're all set!
			</h1>
			<p className="text-neutral-400 text-sm max-w-xs leading-relaxed mb-8 text-shadow-sm">
				Start exploring the Misprint marketplace now. Your collection awaits!
			</p>
		</div>
	);
}

export default function Onboarding() {
	const [username, setUsername] = useState("");
	const [screenIndex, setScreenIndex] = useState(0);

	const handleNext = () => {
		if (screenIndex < 5) {
			setScreenIndex(screenIndex + 1);
		}
	};

	const handleBack = () => {
		if (screenIndex > 0) {
			setScreenIndex(screenIndex - 1);
		}
	};

	return (
		<div className="relative flex-1 w-full bg-transparent flex flex-col justify-between overflow-hidden text-white p-6">
			<Header
				onBack={screenIndex > 0 && screenIndex < 5 ? handleBack : undefined}
			/>

			<main className="flex-1 flex flex-col justify-center py-4 overflow-y-auto no-scrollbar">
				{screenIndex === 0 && (
					<UsernameScreen username={username} setUsername={setUsername} />
				)}
				{screenIndex === 1 && <WelcomeScreen username={username} />}
				{screenIndex === 2 && <HowItWorksScreen />}
				{screenIndex === 3 && <ScanToSellScreen />}
				{screenIndex === 4 && <BuyingAndBiddingScreen />}
				{screenIndex === 5 && <AllSetScreen />}
			</main>

			<footer className="w-full flex flex-col items-center gap-6 pb-2">
				{screenIndex === 5 ? (
					<div className="w-full flex flex-col gap-3">
						<Button variant="primary">Browse Cards</Button>
						<Button variant="secondary">List Your First Card</Button>
					</div>
				) : (
					<Button
						variant="primary"
						onClick={handleNext}
						disabled={screenIndex === 0 && !username.trim()}
					>
						{screenIndex === 0
							? "Set Username"
							: screenIndex === 1
								? "Get Started"
								: "Next"}
					</Button>
				)}

				<div className="flex items-center justify-between w-full border-t border-neutral-900/60 pt-4 px-2">
					<span className="text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase select-none">
						{screenIndex + 1} OF 6
					</span>
					<div className="flex gap-2">
						{[0, 1, 2, 3, 4, 5].map((index) => (
							<button
								key={index}
								onClick={() => {
									if (index < screenIndex) {
										setScreenIndex(index);
									}
								}}
								className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
									index === screenIndex
										? "bg-primary w-6"
										: index < screenIndex
											? "bg-neutral-600 w-2 hover:bg-neutral-500"
											: "bg-neutral-800 w-2"
								}`}
							/>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
}
