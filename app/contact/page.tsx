"use client"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
	IconBrandGithub,
	IconBrandGmail,
	IconBrandLinkedin,
	IconBrandMailgun,
	IconMail,
	TablerIcon,
} from "@tabler/icons-react"
import { LucideIcon, MessageCircleDashed } from "lucide-react"
import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"

type SocialButtonProps = {
	text: string
	icon: TablerIcon | LucideIcon
	href: Url
	className?: string
}

const SocialButton = (props: SocialButtonProps) => (
	<Link
		className={cn(
			"hover:cursor-pointer w-full",
			props.className,
			buttonVariants({ variant: "secondary" }),
		)}
		target="_blank"
		href={props.href}
	>
		<props.icon className="mr-2" /> {props.text}
	</Link>
)

export default function Contact() {
	return (
		<main className="w-full mx-auto md:w-1/2">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="h-fit scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Contact me
				</h1>
				<p>I look forward to hearing from you!</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
				<div className="border rounded-md shadow-md p-2 flex-col">
					<div className="h-full w-full flex flex-col justify-between">
						<h3 className="text-white text-lg font-bold">
							Email me
						</h3>
						<p className="text-muted-foreground">
							Please include following in the email:
						</p>
						<ul className="list-disc indent-2 ml-6 text-muted-foreground">
							<li>Your information name and organisation</li>
							<li>Your contact information</li>
							<li>Reason for contact</li>
						</ul>

						<a
							className="self-end"
							href="mailto:donkers.mbj@proton.me?subject=Request for contact on Mike Donkers' Portfolio&body=Please include following in the email:%0D%0A - Your information name and organisation (if applicable)%0D%0A - Your contact information%0D%0A - Reason for contact"
						>
							<Button
								variant="secondary"
								className="hover:cursor-pointer mt-2"
							>
								<IconBrandMailgun className="mr-2" /> Email me
							</Button>
						</a>
					</div>
				</div>
				<div className="border rounded-md shadow-md p-2 flex flex-col">
					<h3 className="text-white text-lg font-bold w-full col-span-3">
						Socials
					</h3>
					<div className="grid autp-rows-fr gap-4 mt-2">
						<SocialButton
							href="https://github.com/mythi-inaro"
							text="Personal GitHub"
							icon={IconBrandGithub}
						/>
						<SocialButton
							href="https://github.com/donkers-mike"
							text="Professional GitHub"
							icon={IconBrandGithub}
						/>
						<SocialButton
							href="https://www.linkedin.com/in/mike-donkers-560b5bb1/"
							text="Check out my LinkedIn"
							icon={IconBrandLinkedin}
						/>
						<SocialButton
							href="https://signal.me/#eu/8Ba9l0c_QW7Yj5gIhGKA1tNyeeOaQ2AibR3qSnTqnk2HRLnpbwRP_5X-mRkZdfnM"
							text="Message me on Signal"
							icon={MessageCircleDashed}
						/>
					</div>
				</div>
			</div>
		</main>
	)
}
