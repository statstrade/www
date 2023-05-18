// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Statstrade",
  tagline: "Build on Blockchain",
  url: "https://www.statstrade.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "statstrade", // Usually your GitHub org/user name.
  projectName: "www", // Usually your repo name.

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your rep|o.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
    plugins: [// ....
                  async function myPlugin(context, options) {
                    return {
                      name: "docusaurus-tailwindcss",
                      configurePostCss(postcssOptions) {
                        // Appends TailwindCSS and AutoPrefixer.
                        postcssOptions.plugins.push(require("tailwindcss"));
                        //postcssOptions.plugins.push(require("daisyui"));
                        postcssOptions.plugins.push(require("autoprefixer"));
                        return postcssOptions;
                      },
                    };
                  },
    ],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "he", "zh"],
  },
  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({navbar: {
        title: "",
        logo: {
          alt: "",
          src: "img/logo.svg",
            style: {
                "marginTop": -10,
                "width": "150%",
                "height": "150%"}
        },
        items: [
            { type: 'localeDropdown', position: 'left',
              style: {width: "100px"}},
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Guides"
          },
          { to: "/api", label: "API", position: "right" },
            
          { label: "Testnet", position: "right",
            to: "https://testnet.statstrade.io",
            className: "btn btn-primary navbar-sidebar-hide py-1",
            style: {"fontFamily": "Impact", "marginLeft": 20}}
            
          /*{ to: "/blog", label: "Blog", position: "left" }*/
          /*{
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          }*/
        ],
      },
      footer: {
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Guide",
                to: "/docs/intro",
              },
              {
                label: "API Reference",
                to: "/api",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          /*
          {
            title: "Community",
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
                label: "GitHub",
                href: "https://github.com/statstrade",
              },
            ],
          },*/
        ],
          copyright: `Copyright © ${new Date().getFullYear()} Tahto Group Co Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode : {
            defaultMode : 'dark',
            disableSwitch: true, //false,
            respectPrefersColorScheme: false
            //disableSwitch : true
      }
    }),
};

module.exports = config;
