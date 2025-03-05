import { Separator } from "@/components/ui/separator"
import Workexperience from "@/components/Workexperience"
import workexperiences from "@/content/work-experience"

export default function WorkExperience() {
	return (
		<main className="w-full mx-auto md:w-1/3 mb-14">
			<div className="flex flex-col items-center justify-center gap-4 mb-8">
				<h1 className="h-fit scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Work experience
				</h1>
				<p className="text-muted-foreground">My career path</p>
			</div>
			{workexperiences.map((experience, index) => (
				<>
					<Workexperience experience={experience} />
					{index < workexperiences.length - 1 && (
						<div className="h-8 flex items-center justify-center my-2">
							<Separator orientation="vertical" className="h-8" />
						</div>
					)}
				</>
			))}
		</main>
	)
}
