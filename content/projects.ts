import { StaticImageData } from "next/image"
import CrownStudent from "@/public/crownstudent.png"
import Stultiens from "@/public/stultiens.png"
import ucw from "@/public/ucw.png"
import ReactMigration from "@/public/react-migration.png"
import DotnetToReact from "@/public/dotnet-to-react.png"
import VVVStoreLocator from "@/public/vvv-storelocator.png"

export type NoteworthyProjects = {
	key: string
	title: string
	intro: string
	preview: string | StaticImageData
}

const projects: NoteworthyProjects[] = [
	{
		key: "crownstudent",
		title: "Crownstudent configurator",
		intro: "A custom configurator built in React which was connected to multiple back-end systems (Magento, WordPress and a custom API)",
		preview: CrownStudent,
	},
	{
		key: "stultiens",
		title: "Stultiens nameplate configurator",
		intro: "A custom configurator built in NextJS to custom-build your own nameplate to, for example, place on your home.",
		preview: Stultiens,
	},
	{
		key: "ucw",
		title: "UwCartridgeWinkel",
		intro: "A Dutch webshop focusing on ink cartridges, toners, (photo) paper and office supplies.",
		preview: ucw,
	},
	{
		key: "react-migration",
		title: "React 15 to React 18 Migration",
		intro: "The migration of a full, in-use project from React 15 to React 18",
		preview: ReactMigration,
	},
	{
		key: "dotnet-to-react",
		title: "Migration of .NET to React",
		intro: "The migration of a ~20 year old monolith to React",
		preview: DotnetToReact,
	},
	{
		key: "vvv-storelocator",
		title: "VVV Storelocator",
		intro: "A Vue application to allow people that have a VVV Giftcard to quickly and easily find where they can use them",
		preview: VVVStoreLocator,
	},
]

export default projects
