"use client"
import SocialButton from "@/components/SocialButton"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandMailgun,
} from "@tabler/icons-react"
import { MessageCircleDashed } from "lucide-react"
import Link from "next/link"

export default function Contact() {
	return (
		<main className="w-full mx-auto md:w-1/2">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="h-fit scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Contact me
				</h1>
				<p>I look forward to hearing from you!</p>
			</div>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-8">
				<Card>
					<CardHeader>
						<CardTitle>Send me an email!</CardTitle>
					</CardHeader>
					<CardContent className="h-full flex justify-between flex-col">
						<div>
							<p className="text-muted-foreground">
								Please include following in the email:
							</p>
							<ul className="list-disc indent-2 ml-6 text-muted-foreground">
								<li>Your information name and organisation</li>
								<li>Your contact information</li>
								<li>Reason for contact</li>
							</ul>
						</div>
						<Link
							className={cn(
								"hover:cursor-pointer w-fit self-end mt-2",
								buttonVariants({ variant: "secondary" }),
							)}
							href="mailto:donkers.mbj@proton.me?subject=Request for contact on Mike Donkers' Portfolio&body=Please include following in the email:%0D%0A - Your information name and organisation (if applicable)%0D%0A - Your contact information%0D%0A - Reason for contact"
						>
							<IconBrandMailgun className="mr-2" /> Email me
						</Link>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>My socials</CardTitle>
					</CardHeader>
					<CardContent>
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
					</CardContent>
				</Card>
			</div>
		</main>
	)
}
