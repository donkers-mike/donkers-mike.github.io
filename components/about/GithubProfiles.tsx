import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { IconBrandGithub } from "@tabler/icons-react"
import SocialButton from "../SocialButton"
import { Repositories } from "./Repositories"

export default function GithubProfiles() {
	return (
		<div className="flex flex-col">
			<h1 className="text-2xl text-white my-2">
				I have two separate GitHub accounts
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Card>
					<CardContent className="flex h-full">
						<div className="flex flex-col justify-between">
							<span className="text-muted-foreground">
								One which I use for professional things such as
								this very site, or for when companies need me to
								complete coding challenges etc...
							</span>
							<SocialButton
								className="mt-2 w-fit self-end"
								text="View my professional Github"
								icon={IconBrandGithub}
								href="https://github.com/donkers-mike"
							/>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<div className="flex flex-col">
							<span className="text-muted-foreground">
								Another which I use for personal things, mostly
								Lua coding for World of Warcraft AddOns. Here I
								go by the handle "Mythi Inaro"
							</span>
							<Repositories
								repositories={[
									{
										name: "TeleportMenu",
										url: "https://github.com/mythi-inaro/TeleportMenu",
									},
								]}
							/>
							<SocialButton
								className="mt-2 w-fit self-end"
								text="View my personal GitHub"
								icon={IconBrandGithub}
								href="https://github.com/mythi-inaro"
							/>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
