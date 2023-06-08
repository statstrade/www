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
      "classic",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi-docs
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
    plugins: [
     [
       'docusaurus-plugin-openapi-docs',
       {
         id: "apiDocs",
         docsPluginId: "classic",
         config: {
           apiDocs: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
             specPath: "openapi.yaml", // Path to designated spec file
             outputDir: "api/classic", // Output directory for generated .mdx docs
             sidebarOptions: {
               groupPathsBy: "tag",
             },
           }
         }
       },
     ],
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
			  {
                label: "GitHub",
                href: "https://github.com/statstrade",
              }
            ]
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
