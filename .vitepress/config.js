export default {
    lang: 'en-US',
    srcDir: './src',
    outDir: './public',
    title: 'TED Notes',
    description: 'Lessons worth sharing!',

    themeConfig: {
        nav: [
            {
                text: 'TED-Ed',
                activeMatch: `^/(ted-ed)/`,
                items: [
                  { text: 'Elementary', link: '/ted-ed/elementary/001' },
                  { text: 'Tutorial', link: '/tutorial/' },
                  { text: 'Examples', link: '/examples/' },
                  { text: 'Quick Start', link: '/guide/quick-start' },
                ]
              },
              {
                text: 'API',
                activeMatch: `^/api/`,
                link: '/api/'
              },
        ],
        sidebar: {
            '/ted-ed/elementary/': [
                {
                  text: 'Week 1',
                  items: [
                    { text: 'Can you solve the fortress riddle?', link: '/ted-ed/elementary/001' },
                    { text: 'Can you ?', link: '/ted-ed/elementary/002' },
                  ]
                }
            ]
        }
    }
}