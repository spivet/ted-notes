export default {
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
                { text: 'The myth of the original star-crossed lovers', link: '/elementary/002' },
                { text: 'How pigeons took over the world', link: '/elementary/003' },
                { text: 'The myth of the moon goddess', link: '/elementary/004' },
                { text: 'The myth of Anansi, the trickster spider', link: '/elementary/005' },
              ]
            },
        ]
    },
}
