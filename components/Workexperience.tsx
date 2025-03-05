import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { WorkExperience } from "@/content/work-experience"
import { Fragment } from "react"
import { IconMapPin } from "@tabler/icons-react"
import { Avatar, AvatarImage } from "./ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"
import DebitroomLogo from "@/public/company_logos/debitroom-logo.svg"
import DigitpaintLogo from "@/public/company_logos/digitpaint-logo.png"
import YoungonesLogo from "@/public/company_logos/youngones.svg"
import WeprovideLogo from "@/public/company_logos/weprovide-logo.png"
import ChainpointLogo from "@/public/company_logos/chainpoint-logo.png"
import ProudnerdsLogo from "@/public/company_logos/proudnerds.svg"

export default function Workexperience({
	experience,
}: {
	experience: WorkExperience
}) {
	const companyLogos: { [name: string]: StaticImageData } = {
		debitroom: DebitroomLogo,
		digitpaint: DigitpaintLogo,
		youngones: YoungonesLogo,
		weprovide: WeprovideLogo,
		chainpoint: ChainpointLogo,
		"proud nerds": ProudnerdsLogo,
	}
	return (
		<div
			className="flex space-x-4 border bg-card rounded-md p-4 justify-between items-center"
			key={experience.company.name}
		>
			<div className="flex space-x-4">
				<div className="rounded-full flex items-center justify-center w-8 h-8">
					<Image
						src={
							companyLogos[experience.company.name.toLowerCase()]
						}
						alt={`${experience.company.name} logo`}
					/>
				</div>
				<div className="space-y-1">
					<h4 className="text-sm font-semibold">
						{experience.company.name}
					</h4>
					<p className="text-sm">{experience.title} </p>
					<div className="flex items-center pt-2">
						<CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
						<span className="text-xs text-muted-foreground capitalize">
							{experience.period.start.toLocaleDateString(
								"nl-NL",
								{
									year: "numeric",
									month: "long",
									day: undefined,
								},
							)}
							{" - "}
							{experience.period.end.toLocaleDateString("nl-NL", {
								year: "numeric",
								month: "long",
								day: undefined,
							})}
						</span>
					</div>
				</div>
			</div>
			<Link
				className={cn(
					"hover:cursor-pointer w-fit float-right mt-2",
					buttonVariants({
						variant: "secondary",
					}),
				)}
				href={`/work-experience/${experience.company.name.toLowerCase().split(" ").join("-")}`}
			>
				Read more
			</Link>
		</div>
	)
}
