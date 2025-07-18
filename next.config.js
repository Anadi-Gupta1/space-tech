/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML export
  images: {
    unoptimized: true, // Netlify handles image optimization
  },
  // Ensure trailing slashes for Netlify's pretty URLs
  trailingSlash: true
}

module.exports = nextConfig
