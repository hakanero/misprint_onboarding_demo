import {
	BookOpenTextIcon,
	CameraIcon,
	MagnifyingGlassIcon,
	UserIcon,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";

export default function NavBar() {
	const iconClasses = "";
	return (
		<div className="self-end w-full bg-bg-primary h-20 flex items-center justify-around">
			<NavButton
				icon={<MagnifyingGlassIcon size={30} className={iconClasses} />}
				label="Search"
				isActive={false}
				onClick={() => {}}
			/>
			<NavButton
				icon={<CameraIcon size={30} className={iconClasses} />}
				label="Scan"
				isActive={false}
				onClick={() => {}}
			/>
			<NavButton
				icon={<img src={`icon.png`} className="w-10 h-10" />}
				label="Home"
				isActive={true}
				onClick={() => {}}
			/>
			<NavButton
				icon={<BookOpenTextIcon size={30} className={iconClasses} />}
				label="Collection"
				isActive={false}
				onClick={() => {}}
			/>
			<NavButton
				icon={<UserIcon size={30} className={iconClasses} />}
				label="Account"
				isActive={false}
				onClick={() => {}}
			/>
		</div>
	);
}

export function NavButton({
	icon,
	label,
	isActive,
	onClick,
}: {
	icon: ReactNode;
	label: string;
	isActive: boolean;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={`flex flex-col items-center ${isActive ? "text-gray-300" : "text-gray-600"}`}
		>
			<span className={isActive ? "text-3xl" : "h-7"}>{icon}</span>
			<span className="text-xs">{label}</span>
		</button>
	);
}
