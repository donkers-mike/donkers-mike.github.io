import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import Link from "next/link"
import { ScrollToTop } from "@/components/ScrollToTop"
import { ArrowUpToLine } from "lucide-react"
import logo from "@/public/logo.svg"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: {
		default: "Mike Donkers",
		template: "%s | Mike Donkers",
	},
	description: "Frontend developer with a passion for coding.",
}
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className={`dark ${inter.className}`}
			style={{ scrollBehavior: "smooth" }}
		>
			<Analytics />
			<body className="min-h-full p-2 mb-15">
				<div className="w-full p-3 justify-center flex">
					<Link href="/" className="w-28">
						<Image src={logo} alt="logo" priority />
					</Link>
				</div>
				<div className="w-full mx-auto md:w-1/2 my-2 flex gap-4 items-center">
					<Breadcrumb />
				</div>
				{children}
				<ScrollToTop
					minHeight={20}
					scrollTo={10}
					className="fixed right-4 bottom-20 hover:cursor-pointer"
				>
					<ArrowUpToLine />
				</ScrollToTop>
				<Navbar />
			</body>
		</html>
	)
}
