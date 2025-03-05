import { redirect } from "next/navigation"
import { Metadata } from "next"
import dynamic from "next/dynamic"
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

export default async function WorkExperiencePage({
	params,
}: {
	params: Promise<{ company: string }>
}) {
	const { company } = await params
	console.log(company)
	const ProjectMdx = dynamic(() =>
		import(`@/content/experiences/${company}.mdx`).catch(() => {
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
		{ company: "debitroom" },
		{ company: "youngones" },
		{ company: "chainpoint" },
		{ company: "weprovide" },
		{ company: "proudnerds" },
		{ company: "digitpaint" },
	]
}
