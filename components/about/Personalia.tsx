import {
	IconCalendarEvent,
	IconFriends,
	IconMapPin,
	IconMapPinHeart,
} from "@tabler/icons-react"
import { PersonalInfoItem } from "./types"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import Link from "next/link"

export default function Personalia() {
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
	return (
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
	)
}
