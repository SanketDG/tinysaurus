module.exports = {
  title: "Tinysaurus",
  tagline: "Minimal scaffold for Docusaurus",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/tinysaurus",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "sanketdg", // Usually your GitHub org/user name.
  projectName: "tinysaurus", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "Tinysaurus",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/sanketdg/tinysaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} sanketdg. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "intro",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/sanketdg/tinysaurus/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
