import Link from "next/link"
import { Card, CardContent, CardHeader } from "../ui/card"
import { IconBook2, IconBrandGithub } from "@tabler/icons-react"

export default function GithubProfiles() {
	return (
		<Card>
			<CardHeader>I have two separate GitHub accounts</CardHeader>
			<CardContent className="grid grid-flow-row md:grid-flow-col gap-4">
				<div className="flex flex-col justify-between">
					<span className="text-muted-foreground">
						One which I use for professional things such as this
						very site, or for when companies need me to complete
						coding challenges etc...
					</span>{" "}
					<Link
						href="https://github.com/donkers-mike"
						target="_blank"
						className="flex pt-2 self-end"
					>
						<IconBrandGithub className="mr-2" />
						View my GitHub profile here
					</Link>
				</div>
				<div className="flex flex-col">
					<span className="text-muted-foreground">
						Another which I use for personal things, mostly Lua
						coding for World of Warcraft AddOns. Here I go by the
						handle "Mythi Inaro"
					</span>
					<ul
						aria-label="Most notable repositories"
						className="before:content-[attr(aria-label)]"
					>
						<li>
							<Link
								href="https://github.com/mythi-inaro/TeleportMenu"
								target="_blank"
								className="flex ml-4"
							>
								<IconBook2 className="mr-2" /> TeleportMenu
							</Link>
						</li>
					</ul>

					<Link
						href="https://github.com/mythi-inaro"
						target="_blank"
						className="flex pt-2 self-end"
					>
						<IconBrandGithub className="mr-2" />
						View my GitHub profile here
					</Link>
				</div>
			</CardContent>
		</Card>
	)
}
