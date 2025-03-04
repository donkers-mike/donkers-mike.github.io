"use client"
import Link from "next/link"

import links from "@/content/links"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Navbar() {
	const pathname = usePathname()
	return (
		<nav className="fixed bottom-0 left-0 right-0 z-50 h-14 w-full  bg-background">
			<div className="w-full lg:w-1/2 lg:mx-auto my-2 flex items-center justify-around">
				{links.map((link) => (
					<Link
						key={link.url}
						href={link.url}
						className={cn(
							"flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-gray-50 focus:text-gray-50",
							pathname.includes(link.url) &&
								link.url !== "/" &&
								"text-gray-50",
							pathname === "/" &&
								link.url === "/" &&
								"text-gray-50",
						)}
					>
						<link.icon className="h-6 w-6" />
						<span className="text-xs">{link.text}</span>
					</Link>
				))}
			</div>
		</nav>
	)
}
