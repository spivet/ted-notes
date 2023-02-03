export default {
    lang: 'en-US',
    base: '/ted-notes/',
    srcDir: './src',
    outDir: './dist',
    title: 'TED Notes',
    description: 'Lessons worth sharing!',
    head: [
      [
        'script',
        {},
        `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?d53b187ff570da628cb1150db22bc250";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        `
      ]
    ],

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
                    { text: 'The myth of the original star-crossed lovers', link: '/elementary/002' },
                    { text: 'How pigeons took over the world', link: '/elementary/003' },
                    { text: 'The myth of the moon goddess', link: '/elementary/004' },
                    { text: 'The myth of Anansi, the trickster spider', link: '/elementary/005' },
                  ]
                },
            ]
        }
    }
}