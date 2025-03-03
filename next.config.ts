import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	output: "export",
	basePath: process.env.PAGES_BASE_PATH,
	images: { unoptimized: true },
}

const withMDX = createMDX({
	// Add markdown plugins here, as desired
})

export default withMDX(nextConfig)
