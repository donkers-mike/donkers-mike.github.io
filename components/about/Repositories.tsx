"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { IconBook2, IconExternalLink } from "@tabler/icons-react"
import Link from "next/link"

type Repository = {
	name: string
	url: string
}

export function Repositories({ repositories }: { repositories: Repository[] }) {
	const [isOpen, setIsOpen] = React.useState(true)

	return (
		<Collapsible
			open={isOpen}
			onOpenChange={setIsOpen}
			className="w-full space-y-2 my-2"
		>
			<div className="flex items-center justify-between space-x-4 px-4">
				<h4 className="text-sm font-semibold">Notable Repositories</h4>
				<CollapsibleTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						className="hover:cursor-pointer"
					>
						<ChevronsUpDown className="h-4 w-4" />
						<span className="sr-only">Toggle</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent className="space-y-2">
				{repositories.map((repository) => (
					<Link
						key={repository.url}
						href={repository.url}
						target="_blank"
					>
						<div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm flex gap-2 items-center">
							<IconBook2 />
							{repository.name}
							<IconExternalLink className="h-4 w-4 -mt-3" />
						</div>
					</Link>
				))}
			</CollapsibleContent>
		</Collapsible>
	)
}
