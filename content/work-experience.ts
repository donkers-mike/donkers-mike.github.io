type CompanyData = {
	name: string
	location: string
	logo: string
}

export interface WorkExperience {
	company: CompanyData
	period: {
		start: Date
		end: Date
	}
	title: string
}

const workexperiences: WorkExperience[] = [
	{
		company: {
			name: "DebitRoom",
			location: "Nieuwkuijk",
			logo: "/debitroom-logo.svg",
		},
		period: {
			start: new Date(Date.UTC(2023, 8)),
			end: new Date(Date.UTC(2024, 3)),
		},
		title: "JavaScript Developer",
	},
]

export default workexperiences
