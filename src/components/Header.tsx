import { CaretLeftIcon, ShareNetworkIcon } from "@phosphor-icons/react";
import Button from "./Button";

export default function Header({ onBack }: { onBack?: () => void }) {
	return (
		<div className="flex items-center justify-between w-full h-12">
			<div className="w-10">
				{onBack && (
					<Button variant="icon" onClick={onBack}>
						<CaretLeftIcon size={22} />
					</Button>
				)}
			</div>
			<span className="text-xl font-extrabold tracking-widest font-mono text-white select-none">
				MISPRINT
			</span>
			<Button variant="icon">
				<ShareNetworkIcon size={22} />
			</Button>
		</div>
	);
}
