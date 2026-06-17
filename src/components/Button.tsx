import type { ReactNode } from "react";

export default function Button({
	variant = "primary",
	onClick,
	children,
	className = "",
	disabled = false,
}: {
	variant?: "primary" | "secondary" | "icon";
	onClick?: () => void;
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
}) {
	const baseStyle =
		"transition-all flex items-center justify-center font-bold text-sm text-center";
	let variantStyle = "";

	if (variant === "primary") {
		variantStyle =
			"w-full bg-primary hover:bg-primary/90 text-white py-3.5 px-6";
	} else if (variant === "secondary") {
		variantStyle =
			"w-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white py-3.5 px-6";
	} else if (variant === "icon") {
		variantStyle =
			"w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800";
	}

	const stateStyle = disabled
		? "opacity-40 cursor-not-allowed select-none"
		: "active:scale-95 cursor-pointer";

	return (
		<button
			onClick={!disabled ? onClick : undefined}
			disabled={disabled}
			className={`${baseStyle} ${variantStyle} ${stateStyle} ${className}`}
		>
			{children}
		</button>
	);
}

