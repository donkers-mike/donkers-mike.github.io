import projects from "@/content/projects"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import { redirect } from "next/navigation"
type Props = {
	params: Promise<{ project: string }>
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { project } = await params
	const project_data = projects.filter((p) => p.key === project)[0]
	return {
		title: "Project " + project_data.title,
		description: project_data.intro,
	}
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ project: string }>
}) {
	const { project } = await params
	const ProjectMdx = dynamic(() =>
		import(`@/content/projects/${project}.mdx`).catch(() => {
			redirect("/not-found")
		}),
	)
	return (
		<div className="w-full md:w-1/2 mx-auto mb-14">
			<ProjectMdx />
		</div>
	)
}

export function generateStaticParams() {
	return [
		{ project: "crownstudent" },
		{ project: "stultiens" },
		{ project: "ucw" },
		{ project: "react-migration" },
		{ project: "dotnet-to-react" },
		{ project: "vvv-storelocator" },
	]
}
