import Link from "next/link"

import links from "@/content/links"

export default function Navbar() {
	return (
		<nav className="fixed bottom-0 left-0 right-0 z-50 flex h-14 w-full items-center justify-around md:w-1/2 md:mx-auto p-4 bg-background">
			{links.map((link) => (
				<Link
					key={link.url}
					href={link.url}
					className="flex flex-col items-center justify-center gap-1 text-gray-500 transition-colors hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 dark:focus:text-gray-50"
					prefetch={false}
				>
					<link.icon className="h-6 w-6" />
					<span className="text-xs">{link.text}</span>
				</Link>
			))}
		</nav>
	)
}
