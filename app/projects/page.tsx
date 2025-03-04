import { AspectRatio } from "@/components/ui/aspect-ratio"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

type NoteworthyProjects = {
	key: string
	title: string
	intro: string
}

const projects: NoteworthyProjects[] = [
	{
		key: "crownstudent",
		title: "Crownstudent configurator",
		intro: "A custom configurator built in React which was connected to multiple back-end systems (Magento, WordPress and a custom API)",
	},
	{
		key: "stultiens",
		title: "Stultiens nameplate configurator",
		intro: "A custom configurator built in NextJS to custom-build your own nameplate to, for example, place on your home.",
	},
	{
		key: "ucw",
		title: "UwCartridgeWinkel",
		intro: "A Dutch webshop focusing on ink cartridges, toners, (photo) paper and office supplies.",
	},
]
export const metadata: Metadata = {
	title: "Projects",
	description: "Noteworthy projects I've had a substantial role in",
}
export default function Projects() {
	return (
		<main className="w-full mx-auto xl:w-1/2">
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
				{projects.map((project) => (
					<Card key={project.key}>
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<AspectRatio ratio={16 / 9}>
								<Image
									src={`/${project.key}.png`}
									priority
									alt={project.title}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className="rounded-md object-cover"
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
									buttonVariants({ variant: "secondary" }),
								)}
								href={`/projects/${project.key}`}
							>
								Read more
							</Link>
						</CardContent>
					</Card>
				))}
			</div>
		</main>
	)
}
