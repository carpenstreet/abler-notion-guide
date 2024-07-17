// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },

  async redirects() {
    return [
      {
        source: '/:slug*',
        destination: 'https://guide.v1.ablur.studio/:slug*',
        has: [
          {
            type: 'host',
            value: 'guide.abler.world'
          }
        ],
        permanent: false
      },
      {
        source: '/',
        destination: 'https://ablur.studio/guide',
        has: [
          {
            type: 'host',
            value: 'v2-guide.abler.world'
          }
        ],
        permanent: false
      },
      {
        source: '/how-to-login',
        destination:
          'https://ablur.studio/faq/?q=YToyOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjtzOjQ6InBhZ2UiO2k6MTt9&bmode=view&idx=38357651&t=board',
        has: [
          {
            type: 'host',
            value: 'v2-guide.abler.world'
          }
        ],
        permanent: false
      }
    ]
  }
})
