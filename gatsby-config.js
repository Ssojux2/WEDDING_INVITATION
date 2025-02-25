/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Wedding Invitation`,
    siteUrl: `https://ornate-ganache-cbd5c5.netlify.app`,
    description: `A beautiful wedding invitation for a special day`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/`,
      },
    },
  ],
};