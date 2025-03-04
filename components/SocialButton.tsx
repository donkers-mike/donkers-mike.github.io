import { cn } from "@/lib/utils"
import { TablerIcon } from "@tabler/icons-react"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

export type SocialButtonProps = {
	text: string
	icon: TablerIcon | LucideIcon
	href: string
	className?: string
}

const SocialButton = (props: SocialButtonProps) => (
	<Link
		className={cn(
			"hover:cursor-pointer w-full",
			props.className,
			buttonVariants({ variant: "secondary" }),
		)}
		target="_blank"
		href={props.href}
	>
		<props.icon className="mr-2" /> {props.text}
	</Link>
)

export default SocialButton
