import Link from "next/link"
import React, { ComponentPropsWithoutRef } from "react"
import { highlight } from "sugar-high"

type HeadingProps = ComponentPropsWithoutRef<"h1">
type ParagraphProps = ComponentPropsWithoutRef<"p">
type ListProps = ComponentPropsWithoutRef<"ul">
type ListItemProps = ComponentPropsWithoutRef<"li">
type AnchorProps = ComponentPropsWithoutRef<"a">
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">
type ThematicBreakProps = ComponentPropsWithoutRef<"hr">

const components = {
	h1: (props: HeadingProps) => (
		<h1
			className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-2"
			{...props}
		/>
	),
	h2: (props: HeadingProps) => (
		<h2
			className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
			{...props}
		/>
	),
	h3: (props: HeadingProps) => (
		<h3
			className="scroll-m-20 text-2xl font-semibold tracking-tight"
			{...props}
		/>
	),
	h4: (props: HeadingProps) => (
		<h4
			className="scroll-m-20 text-xl font-semibold tracking-tight"
			{...props}
		/>
	),
	h6: (props: HeadingProps) => (
		<h6
			className="scroll-m-20 text-lg font-semibold tracking-tight flex gap-2 items-center"
			{...props}
		/>
	),
	p: (props: ParagraphProps) => (
		<p className="leading-7 text-muted-foreground" {...props} />
	),
	ol: (props: ListProps) => (
		<ol
			className="text-gray-800 dark:text-zinc-300 list-decimal pl-5 space-y-2"
			{...props}
		/>
	),
	ul: (props: ListProps) => (
		<ul
			className="ml-6 list-disc text-muted-foreground [&>li]:mt-2"
			{...props}
		/>
	),
	li: (props: ListItemProps) => <li className="pl-1" {...props} />,
	em: (props: ComponentPropsWithoutRef<"em">) => (
		<em className="font-medium" {...props} />
	),
	strong: (props: ComponentPropsWithoutRef<"strong">) => (
		<strong className="font-medium" {...props} />
	),
	a: ({ href, children, ...props }: AnchorProps) => {
		if (href?.startsWith("/")) {
			return (
				<Link
					href={href}
					className="text-white hover:underline"
					{...props}
				>
					{children}
				</Link>
			)
		}
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-white hover:underline"
				{...props}
			>
				{children}
			</a>
		)
	},
	code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
		const codeHTML = highlight(children as string)
		return (
			<code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
		)
	},
	Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
		<div className="my-6 w-full overflow-y-auto">
			<table className="w-full">
				<thead>
					<tr className="m-0 border-t p-0 even:bg-muted">
						{data.headers.map((header, index) => (
							<th
								className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
								key={index}
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.rows.map((row, index) => (
						<tr
							className="m-0 border-t p-0 even:bg-muted"
							key={index}
						>
							{row.map((cell, cellIndex) => (
								<td
									className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
									key={cellIndex}
								>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	),
	blockquote: (props: BlockquoteProps) => (
		<blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
	),
	hr: (props: ThematicBreakProps) => <hr className="my-4" {...props} />,
}

declare global {
	type MDXProvidedComponents = typeof components
}

export function useMDXComponents(): MDXProvidedComponents {
	return components
}
