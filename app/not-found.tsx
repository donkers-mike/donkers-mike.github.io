import Image from "next/image"
import Link from "next/link"
import NotFoundImage from "@/public/404.svg"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
	return (
		<main className="w-full mx-auto md:w-1/2 mb-14">
			<div className="flex flex-col items-center justify-center gap-4 mb-8">
				<h1 className="h-fit scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Woops
				</h1>
				<span className="text-muted-foreground">
					I can't find that resource
				</span>
				<Image src={NotFoundImage} alt="Not found image" />
				<Link
					href="/"
					className={cn(buttonVariants({ variant: "outline" }))}
				>
					Return Home
				</Link>
			</div>
		</main>
	)
}
