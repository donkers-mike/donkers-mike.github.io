import Education from "@/components/about/Education"
import GithubProfiles from "@/components/about/GithubProfiles"
import Hobbies from "@/components/about/Hobbies"
import Personalia from "@/components/about/Personalia"
import Image from "next/image"

export default function Home() {
	return (
		<main className="w-full mx-auto xl:w-5/6 2xl:w-2/3">
			<div className="headline flex w-full mx-auto md:w-8/12 gap-15 items-center py-10">
				<div className="w-1/3 flex justify-end">
					<div className="w-48">
						<Image
							src="/mugshot.jpg"
							alt="Picture of Mike Donkers"
							width="0"
							height="0"
							sizes="100vw"
							className="rounded-full"
							style={{ width: "100%", height: "auto" }}
						/>
					</div>
				</div>
				<div className="w-1/2">
					<h1 className="h-fit scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
						Mike Donkers
					</h1>
					<p>
						Passionate frontend developer with a permanent goal of
						making life easier for both programmers and users
					</p>
				</div>
			</div>
			<div className="grid grid-flow-row xl:grid-flow-col gap-4">
				<Personalia />
				<Education />
				<Hobbies />
			</div>
			<div className="flex w-full pt-4">
				<GithubProfiles />
			</div>
		</main>
	)
}
