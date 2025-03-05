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
	{
		company: {
			name: "DigitPaint",
			location: "Arnhem",
			logo: "/digitpaint-logo.png",
		},
		period: {
			start: new Date(Date.UTC(2022, 10)),
			end: new Date(Date.UTC(2023, 8)),
		},
		title: "Frontend Developer",
	},
	{
		company: {
			name: "YoungOnes",
			location: "Breda",
			logo: "",
		},
		period: {
			start: new Date(Date.UTC(2022, 3)),
			end: new Date(Date.UTC(2022, 10)),
		},
		title: "Frontend Developer",
	},
	{
		company: {
			name: "WeProvide",
			location: "Eindhoven",
			logo: "",
		},
		period: {
			start: new Date(Date.UTC(2021, 3)),
			end: new Date(Date.UTC(2022, 3)),
		},
		title: "Interactive Developer",
	},
	{
		company: {
			name: "ChainPoint",
			location: "Arnhem",
			logo: "",
		},
		period: {
			start: new Date(Date.UTC(2020, 6)),
			end: new Date(Date.UTC(2021, 3)),
		},
		title: "Frontend Developer",
	},
	{
		company: {
			name: "Proud Nerds",
			location: "Nijmegen",
			logo: "",
		},
		period: {
			start: new Date(Date.UTC(2018, 7)),
			end: new Date(Date.UTC(2020, 6)),
		},
		title: "Magento Frontend Developer",
	},
]

export default workexperiences
