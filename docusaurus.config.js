// @ts-check
const config = {
  title: 'DevOps Scenarios',
  url: 'https://ulrich-sun.github.io',
  baseUrl: '/devops-scenarios/',
  organizationName: 'ulrich-sun', // GitHub username
  projectName: 'devops-scenarios',     // GitHub repo name
  onBrokenLinks: 'warn', //'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
};
module.exports = config;
