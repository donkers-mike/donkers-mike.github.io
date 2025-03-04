import { Metadata } from "next"
type Props = {
	params: Promise<{ project: string }>
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { project } = await params
	return {
		title:
			"Project " +
			String(project).charAt(0).toUpperCase() +
			String(project).slice(1),
	}
}
export default async function ProjectPage({
	params,
}: {
	params: Promise<{ project: string }>
}) {
	const { project } = await params
	const { default: ProjectMdx } = await import(
		`@/content/projects/${project}.mdx`
	)
	return (
		<div className="w-full md:w-1/2 mx-auto">
			<ProjectMdx />
		</div>
	)
}

export function generateStaticParams() {
	return [
		{ project: "crownstudent" },
		{ project: "stultiens" },
		{ project: "ucw" },
	]
}
