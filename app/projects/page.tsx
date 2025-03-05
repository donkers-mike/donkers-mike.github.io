import { AspectRatio } from "@/components/ui/aspect-ratio"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import projects from "@/content/projects"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Projects",
	description: "Noteworthy projects I've had a substantial role in",
}
export default function Projects() {
	return (
		<main className="w-full mx-auto xl:w-1/2 mb-14">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="h-fit scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Noteworthy projects
				</h1>
				<p className="text-muted-foreground">
					Below you'll find some projects I have done a substantial
					amount of work for in the past.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
				{projects.map((project) => {
					return (
						<Card key={project.key}>
							<CardHeader>
								<CardTitle>{project.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<AspectRatio ratio={16 / 9}>
									<Image
										src={project.preview}
										priority
										alt={project.title}
										className="rounded-md object-cover"
										sizes="(min-width: 808px) 50vw, 100vw"
										fill
									/>
								</AspectRatio>
								{project.intro && (
									<p className="text-muted-foreground mt-2">
										{project.intro}
									</p>
								)}
								<Link
									className={cn(
										"hover:cursor-pointer w-fit float-right mt-2",
										buttonVariants({
											variant: "secondary",
										}),
									)}
									href={`/projects/${project.key}`}
								>
									Read more
								</Link>
							</CardContent>
						</Card>
					)
				})}
			</div>
		</main>
	)
}
