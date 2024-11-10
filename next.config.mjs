

// /** @type {import('next').NextConfig} */

// const nextConfig = {
//     eslint: {
//         ignoreDuringBuilds: true,
//     },
// /* ...Your other config rules */
// }

module.exports = nextConfig
module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }