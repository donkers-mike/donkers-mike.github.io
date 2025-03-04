"use client"
import {
	Breadcrumb as ShadBreadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

import { usePathname } from "next/navigation"
import { Fragment } from "react"

export default function Breadcrumb() {
	const pathname = usePathname()
	const paths = pathname.split("/").filter(Boolean)
	return (
		<ShadBreadcrumb>
			<BreadcrumbList>
				{pathname !== "/" && (
					<>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/">Home</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						{paths.length >= 1 && <BreadcrumbSeparator />}
					</>
				)}

				{paths.map((path, index) => {
					return (
						<Fragment key={index}>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link
										href={`/${path}`}
										className="capitalize"
									>
										{path}
									</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							{paths.length !== index + 1 && (
								<BreadcrumbSeparator />
							)}
						</Fragment>
					)
				})}
			</BreadcrumbList>
		</ShadBreadcrumb>
	)
}
