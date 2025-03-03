import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
	IconBrandGithub,
	IconBuildingBank,
	IconCalendar,
	IconCalendarEvent,
	IconCode,
	IconFriends,
	IconMapPin,
	IconMapPinHeart,
	IconSchool,
	IconTrekking,
	TablerIcon,
} from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

const AboutMeListItem = (icon: React.ReactNode, text: string) => {
	return (
		<span className="flex">
			{icon}
			{text}
		</span>
	)
}

type PersonalInfoItem = {
	key: string
	title: string
	text: string
	icon: TablerIcon
	link?: string
}

export default function Home() {
	const personal_info: PersonalInfoItem[] = [
		{
			key: "dob",
			title: "Date of Birth",
			text: "17-07-1996",
			icon: IconCalendarEvent,
		},
		{
			key: "location",
			title: "Residence",
			text: "5351KD Berghem",
			link: "https://maps.app.goo.gl/Jo9UCSJRKXva64zd9",
			icon: IconMapPin,
		},
		{
			key: "place_of_birth",
			title: "Place of Birth",
			text: "'s-Hertogenbosch",
			link: "https://maps.app.goo.gl/PB7FLcsjzG1PYQ1c6",
			icon: IconMapPinHeart,
		},
		{
			key: "civil_status",
			title: "Civil status",
			text: "Living together",
			icon: IconFriends,
		},
	]

	const hobbies: PersonalInfoItem[] = [
		{
			key: "coding",
			title: "Programming",
			text: "Typescript, React, JavaScript and Lua",
			icon: IconCode,
		},
		{
			key: "hiking",
			title: "Hiking",
			text: "Mostly through nature, sometimes urban",
			icon: IconTrekking,
		},
		{
			key: "architecture",
			title: "Urban exploring",
			text: "I tend to enjoy the older architecture more than the modern one, but there can be beauty in the latter as well.",
			icon: IconBuildingBank,
		},
	]

	return (
		<main className="w-full mx-auto md:w-2/3">
			<div className="headline flex w-full mx-auto md:w-8/12 gap-15 items-center py-10">
				<div className="w-1/3 md:w-1/2 flex justify-end">
					<Image
						src="/mugshot.jpg"
						alt="Picture of Mike Donkers"
						width={200}
						height={200}
						priority
						className="rounded-full"
					/>
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
			<div className="grid grid-flow-row md:grid-flow-col gap-4">
				<Card>
					<CardHeader>
						<CardTitle>Details about me</CardTitle>
					</CardHeader>
					<CardContent>
						{personal_info.map((info) => (
							<span key={info.key} className="flex">
								<info.icon className="mr-2" />
								<div className="flex w-full justify-between">
									{info.link ? (
										<>
											<span>{info.title}: </span>
											<Link
												href={info.link}
												target="_blank"
												className="underline hover:text-slate-500 text-muted-foreground"
											>
												{info.text}
											</Link>
										</>
									) : (
										<>
											<span>{info.title}: </span>
											<span className="text-muted-foreground">
												{info.text}
											</span>
										</>
									)}
								</div>
							</span>
						))}
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Education</CardTitle>
					</CardHeader>
					<CardContent>
						<span className="flex">
							<IconSchool className="mr-2" /> Applicatie- en media
							ontwikkelaar
						</span>
						<span className="flex">
							<IconMapPin className="mr-2" />
							ROC de Leijgraaf, Veghel
						</span>
						<span className="flex">
							<IconCalendar className="mr-2" />
							Sept 2015 - Jan 2019
						</span>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Hobbies</CardTitle>
					</CardHeader>
					<CardContent>
						{hobbies.map((hobby) => (
							<span key={hobby.key} className="flex">
								<hobby.icon className="mr-2" />
								<div className="w-full justify-between">
									<strong>{hobby.title}: </strong>
									<br />
									<span className="text-muted-foreground">
										{hobby.text}
									</span>
								</div>
							</span>
						))}
					</CardContent>
				</Card>
			</div>
			<div className="flex w-full pt-4">
				<Card>
					<CardHeader>I have two separate GitHub accounts</CardHeader>
					<CardContent className="grid grid-flow-row md:grid-flow-col gap-4">
						<div>
							<span className="text-muted-foreground">
								One which I use for professional things such as
								this very site, or for when companies need me to
								complete coding challenges etc...
							</span>
							<Link
								href="https://github.com/donkers-mike"
								target="_blank"
								className="flex"
							>
								<IconBrandGithub className="mr-2" />
								View my GitHub profile here
							</Link>
						</div>
						<div>
							<span className="text-muted-foreground">
								Another which I use for personal things, mostly
								Lua coding for World of Warcraft AddOns. Here I
								go by the handle "Mythi Inaro"
							</span>
							<Link
								href="https://github.com/mythi-inaro"
								target="_blank"
								className="flex"
							>
								<IconBrandGithub className="mr-2" />
								View my GitHub profile here
							</Link>
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	)
}
