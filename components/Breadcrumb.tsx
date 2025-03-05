"use client"
import {
	Breadcrumb as ShadBreadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import links from "@/content/links"
import projects from "@/content/projects"
import { capitalizeFirstLetter } from "@/lib/utils"
import Link from "next/link"

import { usePathname } from "next/navigation"
import { Fragment } from "react"

export default function Breadcrumb() {
	const getBreadcrumbTitleForPath = (path: string) => {
		const link = links.filter((link) => link.url === `/${path}`)[0]
		const project = projects.filter((project) => project.key === path)[0]

		if (project) return project.title
		if (link) return link.text

		return path
	}

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
									{index === paths.length - 1 ? (
										<span className="text-white">
											{capitalizeFirstLetter(
												getBreadcrumbTitleForPath(path),
											)}
										</span>
									) : (
										<Link href={`/${path}`}>
											{capitalizeFirstLetter(
												getBreadcrumbTitleForPath(path),
											)}
										</Link>
									)}
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
