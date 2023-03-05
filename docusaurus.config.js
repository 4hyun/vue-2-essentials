// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vue 2 Playbook",
  tagline:
    "This guidebook aims to provide a comprehensive set of tools and strategies for developers working with Vue 2.",
  // tagline: "Essentials for Building Enterprise Vue 2 Frontend",
  // "Resources and References for Creating Enterprise-Grade Vue 2 Frontend Applications",
  favicon: "img/favicon-argo-32x32.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "argo-pacific-inc", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/4hyun/vue-2-essentials",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Vue 2 Playbook",
        // logo: {},
        items: [
          {
            type: "doc",
            label: "The Guide",
            docId: "architecture/architecture",
            position: "right",
          },
          {
            href: "https://github.com/4hyun/vue-2-essentials",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Architecture",
                to: "docs/architecture/architecture",
              },
              {
                label: "Use Case - MLDL 3",
                to: "docs/examples/examples",
              },
              {
                label: "References",
                to: "docs/references/references",
              },
            ],
          },
          {
            title: "About Docusaurus",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Author",
                href: "https://github.com/4hyun",
              },
              {
                label: "Argo Pacific",
                href: "https://argopacific.io",
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus👍✨`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: { maxHeadingLevel: 5 },
    }),
  plugins: [
    // [require.resolve("@cmfcmf/docusaurus-search-local"), { language: "en" }],
    "docusaurus-plugin-sass",
  ],
}

module.exports = config
