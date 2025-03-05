import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(string: string) {
	return String(string).charAt(0).toUpperCase() + String(string).slice(1)
}
