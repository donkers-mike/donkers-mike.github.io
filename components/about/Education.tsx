import { IconCalendar, IconMapPin, IconSchool } from "@tabler/icons-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export default function Education() {
	return (
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
	)
}
