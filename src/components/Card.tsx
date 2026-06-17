import type { ReactNode } from "react";

export default function Card({
	children,
	className = "",
	onClick,
}: {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
}) {
	return (
		<div
			onClick={onClick}
			className={`bg-neutral-950/80 border border-neutral-900 rounded-2xl flex flex-col shadow-2xl ${className}`}
		>
			{children}
		</div>
	);
}
