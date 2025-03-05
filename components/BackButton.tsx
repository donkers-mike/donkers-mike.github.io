"use client"
import { usePathname, useRouter } from "next/navigation"

function BackButton({
	className,
	children,
}: React.PropsWithChildren<{
	className?: string
}>) {
	const router = useRouter()
	const pathname = usePathname()
	if (pathname === "/") return
	return (
		<a className={className} onClick={() => router.back()}>
			{children}
		</a>
	)
}

export default BackButton
