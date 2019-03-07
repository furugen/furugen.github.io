const fs = require('fs');
const path = require('path');

var dirpath = './src/blog';
var dirs = fs.readdirSync(dirpath).filter(f => {
  return (
    fs.existsSync(dirpath + '/' + f) &&
    fs.statSync(dirpath + '/' + f).isDirectory()
  );
});
var sidebarArray = ['/'].concat(
  dirs.map(dir => {
    return {
      title: dir,
      collapsable: true,
      children: fs.readdirSync(dirpath + '/' + dir).map(childDir => {
        return '/blog/' + dir + '/' + childDir;
      })
    };
  })
);

console.log(sidebarArray);

module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/blog/about.md' },
      {
        text: 'More',
        items: [
          { text: 'Twitter', link: 'https://twitter.com/' },
          { text: 'GitHub', link: 'https://github.com/' },
          { text: 'Dribbble', link: 'https://dribbble.com/' }
        ]
      }
    ],
    sidebar: sidebarArray
  }
};
