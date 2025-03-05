import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Read detailed posts about things I either find interesting, or that I write about myself and my life",
}
export default function Projects() {
	return (
		<main className="w-full mx-auto xl:w-1/2 mb-14">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="h-fit scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					My blog
				</h1>
				<p className="text-muted-foreground">
					Read detailed posts about things I either find interesting,
					or write about me
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"></div>
		</main>
	)
}
