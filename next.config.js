/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            memo: true,
            svgoConfig: {
              multipass: true,
              plugins: [
                { removeViewBox: false },
                { removeUselessStrokeAndFill: true },
              ],
            },
          },
        },
      ],
    })

    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
