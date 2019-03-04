module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      {
        text: 'More',
        items: [
          { text: 'Twitter', link: 'https://twitter.com/' },
          { text: 'GitHub', link: 'https://github.com/' },
          { text: 'Dribbble', link: 'https://dribbble.com/' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Blog',
        children: ['/blog/']
      }
    ]
  }
};
