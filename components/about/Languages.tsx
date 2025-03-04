"use client"

import { cifDe, cifGb, cifNl } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import { Progress } from "@/components/ui/progress"

export default function Languages() {
	return (
		<span className="block mt-4">
			<h3>Languages I speak</h3>
			<div className="grid auto-cols-fr grid-flow-col items-center">
				<div className="flex gap-2">
					<CIcon icon={cifNl} className="w-6 h-6" /> Dutch
				</div>
				<Progress className="w-full" value={100} />
			</div>
			<div className="grid auto-cols-fr grid-flow-col items-center">
				<div className="flex gap-2">
					<CIcon icon={cifGb} className="w-6 h-6" /> English
				</div>
				<Progress className="w-full" value={100} />
			</div>
			<div className="grid auto-cols-fr grid-flow-col items-center">
				<div className="flex gap-2">
					<CIcon icon={cifDe} className="w-6 h-6" /> German
				</div>
				<Progress className="w-full" value={60} />
			</div>
		</span>
	)
}
