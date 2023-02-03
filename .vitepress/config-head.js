export default [
    [
        'link',
        {
            rel: 'icon',
            href: 'https://pa.tedcdn.com/favicon.ico',
        },
    ],
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
        `,
    ],
]
