module.exports = {
  siteMetadata: {
    title: "AudioC0re",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "Mu0ZCOErnBipsJrJ7R0m-omD4eLhQLgssUEd0YHdWp8",
        spaceId: "b2pe2ibo0x1h",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
