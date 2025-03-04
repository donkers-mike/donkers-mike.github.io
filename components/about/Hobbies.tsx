import { IconBuildingBank, IconCode, IconTrekking } from "@tabler/icons-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { PersonalInfoItem } from "./types"

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

export default function Hobbies() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Hobbies</CardTitle>
			</CardHeader>
			<CardContent>
				{hobbies.map((hobby) => (
					<span key={hobby.key} className="flex">
						<hobby.icon className="mr-2" />
						<div className="w-full justify-between">
							<strong>{hobby.title} </strong>
							<br />
							<span className="text-muted-foreground">
								{hobby.text}
							</span>
						</div>
					</span>
				))}
			</CardContent>
		</Card>
	)
}
