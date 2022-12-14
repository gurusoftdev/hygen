module.exports = {
  title: 'Hygen',
  tagline: 'The scalable code generator that saves you time.',
  url: 'https://www.hygen.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jondot', // Usually your GitHub org/user name.
  projectName: 'hygen', // Usually your repo name.
  stylesheets: ['https://fonts.googleapis.com/css?family=Inter:400,600,700'],
  themeConfig: {
    navbar: {
      title: 'Hygen',
      logo: {
        alt: 'hygen logo',
        src: 'img/logo.png',
      },
      links: [
        { to: 'docs/quick-start', label: 'Docs', position: 'right' },
        {
          href: 'https://github.com/jondot/hygen/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Docs',
              to: 'docs/quick-start',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jondot/hygen/',
            },
          ],
        },
        {
          title: 'Use Cases',
          items: [
            {
              label: 'Redux',
              to: 'docs/redux',
            },
            {
              label: 'Express.js',
              to: 'docs/express',
            },
            {
              label: 'React Native',
              to: 'docs/react-native',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/hygen',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dotan J. Nahum. Built with Docusaurus.`,
    },
    prism: {
      defaultLanguage: 'bash',
      theme: require('prism-react-renderer/themes/ultramin'), // eslint-disable-line import/no-extraneous-dependencies
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebar.js'),
          editUrl: 'https://github.com/jondot/hygen/edit/master/hygen.io/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields: {
    features: [
      {
        image: 'simple.svg',
        title: 'Simplicity is Key',
        content:
          'Generators are self-contained and folder structure makes up the command structure. Complex is easy but simple is hard.',
      },
      {
        image: 'scalable.svg',
        title: 'Scales With Any Team',
        content:
          'Contextual template lookup, pull requests that look nice and clean, structured file organization, make generators fun again!',
      },
      {
        image: 'fast.svg',
        title: 'Fast is a Feature',
        content:
          'Constantly benchmarked and dependencies are carefully considered to shorten startup and generation time.',
      },
    ],
    stories: [
      {
        title: 'Speeding up your project’s development with scaffolds',
        avatar:
          'https://cdn-images-1.medium.com/fit/c/120/120/1*6MU5HEhXz8m0yZsOXet4Vw.png',
        link:
          'https://medium.com/@fccoelho7/speeding-up-your-projects-developing-with-custom-scaffolds-9ff88da7b4e9',
        tagline: 'By Fabio Carvalho on Medium.com',
      },

      {
        title:
          'Improve Developer Productivity with Generators and Team Conventions',
        avatar:
          'https://cdn-images-1.medium.com/fit/c/120/120/1*8FoXT_YXKtvSkSoulmhOZQ.jpeg',
        link:
          'https://blog.echobind.com/improve-developer-productivity-with-generators-and-team-conventions-2b79f5244783',
        tagline: 'By Chris Ball on Medium.com',
      },
      {
        title: 'Javascript Jabber Ep. 312: Hygen w/Dotan Nahum',
        avatar: 'https://avatars1.githubusercontent.com/u/83390?s=460&v=4',
        link: 'https://devchat.tv/js-jabber/jsj-312-hygen-with-dotan-nahum/',
        tagline: 'By Dotan Nahum on Javascript Jabber',
      },
      {
        title: 'Supercharge your CreateReactApp workflow with Hygen',
        avatar:
          'https://cdn-images-1.medium.com/fit/c/120/120/1*qyTVPi5bg0s9pbFf_CBnWg.png',
        link:
          'https://medium.com/@jondot/supercharge-your-createreactapp-workflow-with-hygen-a9e6f1ca98e9',
        tagline: 'By Dotan Nahum on Medium.com',
      },
    ],
    usedIn: [
      {
        image: 'redux.svg',
        width: 100,
        title: 'Redux',
        link: 'redux',
        content:
          'Generators are self-contained and folder structure makes up the command structure. Complex is easy but simple is hard.',
      },
      {
        image: 'node.svg',
        width: 95,
        title: 'Express.js',
        link: 'express',
        content:
          'Contextual template lookup, pull requests that look nice and clean, structured file organization, make generators fun again!',
      },
      {
        image: 'react.svg',
        width: 175,
        title: 'React Native',
        link: 'react-native',
        content:
          'Constantly benchmarked and dependencies are carefully considered to shorten startup and generation time.',
      },
    ],
  },
}
