import type { NextConfig } from "next"
import createMDX from "@next/mdx"
const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	basePath: process.env.PAGES_BASE_PATH,
}

const withMDX = createMDX({
	// Add markdown plugins here, as desired
})

export default withMDX(nextConfig)
