export default {
    lang: 'en-US',
    base: '/ted-notes/',
    srcDir: './src',
    outDir: './dist',
    title: 'TED Notes',
    description: 'Lessons worth sharing!',

    themeConfig: {
        nav: [
            {
              text: 'Elementary',
              activeMatch: `^/elementary/`,
              link: '/elementary/001'
            },
            {
              text: 'Middle School',
              activeMatch: `^/middle/`,
              link: '/middle/'
            },
            {
              text: 'High School',
              activeMatch: `^/hight/`,
              link: '/hight/'
            },
            {
              text: 'College',
              activeMatch: `^/college/`,
              link: '/college/'
            },
        ],
        sidebar: {
            '/elementary/': [
                {
                  text: 'Week 1',
                  items: [
                    { text: 'Can you solve the fortress riddle?', link: '/elementary/001' },
                    { text: 'Can you ?', link: '/elementary/002' },
                  ]
                }
            ]
        }
    }
}