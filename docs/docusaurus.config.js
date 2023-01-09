// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'H2O Health',
  tagline: 'H2O Health',
  url: 'https://docs.h2o.ai',
  baseUrl: '/h2o-health/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'h2oai', // Usually your GitHub org/user name.
  projectName: 'h2o-health', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The name of deployment branch. Defaults to 'gh-pages' for non-organization GitHub Pages repos (projectName not ending in .github.io). Otherwise, this needs to be explicit as a config field or environment variable.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // lastVersion: 'current',
          // versions: {
          //   current: {
          //     label: 'v1.0.0',
          //     path: '/',
          //     badge: true,
          //     banner: 'none',
          //   },
          // },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")], //docusaurus local search
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'H2O AI Cloud | Docs',
        logo: {
          alt: 'H2O AI Cloud logo',
          src: 'img/h2o-logo/h2oai.png',
          href: 'https://docs.h2o.ai/haic-documentation/'
        },
        items: [
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          //   // dropdownItemsAfter: [{to: '/versions', label: 'Older versions'}, ],
          //   // Uncomment the line above to add a link to older MkDocs versions
          //   dropdownActiveClassDisabled: true,
          // },
          { to: 'https://docs.h2o.ai/haic-documentation/overview/what-is-h2o-ai-cloud', label: 'Platform', position: 'left', },
          { to: 'https://docs.h2o.ai/h2o-ai-cloud/', label: 'App Store', position: 'left', },
          { to: 'https://docs.h2o.ai/haic-documentation/applications', label: 'Applications', position: 'left', },
          { to: 'https://docs.h2o.ai/mlops/', label: 'Models', position: 'left', },
          { to: 'https://docs.h2o.ai/haic-documentation/engines', label: 'AI Engines', position: 'left', },
          { to: 'https://h2o.ai/platform/ai-cloud/', label: 'Learn more', position: 'right', },
          { to: 'https://h2o.ai/freetrial/', label: 'Free trial', position: 'right', },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About us',
            items: [
              {
                label: 'H2O.ai',
                href: 'https://h2o.ai/',
              },
              {
                label: 'Contact us',
                href: 'https://h2o.ai/company/contact-us/',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy policy',
                href: 'https://h2o.ai/legal/privacy/',
              },
              {
                label: 'Compliance & responsible AI',
                href: 'https://h2o.ai/insights/responsible-ai/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/h2oai',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/h2oai',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/c/H2Oai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href='https://h2o.ai' style='color:#FEC925'>H2O.ai</a>, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
