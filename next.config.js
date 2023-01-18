// const SUB_DIRECTORY = '/github-actions-sample'
const SUB_DIRECTORY = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: SUB_DIRECTORY,
  basePath: SUB_DIRECTORY,
  trailingSlash: true
}
