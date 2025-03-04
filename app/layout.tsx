import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Image from "next/image"
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
		<html lang="en" className={`dark ${inter.className}`}>
			<body className="min-h-full p-2 mb-14">
				<div className="w-full p-3 justify-center flex">
					<Image
						src="/logo.svg"
						width="100"
						height="100"
						alt="logo"
					/>
				</div>
				{children}
				<Navbar />
			</body>
		</html>
	)
}
