const config: Config = {
  languages: ['zh-HK', 'ja'],
  refetchDuration: 600,
  apiTimeout: 5000,
  tier: [0, 1, 10, 20, 30, 50, 100],
  map: {
    defaultZoom: 11,
    markerZoom: 15,
    boundPadding: 0.1,
    language: 'zh-HK',
  },
  momentTimezone: 'Asia/Hong_Kong',
  disclaimer: {
    email: 'tszyanalau@gmail.com',
  },
}

export default config
