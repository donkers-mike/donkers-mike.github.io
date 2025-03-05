import { Metadata } from "next"
type Props = {
	params: Promise<{ company: string }>
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { company } = await params
	return {
		title:
			"Work experience at " +
			String(company).charAt(0).toUpperCase() +
			String(company).slice(1),
	}
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ company: string }>
}) {
	const { company } = await params
	const { default: ProjectMdx } = await import(
		`@/content/experiences/${company}.mdx`
	)
	return (
		<div className="w-full md:w-1/2 mx-auto">
			<ProjectMdx />
		</div>
	)
}

export function generateStaticParams() {
	return [{ company: "debitroom" }]
}
